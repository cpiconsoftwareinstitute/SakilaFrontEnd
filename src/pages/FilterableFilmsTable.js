import React from 'react';
import FilmsTable from './FilmsTable';
import SearchBar from './SearchBar';

class FilterableFilmsTable extends React.Component {
  
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
       
      <SearchBar 
                  filterText={this.state.filterText} 
                  afterYearOnly={this.state.afterYearOnly}
                  onFilterTextChange={this.handleFilterTextChange}
                  onAfterYearChange={this.handleAfterYearChange}
                  

                  />
                 
        <FilmsTable films={this.props.data} 
                    filterText={this.state.filterText}
                    afterYearOnly={this.state.afterYearOnly}
        />
        
        </div>
        
      );
    }
  }
  
  
      

  export default FilterableFilmsTable;