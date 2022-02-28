import React from 'react';
import FilmRow from './FilmRow';


class FilmsTable extends React.Component {
    render() {
  
       const filterText = this.props.filterText.toLowerCase();
       const afterYearOnly = this.props.afterYearOnly;
      
     

      const films = this.props.films;
      const rows = [];
      
      this.props.films.forEach((film) => {
        if (film.title.toLowerCase().indexOf(filterText) === -1) {
          return;
        }
        if (afterYearOnly && film.release_year < 2007) {
          return;
        }
        rows.push(
          
          
          <FilmRow
          film={film}
          key={film.title} />
            
        );
        
      });
      
      return (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default FilmsTable;

