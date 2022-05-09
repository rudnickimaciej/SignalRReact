import React, {userState} from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
        this.tick = this.tick.bind(this)
    }
    componentDidMount(){
        setInterval(this.tick, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
      }

     tick() {
         this.setState({date: new Date()})
      }      
     
    render(){

        return (
            <div>
              <span> Current time: {this.state.date.toLocaleTimeString()}.</span>
            </div>
          );}
}

export default Clock
