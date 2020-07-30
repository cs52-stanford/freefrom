import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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

const useStyles = makeStyles((theme) => ({
  root: {
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
  content: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    maxWidth: "40rem",
  },
  actions: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  backButton: {
    marginTop: "1.5rem",
    marginLeft: "16px",
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  let survivor = props.allSurvivors.filter(user => user.userId === props.survivorId)[0];

  return (
    <ThemeProvider theme={themeA}>
      <Container className={classes.contain} maxWidth="lg">
        <Card className={classes.root}>
          <CardMedia
            className={("b").concat(survivor.color.substring(1))}
            title="Image title"
          />
          <Link to={survivor.status === "New Match!" ? "/home" : "/connections"} style={{ textDecoration: "none" }}>
            <Button
              size="small"
              color="primary"
              className={classes.backButton}
            >
              Go Back
              </Button>
          </Link>
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="center"
            >
              {survivor.name}
            </Typography>

            <Typography
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
            >
              Currently lives in: {survivor.currentCounty} County
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
            >
              Abuse last occurred: {survivor.lastOccurred}
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
            >
              Weapons involved: {survivor.weaponsInvolved}
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
              paragraph
            >
              What I can afford: {survivor.financialCapability}
            </Typography>
            {survivor.caseInfo &&
              <Typography
                variant="subtitle1"
                color="textSecondary"
                component="p"
                align="center"
                paragraph
              >
                Case Info: {survivor.caseInfo}
              </Typography>
            }
            {survivor.message.length > 0 &&
              <Typography
                variant="subtitle1"
                color="textSecondary"
                component="p"
                align="center"
                paragraph
              >
                Message from {survivor.name}: {survivor.message}
              </Typography>
            }
            {survivor.status === "Meeting accepted" &&
              <Typography
                variant="subtitle1"
                color="textPrimary"
                component="p"
                align="center"
                paragraph
              >
                How to contact {survivor.name}: {survivor.contactMessage}
              </Typography>
            }
          </CardContent>
          <CardActions className={classes.actions}>
            {survivor.status !== "New Match!" ?
              <div></div> :
              <Link to={`/decline/${survivor.userId}`} style={{ textDecoration: "none" }}>
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
              <Link to={`/confirm/${survivor.userId}`} style={{ textDecoration: "none" }}>
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
