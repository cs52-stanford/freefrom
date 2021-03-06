import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import LawyerReachOut from "./survivor_profile.js";
import { ThemeProvider } from "@material-ui/styles";
import "./colors.css";

const themeA = createMuiTheme({
  root: {
    backgroundColor: "#e06d4f",
  },

  palette: {
    primary: {
      main: "#EB6548",
    },
    secondary: {
      main: "#00cdcd",
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CounselCompass
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(5, 0, 3),
    paddingTop: 0,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "30.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  // root: {
  //   alignSelf: "center",
  // },
}));

export default function Album(props) {
  const classes = useStyles();

  console.log(props.allRequests);
  const survivors = props.allRequests.filter(user => (user.status === "Meeting declined" || user.status === "Meeting accepted"));

  return (
    <ThemeProvider theme={themeA} className="backgroundColor">
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Below are the cases you've responded to:
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {survivors.map((survivor, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={("a").concat(survivor.color.substring(1))}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {survivor.name}
                      </Typography>
                      <Typography color="secondary" align="center" gutterBottom>
                        Status: {survivor.status}
                      </Typography>
                      <Typography align="center">
                        Location: {survivor.currentCounty}
                      </Typography>
                      <Typography align="center">
                        Case: {survivor.caseInfo.substring(0, 20).concat('...')}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/delete/${survivor.userId}`} style={{ textDecoration: "none" }}>
                        <Button
                          size="small"
                          color="primary"
                        >
                          Delete
                        </Button>
                      </Link>
                      <Link to={`/profile/${survivor.userId}`} style={{ textDecoration: "none" }}>
                        <Button
                          size="small"
                          color="primary"
                        >
                          View Case
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          ></Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    </ThemeProvider>
  );
}
