import { Link } from "../react-frames";
import Films from "./Films";
import axios from 'axios';
import Actor from "./Language";
import React,{useState} from 'react';

function DelLanguage() {
		const url ="http://localhost:8080/Homepage/DeleteActors/"
		const [data, setData] = useState({
			   
			   actor_id:""
			   
	  }) 
		 function submit(e){
  
			e.preventDefault();
			axios.delete(url+data.actor_id,{
			  actor_id: data.actor_id})
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
		  	  Actor ID:
              <input onChange={(e)=>handle(e)} id="actor_id" value={data.actor_id} 
              type="number" placeholder="actor_id"/>
          </label>
          <button>Submit</button>
        </form>
        </div>
        <Link target="main" component={Films}>
				Go to Films
	    </Link>
        <Link target="main" component={Actor}>
				Go to Actors
		</Link>
		</>
	);
}

export default DelLanguage;