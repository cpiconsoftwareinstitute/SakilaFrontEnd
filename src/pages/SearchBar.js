import React from 'react';

class SearchBar extends React.Component {
  
  render() {

    const filterText = this.props.filterText;
    const afterYearOnly = this.props.afterYearOnly;
    

    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText}
        onChange={(e)=>this.props.onFilterTextChange(e.target.value)}/>
        <p>
        <input type="checkbox" ckecked = {afterYearOnly} 
        onChange={(e)=>this.props.onAfterYearChange(e.target.checked)}/>
          Only show films of the 2019
        </p>
      </form>
    );
  }
}

export default SearchBar;