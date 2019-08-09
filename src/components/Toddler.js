import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {PeriodicConsumer} from '../Context'
import TitleBar from './TitleBar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


class Toddler extends Component {
  render() {
 

    return (
      <React.Fragment>
         <TitleBar title="Toddler"/> 
      <Container maxWidth="lg">
        <PeriodicConsumer>
            {value => {
             const {city, bio, occupation, back, front,handleChange} = value;
                return (
                   <React.Fragment>
                   <br/>
      <Typography variant="h5" gutterBottom>
        Please Fill in the details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Toddler first name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Toddler Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Toddler Blood Group</InputLabel>
                <Select
                  // value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={10}>A+</MenuItem>
                  <MenuItem value={20}>A-</MenuItem>
                  <MenuItem value={30}>B+</MenuItem>
                  <MenuItem value={30}>B-</MenuItem>
                  <MenuItem value={30}>AB+</MenuItem>
                  <MenuItem value={30}>AB-</MenuItem>
                  <MenuItem value={30}>O+</MenuItem>
                  <MenuItem value={30}>O-</MenuItem>
                </Select>
          </FormControl>
          
        </Grid>
        
        <Grid item xs={4} >
        <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Toddler Age</InputLabel>
                <Select
                  // value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
          </FormControl>
          
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="address2"
            name="address2"
            label="Parents Name"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="address2"
            name="address2"
            label="Mobile Number"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="state" name="state" label="Full Address" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
             <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Any Past medical condition</InputLabel>
                <Select
                  // value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Any special on going medical condition</InputLabel>
                <Select
                  // value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
          </FormControl>
        </Grid>
         <Grid item xs={6}>
          <TextField
            id="address2"
            name="address2"
            label="Remarks"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="file"
            id="address2"
            name="address2"
            label="Remarks"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12}>
      
          <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            // onClick={front}
            >
            {"  "}
                Save and Submit
            </Button>
            </Grid>
      </Grid>
    </React.Fragment>
                )
            }}
        </PeriodicConsumer>
      </Container>
          
        </React.Fragment>
    )
  }
}

export default Toddler

const styles = {
  button: {
    margin: 15
  }
};