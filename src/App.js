import React from 'react';
import Counter from './components/Counter'

// logical component
class App extends React.Component {

  // old syntax
  // constructor(props){
  //   super(props)
  //   this.state = { currentNum: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }
  // inc() {
  //   this.setState({ currentNum: this.state.currentNum + 1 })
  // }


  render (){
    return(
      <div>
      <h1>My Counter App</h1>
      <Counter color='green' title='mine'/> 
      <Counter color='orange' title='yours'/>
      <Counter color='blue' title='his'/>
      <Counter />
      <Counter />
      <Counter />
      </div>
    )
  }
}


export default App;
