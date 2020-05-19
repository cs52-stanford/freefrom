import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import { ListItemAvatar } from '@material-ui/core';
import Logo from "./counselCompassLogo.png";
import SettingsIcon from "./settings.png"
import LogOutIcon from "./logout.png"
import MatchesIcon from "./matches.png"
import ConnectionsIcon from "./connections.png"
import ButtonBase from '@material-ui/core/ButtonBase';
import { Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#e1f5fe",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      color: "#757575",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#e1f5fe",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  box: {
    display: "flex",
    backgroundColor: "inherit",
    width: "30%",
    height: "30%",
  },

}));

function SurvivorHeader(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
      <ListItem button key="matches" alignItems="center"
      onClick={() => {
        props.setIsSurvivorMatches(true);
        props.setIsSurvivorConnections(false);
        props.setIsSurvivorSettings(false);
        props.setViewProfile(false)
      }}>
            <ListItemAvatar>
            <Avatar
                src={MatchesIcon}
                variant="square"
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Matches"></ListItemText>
          </ListItem>
          <ListItem button key="connections" alignItems="center"
                onClick={() => {
                    props.setIsSurvivorMatches(false);
                    props.setIsSurvivorConnections(true);
                    props.setIsSurvivorSettings(false);
                    props.setViewProfile(false)
                  }}>
            <ListItemAvatar>
            <Avatar
                src={ConnectionsIcon}
                variant="square"
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Connections"></ListItemText>
          </ListItem>
      <ListItem button key="settings" alignItems="center"
            onClick={() => {
                props.setIsSurvivorMatches(false);
                props.setIsSurvivorConnections(false);
                props.setIsSurvivorSettings(true);
                props.setViewProfile(false)
              }}>
            <ListItemAvatar>
            <Avatar
                src={SettingsIcon}
                variant="square"
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Settings"></ListItemText>
          </ListItem>
          <ListItem button key="logout" alignItems="center"
            onClick={() => {
                props.setIsLogIn(false);
                props.setViewProfile(false)
            }}>
            <ListItemAvatar>
            <Avatar
                src={LogOutIcon}
                variant="square"
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Log Out"></ListItemText>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid justify="flex-end" className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar justify="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
              className={classes.box}
              src={Logo}
              variant="square"
            ></Avatar>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </Grid>
  );
}

SurvivorHeader.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SurvivorHeader;