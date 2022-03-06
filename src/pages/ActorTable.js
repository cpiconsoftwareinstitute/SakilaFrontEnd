import React from 'react';
import ActorRow from './ActorRow';

class ActorTable extends React.Component {
    render() {
  
       const filterText = this.props.filterText.toLowerCase();
      
      
      
      const rows = [];
      
      this.props.actor.forEach((actor) => {
        if (actor.first_name.toLowerCase().indexOf(filterText) === -1) {
          return;
        }
    
        rows.push(
          
          
          <ActorRow
          actor={actor}
          key={actor.first_name} />
            
        );
        
      });
      
      return (
        <table border="1px solid black">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
            {rows}
          </thead>
          <tbody>

           
          </tbody>
        </table>
      );
    }
  }

  export default ActorTable;

