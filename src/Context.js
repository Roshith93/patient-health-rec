import React, { Component } from 'react'

const PeriodicContext = React.createContext();

class PeriodicProvider extends Component {
    state = {
        name: 'Helllo'
    }
  render() {
    return (
      <PeriodicContext.Provider value={{...this.state}}>
            {this.props.children}
      </PeriodicContext.Provider>
    )
  }
}

const PeriodicConsumer = PeriodicContext.Consumer;
export {PeriodicProvider, PeriodicConsumer}
