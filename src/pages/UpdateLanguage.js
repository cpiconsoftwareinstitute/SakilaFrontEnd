import axios from 'axios';
import React,{useState} from 'react';

   

function  UpdateLanguage(){

        const url ="http://localhost:8080/Homepage/updateLanguage/"
        const [data, setData] = useState({
                       language_id:"",
                       name:""
                       
              })
        
		 function submit(e){
  
			e.preventDefault();
			axios.put(url+data.language_id+"?name="+data.name,{
              language_id: data.language_id,  
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
		  	  Language ID:
              <input onChange={(e)=>handle(e)} id="language_id" value={data.language_id} type="number" placeholder="language_id"/>
          </label>
          <label>
		  	  New Language:
              <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" placeholder="name"/>
          </label>

          <button>Update</button>
        </form>
        </div>
		</>
	);
}




 // ========================================
  
 export default UpdateLanguage;