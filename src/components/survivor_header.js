import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../logo-test.png";
import Avatar from "@material-ui/core/Avatar";

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
    flexGrow: 3,
    marginRight: theme.spacing(0.5),
  },
  title: {
    flexGrow: 0.5,
    color: "#ff6f00",
  },
  matchestext: {
    color: "#757575",
  },
  connectionstext: {
    color: "#757575",
  },
  settingstext: {
    color: "#757575",
  },
  logout: {
    color: "#ff6f00",
  },
}));

export default function SurvivorHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.tool}>
          <Avatar className={classes.menuButton} src={Logo}></Avatar>
          <Typography variant="h4" className={classes.title}>
            Civil Seeker
          </Typography>
          <Button
            className={classes.middleButton}
            color="inherit"
            onClick={() => {
              props.setIsSurvivorMatches(true);
              props.setIsSurvivorSettings(false);
              props.setIsSurvivorConnections(false);
              props.setViewProfile(false);
            }}
          >
            <Typography variant="h6" className={classes.matchestext}>
              Home
            </Typography>
          </Button>
          <Button
            className={classes.middleButton}
            color="inherit"
            onClick={() => {
              props.setIsSurvivorMatches(false);
              props.setIsSurvivorSettings(false);
              props.setIsSurvivorConnections(true);
              props.setViewProfile(false);
            }}
          >
            <Typography variant="h6" className={classes.connectionstext}>
              Connections
            </Typography>
          </Button>
          <Button
            className={classes.middleButton}
            color="inherit"
            onClick={() => {
              props.setIsSurvivorMatches(false);
              props.setIsSurvivorSettings(true);
              props.setIsSurvivorConnections(false);
              props.setViewProfile(false);
            }}
          >
            <Typography variant="h6" className={classes.settingstext}>
              Settings
            </Typography>
          </Button>
          <IconButton
            className={classes.logout}
            color={"inherit"}
            onClick={() => {
              props.setIsLogIn(false);
              props.setViewProfile(false);
            }}
          >
            Logout
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
