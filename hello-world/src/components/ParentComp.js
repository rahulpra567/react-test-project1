import React, { Component } from 'react'
import PureComp from '../PureComp'
import MemoComp from './MemoComp'
import RegComp from './RegComp'

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Rahul'
    }
  }
    
  componentDidMount() {
    setInterval(() => {
        this.setState({
            name: 'Rahul' 
        })
    }, 2000)
  }
  render() {
    console.log('********** Parent Comp ************');
    return (
      <div>
       Parent Component
       <MemoComp name={this.state.name}></MemoComp>
       {/* <RegComp name={this.state.name}></RegComp>   
       <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
