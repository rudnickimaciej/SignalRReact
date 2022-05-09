import React, {userState} from 'react'
import PersonRow from './PersonRow'

class PersonTable extends React.Component{

    render(){
        const filterText = this.props.filterText;
        const rows = []

        this.props.persons.forEach((person)=>{
            // if(person.name.indexOf(filterText) === -1){
            //     return;
            // }
            rows.push(<PersonRow person = {person}/>)

        })

    

    return(
        <table>
            <thead>
                <th> Name</th>
                <th> LastName</th>
                <th> Age </th>
            </thead>
            <tbody> 
                {rows}
            </tbody>
        </table>
    )
    }
}

export default PersonTable