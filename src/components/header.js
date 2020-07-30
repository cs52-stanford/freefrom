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
import SettingsIcon from "./settings.svg";
import LogOutIcon from "./logout.svg";
import MatchesIcon from "./home.svg";
import ListItem from "@material-ui/core/ListItem";
import ConnectionsIcon from "./chat.svg";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import { auth } from "../services/firebase";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import "./header.css";

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
    backgroundColor: "#fff",
    color: "#000000",
    boxShadow: "none",
    borderBottom: "6px solid #FB9394",
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
    backgroundColor: "#fff",
    borderRight: "6px solid #e3e3e3",
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
    width: "13rem",
    height: "4rem",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    marginLeft: "0px",
  },
  margin: {
    marginRight: theme.spacing(5),
  }
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
          <Typography className={classes.margin}> </Typography>
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
          <Link to="/home" style={{ textDecoration: "none" }}>
            <ListItem
              button
              key="matches"
              alignItems="center"
            >
              <ListItemAvatar>
                <Avatar src={MatchesIcon} variant="square" className={classes.icon}></Avatar>
              </ListItemAvatar>
              <ListItemText primary="HOME"></ListItemText>
            </ListItem>
          </Link>
          <Link to="/connections" style={{ textDecoration: "none" }}>
            <ListItem
              button
              key="connections"
              alignItems="center"
            >
              <ListItemAvatar>
                <Avatar src={ConnectionsIcon} variant="square" className={classes.icon}></Avatar>
              </ListItemAvatar>
              <ListItemText primary="CONNECTIONS"></ListItemText>
            </ListItem>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <ListItem
              button
              key="settings"
              alignItems="center"
            >
              <ListItemAvatar>
                <Avatar src={SettingsIcon} variant="square" className={classes.icon}></Avatar>
              </ListItemAvatar>
              <ListItemText primary="SETTINGS"></ListItemText>
            </ListItem>
          </Link>
          <ListItem
            button
            key="logout"
            alignItems="center"
            onClick={() => {
              auth().signOut();
            }}
          >
            <ListItemAvatar>
              <Avatar src={LogOutIcon} variant="square" className={classes.icon}></Avatar>
            </ListItemAvatar>
            <ListItemText primary="LOG OUT"></ListItemText>
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
