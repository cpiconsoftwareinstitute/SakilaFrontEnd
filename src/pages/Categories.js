import React from "react";
import { Link } from "../react-frames";
import FilterableCategoriesTable from "./FilterableCategoriesTable";
//import PostData from "./data/language.json"
import Films from "./Films";
import AddNewCategory from "./AddNewCategory";
import DelCategory from "./DelCategory";
import axios from 'axios';
import UpdateCategory from "./UpdateCategory";

//const a = [];
//{PostData.map((postDetail,index)=>{return a.push(postDetail)})}

class language extends React.Component {

	state = {
        category: []
    }

	componentDidMount(){
		axios.get('http://localhost:8080/Homepage/AllCategories').then(res =>{
			console.log(res);
			this.setState({ category : res.data })
		});
	  }
	
	render() {
	
	return (

		
		<>  
		    
		     <h2>List of Categories</h2>
		    <dl>
		    <FilterableCategoriesTable data={this.state.category}/>
			</dl>
			
			<h2> ------</h2>
			<dl>
			<Link target="main" component={Films}>
				Go to Films
			</Link>
			
			<Link target="main" component={AddNewCategory}>
				Add a new Category
			</Link>	
			<Link target="main" component={DelCategory}>
				Delete a Category
			</Link>
			<Link target="main" component={UpdateCategory}>
				Update a Category
			</Link>

			</dl>
			<d1>
			
			</d1>
			
 
		</>
	);
}
}

export default language;