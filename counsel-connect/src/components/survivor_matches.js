import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from '@material-ui/core';

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
    color: '#ff5722'
  },
  mid_title: {
    flexGrow: 1,
    color: '#424242'
  },
  tool: {
      backgroundColor: '#e1f5fe'
  },
  logout: {
      color: '#ff5722'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.tool}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Civil Seeker
          </Typography>
          <IconButton className={classes.middleButton} color="inherit">
          </IconButton>
          <Typography variant="h6" className={classes.mid_title}>
            Matches
            </Typography>
            <IconButton className={classes.middleButton} color="inherit">
          </IconButton>
          <Typography variant="h6" className={classes.mid_title}>
            Resources
            </Typography>
            <IconButton className={classes.middleButton} color="inherit">
          </IconButton>
          <Typography variant="h6" className={classes.mid_title}>
            Settings
            </Typography>
          <Button className={classes.logout} color='#ff5722'>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    </Container>
  );
}
