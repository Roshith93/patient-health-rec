import React, { Component } from 'react'
import FormUserDetails from './components/FormUserDetails'
import FormPersonalDetails from './components/FormPersonalDetails'
import Success from './components/Success'
import Confirm from './components/Confirm'

const PeriodicContext = React.createContext();

class PeriodicProvider extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    // next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState(prevState => {
            return{
                step: prevState.step + 1
            }
        })
    }
     // prev Step
    prevStep = () => {
        const { step } = this.state;
        this.setState(prevState => {
            return{
                step: prevState.step - 1
            }
        })
    }
  
    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    // Move to next page
     front = e => {
            e.preventDefault();
            this.nextStep();
    };

    // Move to previos page
    back = e => {
        e.preventDefault();
        this.prevStep();
    };

    

  render() {
    return (
      <PeriodicContext.Provider value={{
                ...this.state,
                handleChange:this.handleChange,
                front:this.front,
                back:this.back,
                nextStep:this.nextStep,
                prevStep:this.prevStep
            }}>
            {this.props.children}
      </PeriodicContext.Provider>
    )
  }
}

const PeriodicConsumer = PeriodicContext.Consumer;
export {PeriodicProvider, PeriodicConsumer}
