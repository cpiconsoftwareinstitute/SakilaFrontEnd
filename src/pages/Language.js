import React from "react";
import { Link } from "../react-frames";
import FilterableLanguageTable from "./FilterableLanguageTable";
//import PostData from "./data/language.json"
import Films from "./Films";
import AddNewLanguage from "./AddNewLanguage";
import DelLanguage from "./DelLanguage";
import axios from 'axios';
import UpdateLanguage from "./UpdateLanguage";

//const a = [];
//{PostData.map((postDetail,index)=>{return a.push(postDetail)})}

class language extends React.Component {

	state = {
        languages: []
    }

	componentDidMount(){
		axios.get('http://localhost:8080/Homepage/AllLanguages').then(res =>{
			console.log(res);
			this.setState({ languages : res.data })
		});
	  }
	
	render() {
	
	return (

		
		<>  
		    
		     <h2>List of Languages</h2>
		    <dl>
		    <FilterableLanguageTable data={this.state.languages}/>
			</dl>
			
			<h2> ------</h2>
			<dl>
			<Link target="main" component={Films}>
				Go to Films
			</Link>
			
			<Link target="main" component={AddNewLanguage}>
				Add a new language
			</Link>	
			<Link target="main" component={DelLanguage}>
				Delete a language
			</Link>
			<Link target="main" component={UpdateLanguage}>
				Update a language
			</Link>

			</dl>
			<d1>
			
			</d1>
			
 
		</>
	);
}
}

export default language;