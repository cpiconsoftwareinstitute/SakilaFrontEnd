import React from 'react';
import { Link } from "../react-frames";
import './css/style.css'
import UpdateLanguage from './UpdateLanguage';
class LanguageRow extends React.Component {

    render() {
        const category = this.props.category;
        
        
        return (

          <>
            <tr>
            <td>{category.category_id}</td>
            <td>{category.name}</td>
            </tr>
            <br/>
          
          
            
          </> 
          
        );
      }
    }


   
     
  export default LanguageRow;