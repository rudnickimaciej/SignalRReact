import React, {userState} from 'react'

class NewPerson extends React.Component{

    render(){


    return(
        <div style={{float:'left'}}>
            <form id = "form1">
                <input placeholder='Name'/> 
                <input  placeholder='LastName'/>
                <input  placeholder='Age'/>
            </form>
            <button type="submit"  value="Submit">Add</button>
      </div>
    )}
}

export default NewPerson
