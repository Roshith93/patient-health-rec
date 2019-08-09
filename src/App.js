import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import UserForm from './components/UserForm'
import FormUserDetails from './components/FormUserDetails'
import BornBaby from './components/BornBaby'
import Toddler from './components/Toddler'
import Adult from './components/Adult'
import PatientSignIn from './components/PatientSignIn'
import PatientSignUp from './components/PatientSignUp'
import Dashboard from './components/Dashboard/Dashboard'
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
        <Route exact path="/bornbaby" component={BornBaby} />
        <Route exact path="/toddler" component={Toddler} />
        <Route exact path="/adult" component={Adult} />
        <Route exact path="/dashboard" component={Dashboard} />
       </Switch>
    </div>
  );
  }
}

export default App;
