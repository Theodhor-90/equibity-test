import React from 'react';
import data from './js/data';
import Header from './components/Header';
import Main from './components/main/Main';
import Credits from './components/Credits';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      selectorKey: 'DM'
    }
    this.handleSelector = this.handleSelector.bind(this);
  }

  handleSelector(entry){
    this.setState({ selectorKey: entry})
  }



  render(){

    console.log(
      Object.entries(data)
    )

    return (
      <div className='main'>
        <Header selectorKey={this.state.selectorKey} handleSelector={this.handleSelector} />
        <Main selectorKey={this.state.selectorKey}/>
        <Credits />
      </div>
    );
  }

}

export default App;
