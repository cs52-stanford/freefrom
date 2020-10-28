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
import { Link } from "react-router-dom";

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
    maxWidth: 800,
    minWidth: "30rem",
    padding: "1rem",
    paddingTop: 0,
    marginBottom: "40px",
  },
  media: {
    height: 140,
  },
  large: {
    width: "70em",
    marginLeft: "auto",
    marginRight: "auto",
    alignSelf: "center",
    maxWidth: "350px",
  },
  contain: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "2rem",
  },
  cardContentBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "25px",
  },
  backButton: {
    marginTop: "2rem",
    marginLeft: "16px",
  },
  deleteButton: {
    marginTop: "2rem",
    marginRight: "16px",
  },
  topButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();

  let lawyer = props.allLawyers.find(user => user.userId === props.lawyerId);

  return (
    <ThemeProvider theme={themeA}>
      <Container className={classes.contain} maxWidth="lg">
        <Card className={classes.root}>
          <div className={classes.topButtons}>
            <Link to={lawyer.status === "New Match!" ? "/home" : "/connections"} style={{ textDecoration: "none" }}>
              <Button
                size="small"
                color="primary"
                className={classes.backButton}
              >
                Go back
            </Button>
            </Link>
            {((lawyer.status === "Meeting accepted") || (lawyer.status === "Meeting declined")) &&
              <Link to={`/delete/${lawyer.userId}`} style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  color="primary"
                  className={classes.deleteButton}
                >
                  Delete
                </Button>
              </Link>
            }
          </div>
          <CardContent className={classes.cardContentBox}>
            <img src={lawyer.photo} className={classes.large} />
            <div className={classes.flex}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {lawyer.name}
              </Typography>
              {lawyer.status === "Meeting accepted" &&
                <Typography
                  variant="subtitle1"
                  align="center"
                  paragraph
                >
                  Meeting accepted! {lawyer.name} has received your contact information and should be reaching out shortly!
              </Typography>
              }
              {lawyer.status === "Meeting declined" &&
                <Typography
                  variant="subtitle1"
                  align="center"
                  paragraph
                >
                  Unfortunately {lawyer.name} has chosen not to take a meeting about your case at this time. Try reaching out to other lawyers and make sure to check back often to see if you have any new matches!
              </Typography>
              }
              {(lawyer.status === "Meeting declined" && lawyer.declineMessage) &&
                <Typography
                  variant="subtitle1"
                  align="center"
                  paragraph
                >
                  A message from {lawyer.name} as to why he/she chose to decline a meeting about your case: "{lawyer.declineMessage}"
              </Typography>
              }
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="justify"
                paragraph
              >
                Bio: {lawyer.bio}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="justify"
                paragraph
              >
                Why he/she is interested in working with survivors: {lawyer.interest}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            {lawyer.status === "New Match!" &&
              <Link to={`/delete/${lawyer.userId}`} style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  color="primary"
                >
                  Delete
                </Button>
              </Link>
            }
            {lawyer.status !== "New Match!" ?
              <div></div> :
              <Link to={`/reach_out/${lawyer.userId}`} style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  color="primary"
                >
                  Request Services
              </Button>
              </Link>
            }
          </CardActions>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
