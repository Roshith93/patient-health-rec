import React,{Component} from 'react';
import './App.css';
import UserForm from './components/UserForm'
import {PeriodicConsumer} from './Context'


class App extends Component {
  render(){
  return (
    <div className="App">
       <UserForm />
       <PeriodicConsumer>
       {value =>console.log(value)}
       </PeriodicConsumer>
    </div>
  );
  }
}

export default App;
