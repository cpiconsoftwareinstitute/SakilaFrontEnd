import React from "react";
import FilterableFilmsTable from "./FilterableFilmsTable";
import { Link } from "../react-frames";
import background from './images/films_background.jpg';
import "./css/style.css"
import AddNewFilm from "./AddNewFilm";
import axios from 'axios';

class Films extends React.Component{

    
        state = {
            films: []
        }
        componentDidMount(){
            axios.get('http://localhost:8080/Homepage/AllFilms').then(res =>{
                console.log(res);
                this.setState({ films : res.data })
            });
          }
    render(){     
	return (
		<>
        <h2>Films</h2>
        <div className="films_background">
			<dl>
			    <FilterableFilmsTable data={this.state.films}/>
				<dt></dt>
				<dd>
				
				</dd>
			</dl>
			<Link target="main" component={AddNewFilm}>
				Add a new film
			</Link>
			<dl>
			 			
			</dl>
        </div>
		</>
	);
}

}

export default Films;
