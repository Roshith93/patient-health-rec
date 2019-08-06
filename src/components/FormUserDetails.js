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
import {PeriodicConsumer} from '../Context'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';  
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SimpleBottomNavigation from './Footer'
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import LocalHospital from '@material-ui/icons/LocalHospital';
import {Link} from 'react-router-dom'
import TitleBar from './TitleBar'

class FormUserDetails extends Component {
  render() {
    return (
      <React.Fragment>
         <TitleBar />
      <Grid container spacing={3} style={{marginTop:20}}>
        <Grid item xs={12}>
            <Typography variant="h5"  className={styles.title}>
                Welcome to the 
            </Typography>
           <Typography variant="h4">
                Periodic Health Check Up
          </Typography>
            <Typography variant="h5">
             (Make Your Life Better)
          </Typography>
          
        </Grid>
        <Grid item xs={12}>
             <Typography variant="h5">
             Are You a
          </Typography>
        </Grid>
        <Grid item xs={12} >
        <Link to="/signin">
           <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            // onClick={front}
            >
             <SentimentVeryDissatisfied/> {"  "}  Patient
            </Button>
            </Link>
             <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            // onClick={front}
            >
            <LocalHospital /> {"  "}
                Physician
            </Button>
        </Grid>
        
         
      </Grid>
      <Container maxWidth="lg">
        <Grid item lg={12}>
        <PeriodicConsumer>
         {value => {
             const {firstName, lastName, email, front,handleChange} = value;
             return (
                 <React.Fragment>
                 {/* <TextField
                id="standard-firstName"
                label="firstName"
                margin="normal"
                onChange={handleChange('firstName')}
                defaultValue={firstName}
            />
            <br />
          <TextField
            id="standard-lastName"
            label="lastName"
            margin="normal"
            onChange={handleChange('lastName')}
            defaultValue={lastName}
          />
          <br />
          <TextField
            onChange={handleChange('email')}
            defaultValue={email}
            id="standard-email"
            label="Email"
            margin="normal"
          />
          <br />
          <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={front}
            >
                Next
            </Button> */}
            </React.Fragment>
             )
         }}
       </PeriodicConsumer>
        </Grid>
      </Container>
       <SimpleBottomNavigation />
    </React.Fragment>
    )
  }
}

export default FormUserDetails

const styles = {
  button: {
    margin: 15
  },
  title: {
      marginTop: 50
  }
 
};

