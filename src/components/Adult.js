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


class Adult extends Component {
  render() {
 

    return (
      <React.Fragment>
         <TitleBar title="Adult Registration"/> 
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
            label="Patient first name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Patient Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Blood Group</InputLabel>
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
                <InputLabel htmlFor="age-simple">Age</InputLabel>
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
        <Grid item xs={12}>
             <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">On going medical condition</InputLabel>
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
        <Typography variant="p" gutterBottom>
        Blood Test
      </Typography>
        </Grid>
         <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="WBC"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="RBC"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="Haemogoblin"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="HCT"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
         <Grid item xs={4}>
        <Typography variant="p" gutterBottom>
        Stool Test
      </Typography>
        </Grid>
         <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="Colour"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="PH"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="Reducing Factor"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="address2"
            name="address2"
            label="Fat"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
         <Grid item xs={4}>
        <Typography variant="p" gutterBottom>
        Gastro Test
      </Typography>
        </Grid>
         <Grid item xs={6}>
          <TextField
            id="address2"
            name="address2"
            label="Gastric Values"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="p" gutterBottom>
        X- Ray Test
      </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            type="file"
            id="address2"
            name="address2"
            label="RBC"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="p" gutterBottom>
        CT Scan
      </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            type="file"
            id="address2"
            name="address2"
            label="RBC"
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

export default Adult

const styles = {
  button: {
    margin: 15
  }
};