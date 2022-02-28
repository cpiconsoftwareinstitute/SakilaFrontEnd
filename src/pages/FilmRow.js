import React from 'react';

import './css/style.css'

class FilmRow extends React.Component {

        render() {
          const film = this.props.film;
          
      
          return (
            <div className="Board_film" >
            <tr>
              <td>{film.title}</td>
              <td>{film.description}</td>
              <td>{film.language.name}</td>
            </tr>
            </div>
          );
        }
      }


     
  export default FilmRow;