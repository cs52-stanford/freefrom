import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: "10rem",
  },
  media: {
    height: 140,
  },

  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "1rem",
  },

  contain: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2rem",
  },

  cardContentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  let survivor = props.allSurvivors.filter(user => user.userId === props.survivorId)[0];

  return (
    <ThemeProvider theme={themeA}>
      <Container className={classes.contain} maxWidth="lg">
        <Card className={classes.root}>
          <CardContent>
            <Link to={survivor.status === "New Match!" ? "/home" : "/connections"}>
              <Button
                size="small"
                color="primary"
              >
                Go Back
                </Button>
            </Link>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="center"
            >
              {survivor.name}
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
            >
              Current county: {survivor.currentCounty}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
            >
              Abuse last occurred: {survivor.lastOccurred}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
            >
              Weapons involved: {survivor.weaponsInvolved}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
              paragraph
            >
              What I can afford: {survivor.financialCapability}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="center"
              paragraph
            >
              Additional Info: {survivor.caseInfo}
            </Typography>
          </CardContent>
          <CardActions>
            {survivor.status !== "New Match!" ?
              <div></div> :
              <Link to={`/decline/${survivor.userId}`}>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  Decline Meeting
                </Button>
              </Link>
            }
            {survivor.status !== "New Match!" ?
              <div></div> :
              <Link to={`/confirm/${survivor.userId}`}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  Accept Meeting
                </Button>
              </Link>
            }
          </CardActions>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
