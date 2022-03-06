import React from 'react';
import CategoryTable from './CategoryTable';
import SearchBar2 from './SearchBar2';
class FilterableLanguageTable extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        filterText: "",
        afterYearOnly: false
      };
      this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
      this.handleAfterYearChange=this.handleAfterYearChange.bind(this);
    }
    handleFilterTextChange(FT){
      this.setState({
        filterText:FT
      })
  
    }
    handleAfterYearChange(AYC){
      this.setState({
        afterYearOnly:AYC
      })
    }
    
    render() {
      
      return (
        <div className='FilterableFilmsTable'> 
       
      <SearchBar2 
                  filterText={this.state.filterText} 
                  onFilterTextChange={this.handleFilterTextChange}
                  
                  

                  />
                 
        <CategoryTable category={this.props.data} 
                    filterText={this.state.filterText}
                    
        />
        
        </div>
        
      );
    }
  }
  
  
      

  export default FilterableLanguageTable;