import React from 'react';

import './css/style.css'

class FilmRow extends React.Component {

        render() {
          const film = this.props.film;
          
      
          return (
          <>
            <tr>              
              <th>{film.title}</th>
              <th>{film.film_id}</th>
              <td>{film.release_year}</td>
              <td>{film.language.name}</td>
              <td>{film.category.name}</td>
              <td>{film.rating}</td>
            </tr>
            <br/>
            <div>
             <b>Plot: </b>{film.description}
            </div>
            <br/>
            
          </> 
          );
        }
      }


     
  export default FilmRow;