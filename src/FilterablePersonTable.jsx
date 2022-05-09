import React, {userState} from 'react'
import PersonTable from './PersonTable';
import SearchBar from './SearchBar'


class FilterablePersonTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            filterText: ''
        };
    }
    render(){
        return(
           <div>
               <SearchBar
                filterText = {this.state.filterText}
                onFilterTextChange = {this.handleFilterTextChange}
               />
               <PersonTable
                persons = {this.props.persons}
                filterText = {this.state.filterText}
               />
           </div>
        )
    }
}

export default FilterablePersonTable