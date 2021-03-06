import { Link } from "../react-frames";
import Films from "./Films";
import axios from 'axios';
import React,{useState} from 'react';


function AddNewFilm() {
  const url ="http://localhost:8080/Homepage/AddFilms?title="
  const [data, setData] = useState({
       
	   title:"",
       description:"",
	   release_year:"",
	   language_id:"",
	   rental_duration:"",
	   length:"",
	   rating:"",
	   category_id:""

       
  }) 

  function submit(e){
  
    e.preventDefault();
    axios.post(url+data.title+"&description="+data.description+"&release_year="+data.release_year+"&language_id="+
	data.language_id+"&rental_duration="+data.rental_duration+"&length="+data.length+"&rating="+data.rating
	+"&category_id="+data.category_id,{
		title: data.title,
		description: data.description,
		release_year: data.release_year,
		language_id: data.language_id,
		rental_duration: data.rental_duration,
		length: data.length,
		rating: data.rating,
		category: data.category_id
	}).then(res =>{console.log(res.data)})
  }

  function handle(e){
  
	const newdata ={...data}
	newdata[e.target.id] = e.target.value
	setData(newdata)
	console.log(newdata)
 }

	return (
		<>
		<form onSubmit={(e)=> submit(e)}>
          <label>
		   Title:
              <input onChange={(e)=>handle(e)} id="title" value={data.name} type="text" name="title" />
          </label><br/>
		  <label>
		  Description:
              <input onChange={(e)=>handle(e)} id="description" value={data.name} type="text" name="description" />
          </label><br/>
		  <label>
		  Release_year:
              <input onChange={(e)=>handle(e)} id="release_year" value={data.name} type="number" name="release_year" />
          </label><br/>
		  <label>
		  Language_id: 
              <input onChange={(e)=>handle(e)} id="language_id" value={data.name} type="number" name="language_id" />
          </label><br/>
		  <label>
		  Rental duration: 
              <input onChange={(e)=>handle(e)} id="rental_duration" value={data.name} type="number" name="rental_duration" />
          </label><br/>
		  <label>
		  Length: 
              <input onChange={(e)=>handle(e)} id="length" value={data.name} type="number" name="length" />
          </label><br/>
		  <label>
		  Rating:
              <input onChange={(e)=>handle(e)} id="rating" value={data.name} type="text" name="rating" />
          </label><br/>
		  <label>
		  Category ID:
              <input onChange={(e)=>handle(e)} id="category_id" value={data.category_id} type="number" name="category_id" />
          </label><br/><br/>
          <button>Submit</button>
        </form>
		<div>
		<Link target="main" component={Films}>
				Go to Films
	      </Link>
        </div>
		</>
	);
}

export default AddNewFilm;