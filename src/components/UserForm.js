import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Success from './Success'
import Confirm from './Confirm'
import {PeriodicConsumer} from '../Context'


class UserForm extends Component {
 
  render() {
      return(

        <PeriodicConsumer>
         {value => {
             const { step } = value;
            switch (step) {
            case 1:
                return  <FormUserDetails />
            case 2:
                return  <FormPersonalDetails/>;
            case 3:
                return  <Confirm/>
            case 4:
                return <Success />;
            }
        }}
       </PeriodicConsumer>
      )
  }
}

export default UserForm
