import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MusicNote from '@material-ui/icons/MusicNote';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: '100%',
    position: 'absolute',
    bottom:0,
    alignItems: 'center',
    justifyContents: 'center'
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
         <Typography variant="h6" color="inherit">
            Made with  <FavoriteIcon /> and <MusicNote /> : by Sudhakar AK
          </Typography>
    </BottomNavigation>
  );
}