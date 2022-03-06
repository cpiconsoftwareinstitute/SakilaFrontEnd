import { Link } from "../react-frames";
import Films from "./Films";
import axios from 'axios';
import Language from "./Language";
import React,{useState} from 'react';

function DelActor() {
		const url ="http://localhost:8080/Homepage/DeleteLanguages/"
		const [data, setData] = useState({
			   
			   name:""
			   
	  }) 
		 function submit(e){
  
			e.preventDefault();
			axios.delete(url+data.language_id,{
			  language_id: data.language_id})
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
		  	  Language ID:
              <input onChange={(e)=>handle(e)} id="language_id" value={data.language_id} 
              type="number" placeholder="language_id"/>
          </label>
          <button>Submit</button>
        </form>
        </div>
        <Link target="main" component={Films}>
				Go to Films
	    </Link>
        <Link target="main" component={Language}>
				Go to Languages
		</Link>
		</>
	);
}

export default DelActor;
