import React, {userState} from 'react'

class PersonRow extends React.Component{

    render(){
        const person = this.props.person;
    

    return(
        <tr>
            <td> {person.name} </td>
            <td> {person.lastName} </td>
            <td> {person.age} </td>
            <td> <button style = {{backgroundColor :"red", color: 'white'}}> DELETE</button></td>

        </tr>
    )
    }
}

export default PersonRow