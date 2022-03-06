import { Link } from "../react-frames";
import Films from "./Films";
import axios from 'axios';
import Language from "./Language";
import React,{useState} from 'react';

function DelFilms() {
		const url ="http://localhost:8080/Homepage/DeleteFilms/"
		const [data, setData] = useState({
			   
			   film_id:""
			   
	  }) 
		 function submit(e){
  
			e.preventDefault();
			axios.delete(url+data.film_id,{
			  film_id: data.film_id})
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
		  	  Film ID:
              <input onChange={(e)=>handle(e)} id="film_id" value={data.film_id} 
              type="number" placeholder="film_id"/>
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

export default DelFilms;