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
                By clicking 'confirm', you agree to contact {props.survivorName}
                .
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                paragraph
                align="center"
              >
                {props.survivorName}'s preferred method of contact: "I prefer to
                be called at 856-203-1245 on Saturdays or Sundays."
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
                    props.unsentSurvivors[props.survivorIndex],
                    "meeting accepted!"
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
              >
                County: Marin
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
              >
                Last incidence of abuse occurred: Within 6 months
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
                paragraph
              >
                Weapons involved: Yes
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                paragraph
              >
                Case Info: My name is Raven and I am seeking compensation
                against my ex-boyfriend. Three months ago we got into an
                argument which escalated into physical violence. The conflict
                left me with visible facial injuries and a fractured wrist which
                required hospitalization. My hospital fees cost thousands of
                dollars and as a result I need help getting compensation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setViewProfile(false);
                }}
              >
                Go back
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
