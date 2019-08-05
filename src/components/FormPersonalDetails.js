import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    margin: 15
  }
};
class FormPersonalDetails extends Component {
     continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
      const { values, handleChange } = this.props;
    return (
      <React.Fragment>
           <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FormPersonalDetails
          </Typography>
        </Toolbar>
      </AppBar>
          <TextField
             id="standard-firstName"
            label="firstName"
            margin="normal"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            id="standard-firstName"
            label="firstName"
            margin="normal"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
             id="standard-firstName"
            label="firstName"
            margin="normal"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          
           <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={this.continue}
            >
                Continue
            </Button>
             <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={this.back}
            >
                Back
            </Button>
        </React.Fragment>
    )
  }
}

export default FormPersonalDetails
