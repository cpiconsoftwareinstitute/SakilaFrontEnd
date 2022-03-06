import React from 'react';

class SearchBar2 extends React.Component {
  
  render() {

    const filterText = this.props.filterText;
    
    

    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText}
        onChange={(e)=>this.props.onFilterTextChange(e.target.value)}/>
      </form>
    );
  }
}

export default SearchBar2;