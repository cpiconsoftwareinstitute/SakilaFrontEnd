import React from 'react';
import  LanguageRow from './LanguageRow';


class LanguageTable extends React.Component {
  render() {
  
    const filterText = this.props.filterText.toLowerCase();
    const afterYearOnly = this.props.afterYearOnly;
   
  

   
   const rows = [];
   
   this.props.language.forEach((language) => {
     if (language.name.toLowerCase().indexOf(filterText) === -1) {
       return;
     }
     if (afterYearOnly && language.release_year < 1990) {
       return;
     }
     rows.push(
       
       
       <LanguageRow
       language={language}
       key={language.name} />
         
     );
     
   });
   
   return (
     <table>
       <thead>
         <tr>
           <td>ID</td>
           <td>Name</td>
         </tr>
       </thead>
       <tbody>
      
        {rows}
        
       </tbody>
     </table>
   );
 }
}

  export default LanguageTable;
