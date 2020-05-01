import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  middleButton: {
    marginRight: theme.spacing(0.5),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <container className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Civil Seeker
          </Typography>
          <IconButton className={classes.middleButton} color="inherit">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Matches
            </Typography>
            <IconButton className={classes.middleButton} color="inherit">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Resources
            </Typography>
            <IconButton className={classes.middleButton} color="inherit">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Settings
            </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </container>
  );
}
