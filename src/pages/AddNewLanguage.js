import { Link } from "../react-frames";
import Films from "./Films";
import axios from 'axios';
import React,{useState} from 'react';

function AddNewLanguage() {
		const url ="http://localhost:8080/Homepage/AddLanguages?name="
		const [data, setData] = useState({
			   
			   name:""
			   
	  }) 
		 function submit(e){
  
			e.preventDefault();
			axios.post(url+data.name,{
			  name: data.name})
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
		  	  Language:
              <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" placeholder="name"/>
          </label>
          <button>Submit</button>
        </form>
        </div>
        <Link target="main" component={Films}>
				Go to Films
	    </Link>
		</>
	);
}

export default AddNewLanguage;