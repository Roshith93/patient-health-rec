import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import UserForm from './components/UserForm'
import FormUserDetails from './components/FormUserDetails'
import FormPersonalDetails from './components/FormPersonalDetails'
import PatientSignIn from './components/PatientSignIn'
import PatientSignUp from './components/PatientSignUp'
import {PeriodicConsumer} from './Context'


class App extends Component {
  render(){
  return (
    <div className="App">
       <PeriodicConsumer>
         {value =>console.log(value)}
       </PeriodicConsumer>
       <Switch>
        <Route exact path="/" component={FormUserDetails} />
        <Route exact path="/signin" component={PatientSignIn} />
        <Route exact path="/signup" component={PatientSignUp} />
        <Route exact path="/bornbaby" component={FormPersonalDetails} />
       </Switch>
    </div>
  );
  }
}

export default App;
