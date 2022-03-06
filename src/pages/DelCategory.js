import { Link } from "../react-frames";
import Films from "./Films";
import axios from 'axios';
import Categories from "./Categories";
import React,{useState} from 'react';

function DelActor() {
		const url ="http://localhost:8080/Homepage/DeleteCategories/"
		const [data, setData] = useState({
			   
			   name:""
			   
	  }) 
		 function submit(e){
  
			e.preventDefault();
			axios.delete(url+data.category_id,{
			  category_id: data.category_id})
			  .then(res =>{console.log(res.data)
			  
			  })
		}
		 function handle(e){
  
			const newdata ={...data}
			newdata[e.target.id] = e.target.value
			setData(newdata)
			console.log(newdata)
		 }
	return (
		<>
		<div>
      <form onSubmit={(e)=> submit(e)}>
          
          <label>
		  	  Category ID:
              <input onChange={(e)=>handle(e)} id="category_id" value={data.category_id} 
              type="number" placeholder="category_id"/>
          </label>
          <button>Submit</button>
        </form>
        </div>
        <Link target="main" component={Films}>
				Go to Films
	    </Link>
        <Link target="main" component={Categories}>
				Go to Categories
		</Link>
		</>
	);
}

export default DelActor;
