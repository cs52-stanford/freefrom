import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tool: {
    backgroundColor: "#e1f5fe",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#757575",
  },
  middleButton: {
    marginRight: theme.spacing(0.5),
  },
  title: {
    flexGrow: 1,
    color: "#ff6f00",
  },
  matches: {
    flexGrow: 1,
    color: "#757575",
  },
  resources: {
    flexGrow: 1,
    color: "#757575",
  },
  settings: {
    flexGrow: 1,
    color: "#757575",
  },
  logout: {
    color: "#ff6f00",
  },
}));

export default function LawyerHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.tool}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Civil Seeker
          </Typography>
          <IconButton
            className={classes.middleButton}
            color="inherit"
          ></IconButton>
          <Button
            className={classes.home}
            id="home"
            onClick={() => {
              props.setIsHomeScreen(true);
              props.setIsResourceScreen(false);
            }}
          >
            Home
          </Button>
          <IconButton
            className={classes.middleButton}
            color="inherit"
          ></IconButton>
          <Button
            className={classes.resources}
            id="resources"
            onClick={() => {
              props.setIsResourceScreen(true);
              props.setIsHomeScreen(false);
            }}
          >
            Resources
          </Button>
          <IconButton
            className={classes.middleButton}
            color="inherit"
          ></IconButton>
          <Typography variant="h6" className={classes.settings}>
            Settings
          </Typography>
          <Button className={classes.logout} color={"inherit"}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
