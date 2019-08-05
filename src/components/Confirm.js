import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  button: {
    margin: 15
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


export default class Confirm extends Component {
        continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
      const {
      values: { firstName, lastName, email, occupation, city, bio }} = this.props;
      console.log(firstName, lastName, email)
    return (
      <React.Fragment>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography >
            Text only
          </Typography>
          <div>
            <List >
            
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={'Secondary text'}
                  />
                </ListItem>,
              
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            Icon with text
          </Typography>
          <div>
            <List>
              
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={'Secondary text'}
                  />
                </ListItem>,
              
            </List>
          </div>
        </Grid>
      </Grid>
          <br />
          <Button 
            variant="contained" 
            color="primary" 
            style={styles.button}
            onClick={this.continue}
            >
                Confirm & Continue
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
