import React from 'react';

import './css/style.css'

class LanguageRow extends React.Component {

    render() {
        const language = this.props.language;
        
    
        return (
          <div className="Board_film">
          
          <tr>
            <th>{language.language_id}</th>
            <th>{language.name}</th>
          </tr>
          </div>
        );
      }
    }


   
     
  export default LanguageRow;