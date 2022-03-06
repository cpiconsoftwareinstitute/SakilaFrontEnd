import axios from 'axios';
import React,{useState} from 'react';

   

function  UpdateLanguage(){

        const url ="http://localhost:8080/Homepage/updateCategory/"
        const [data, setData] = useState({
                       category_id:"",
                       name:""
                       
              })
        
		 function submit(e){
  
			e.preventDefault();
			axios.put(url+data.category_id+"?name="+data.name,{
              category_id: data.category_id,  
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
		  	  Category ID:
              <input onChange={(e)=>handle(e)} id="category_id" value={data.category_id} type="number" 
              placeholder="category_id"/>
          </label>
          <label>
		  	  New Category:
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