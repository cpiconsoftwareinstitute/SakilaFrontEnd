import axios from 'axios';
import React,{useState} from 'react';

   

function  UpdateActor(){

    const url ="http://localhost:8080/Homepage/updateActor/"
    const [data, setData] = useState({
                   actor_id:"",
                   first_name:"",
                   last_name:"",
                   
          })
    
     function submit(e){

        e.preventDefault();
        axios.put(url+data.actor_id+"?first_name="+data.first_name+"&last_name="+data.last_name,{
          actor_id: data.actor_id,  
          first_name: data.first_name,
          last_name: data.last_name,})
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
              <input onChange={(e)=>handle(e)} id="actor_id" value={data.actor_id} type="text" placeholder="actor_id"/>
          </label>
          <label>
		  	  First Language:
              <input onChange={(e)=>handle(e)} id="first_name" value={data.first_name} type="text" placeholder="first_name"/>
          </label>
          <label>
		  	  Last Language:
              <input onChange={(e)=>handle(e)} id="last_name" value={data.last_name} type="text" placeholder="last_name"/>
          </label>

          <button>Update</button>
        </form>
        </div>
		</>
	);
}




 // ========================================
  
 export default UpdateActor;