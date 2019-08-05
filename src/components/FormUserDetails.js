import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
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
class FormUserDetails extends Component {
     continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid item lg={12}>
           <TextField
            id="standard-firstName"
            label="firstName"
            margin="normal"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            id="standard-lastName"
            label="lastName"
            margin="normal"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            onChange={handleChange('email')}
            defaultValue={values.email}
            id="standard-email"
            label="Email"
            margin="normal"
          />
          <br />
         
          <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={this.continue}
            >
                Next
            </Button>
        </Grid>
      </Container>
    </React.Fragment>
    )
  }
}

export default FormUserDetails
