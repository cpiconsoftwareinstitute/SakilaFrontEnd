import React from 'react';

import './css/style.css'

class ActorRow extends React.Component {

        render() {
          const actor = this.props.actor;
          
      
          return (
            <>
            <tr>
             <td>{actor.actor_id}</td>
             <td>{actor.first_name}</td>
             <td>{actor.last_name}</td>
            </tr>
            <br/>
            </>
          );
        }
      }


     
  export default ActorRow;