import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ListItemAvatar } from "@material-ui/core";
import Logo from "./counselCompassLogo.png";
import SettingsIcon from "./settings.png";
import LogOutIcon from "./logout.png";
import MatchesIcon from "./matches.png";
import ListItem from "@material-ui/core/ListItem";
import ConnectionsIcon from "./connections.png";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(0, 0, 0),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#f7fff7",
    color: "#000000",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#757575",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f7fff7",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  box: {
    display: "flex",
    backgroundColor: "inherit",
    width: "25%",
    height: "25%",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.flex}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Avatar className={classes.box} src={Logo} variant="square"></Avatar>
          <Typography> </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key="matches"
            alignItems="center"
            onClick={() => {
              props.setIsSurvivorMatches(true);
              props.setIsSurvivorConnections(false);
              props.setIsSurvivorSettings(false);
              props.setViewProfile(false);
            }}
          >
            <ListItemAvatar>
              <Avatar src={MatchesIcon} variant="square"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Matches"></ListItemText>
          </ListItem>
          <ListItem
            button
            key="connections"
            alignItems="center"
            onClick={() => {
              props.setIsSurvivorMatches(false);
              props.setIsSurvivorConnections(true);
              props.setIsSurvivorSettings(false);
              props.setViewProfile(false);
            }}
          >
            <ListItemAvatar>
              <Avatar src={ConnectionsIcon} variant="square"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Connections"></ListItemText>
          </ListItem>
          <ListItem
            button
            key="settings"
            alignItems="center"
            onClick={() => {
              props.setIsSurvivorMatches(false);
              props.setIsSurvivorConnections(false);
              props.setIsSurvivorSettings(true);
              props.setViewProfile(false);
            }}
          >
            <ListItemAvatar>
              <Avatar src={SettingsIcon} variant="square"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Settings"></ListItemText>
          </ListItem>
          <ListItem
            button
            key="logout"
            alignItems="center"
            onClick={() => {
              props.setIsLogIn(false);
              props.setViewProfile(false);
            }}
          >
            <ListItemAvatar>
              <Avatar src={LogOutIcon} variant="square"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Log Out"></ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
