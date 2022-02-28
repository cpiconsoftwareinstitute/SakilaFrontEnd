import Actor from './Actor';
import Films from "./Films";
import { Link } from "../react-frames";
import axios from 'axios';
import React,{useState} from 'react';

function AddNewActor() {
    
  const url ="http://localhost:8080/Homepage/AddActors?first_name="
  const [data, setData] = useState({
       
       first_name:"",
       last_name:""
       
  }) 

  function submit(e){
  
    e.preventDefault();
    axios.post(url+data.first_name+"&last_name="+data.last_name,{
      first_name: data.first_name,
      last_name: data.last_name
    })
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
		  	  First Name:
              <input onChange={(e)=>handle(e)} id="first_name" value={data.first_name} type="text" placeholder="First Name"/>
          </label>
          <label>
		  	  Last Name:
              <input onChange={(e)=>handle(e)} id="last_name" value={data.last_name} type="text" placeholder="Last Name"/>
          </label>
          <button>Submit</button>
        </form>
        </div>
        <div>
        <Link target="main" component={Actor}>
				Go to Actor
	      </Link>
        
        <Link target="main" component={Films}>
				Go to Films
	      </Link>
        </div>
        </>


        
      );
    }
  

export default AddNewActor