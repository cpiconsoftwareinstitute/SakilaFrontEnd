import React from "react";
import Films from "./Films";
import FilterableActorTable from "./FilterableActorTable";
import { Link } from "../react-frames";
import 	Language from "./Language";
import AddNewActor from "./AddNewActor";
import axios from 'axios';
import DelActor from "./DelActor";
import UpdateActor from "./UpdateActor";
class Actor extends React.Component{
	
	
	
		state = {
            actor: []
        }
        componentDidMount(){
            axios.get('http://localhost:8080/Homepage/AllActors').then(res =>{
                console.log(res);
                this.setState({ actor : res.data })
            });
          }
	render(){	  
	return (

		
		<>  
		    
		     <h2>List of Actors</h2>
		    <dl>
		    <FilterableActorTable data={this.state.actor}/>
			</dl>
			
			<h2> ------</h2>
			<dl>
			<Link target="main" component={Films}>
				Go to Films
			</Link>
			
			<Link target="main" component={AddNewActor}>
				Add a new actor
			</Link>	

			<Link target="main" component={DelActor}>
				Delete an actor
			</Link>
			<Link target="main" component={UpdateActor}>
				Update an actor
			</Link>
			</dl>
			<Link target="main" component={Language}>
				Go to Languages
			</Link>
			
		
 
		</>
	);
}
}
export default Actor;
