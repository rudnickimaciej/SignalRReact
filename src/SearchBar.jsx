import React, {userState} from 'react'

class SearchBar extends React.Component{

    constructor(props){
        super(props)
    }

    handleFilterTexChange(e){
        
    }

    render(){  
        return(
        <form>
            <input
                type = "text"
                placeholder = "Search..."
                value = {this.props.filerText}
                onChange = {this.handleFilterTexChange}
            />
        </form>
        )}

}

export default SearchBar