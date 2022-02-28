import React from 'react';
import ActorRow from './ActorRow';

class ActorTable extends React.Component {
    render() {
  
       const filterText = this.props.filterText.toLowerCase();
       const afterYearOnly = this.props.afterYearOnly;
      
     

      
      const rows = [];
      
      this.props.actor.forEach((actor) => {
        if (actor.first_name.toLowerCase().indexOf(filterText) === -1) {
          return;
        }
        if (afterYearOnly && actor.release_year < 1990) {
          return;
        }
        rows.push(
          
          
          <ActorRow
          actor={actor}
          key={actor.first_name} />
            
        );
        
      });
      
      return (
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
            </tr>
          </thead>
          <tbody>
         
           {rows}
           
          </tbody>
        </table>
      );
    }
  }

  export default ActorTable;

