import React from 'react';

import './css/style.css'

class ActorRow extends React.Component {

        render() {
          const actor = this.props.actor;
          
      
          return (
            <div className="Board_film">
            
            <tr>
              <th>{actor.first_name}</th>
              <th>{actor.last_name}</th>
            </tr>
            </div>
          );
        }
      }


     
  export default ActorRow;