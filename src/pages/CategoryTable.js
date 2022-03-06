import React from 'react';
import  CategoryRow from './CategoryRow';


class LanguageTable extends React.Component {
  render() {
  
    const filterText = this.props.filterText.toLowerCase();
  

   
   const rows = [];
   
   this.props.category.forEach((category) => {
     if (category.name.toLowerCase().indexOf(filterText) === -1) {
       return;
     }
     
     rows.push(
       
       
       <CategoryRow
       category={category}
       key={category.name} />
         
     );
     
   });
   
   return (
     <table border="1px solid black" >
       <thead>
         <tr>
           <th>ID</th>
           <th>Category</th>
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
