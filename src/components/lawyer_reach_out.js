import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { css } from "@emotion/core";

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
    paddingTop: "5px",
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

  if (props.isConfirmScreen) {
    return (
      <ThemeProvider theme={themeA}>
        <Container className={classes.contain} maxWidth="lg">
          <Card className={classes.root}>
            <CardContent className={classes.cardContentBox}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Almost done!
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
                paragraph
              >
                By clicking 'confirm', you agree to give your contact
                information to {props.survivorName}.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setIsConfirmScreen(false);
                }}
              >
                Go back
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setViewProfile(false);
                  props.setIsConfirmScreen(false);
                  props.setStatus(
                    props.survivorIndex,
                    "awaiting survivor response!"
                  );
                  props.setSentSurvivors(
                    [props.unsentSurvivors[props.survivorIndex]].concat(
                      props.sentSurvivors
                    )
                  );
                  props.setUnsentSurvivors(
                    props.unsentSurvivors
                      .slice(0, props.survivorIndex)
                      .concat(
                        props.unsentSurvivors.slice(props.survivorIndex + 1)
                      )
                  );
                }}
              >
                Confirm
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={themeA}>
        <Container className={classes.contain} maxWidth="lg">
          <Card className={classes.root}>
            <CardContent>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setViewProfile(false);
                }}
              >
                Go Back
              </Button>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {props.survivorName}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
                paragraph
              >
                Location: placeholder
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Case Info: Eventually this will have the survivor's case
                information but for now here is some placeholder text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setUnsentSurvivors(
                    props.unsentSurvivors
                      .slice(0, props.survivorIndex)
                      .concat(
                        props.unsentSurvivors.slice(props.survivorIndex + 1)
                      )
                  );
                  props.setViewProfile(false);
                }}
              >
                Decline Meeting
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setIsConfirmScreen(true);
                }}
              >
                Accept Meeting
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}
