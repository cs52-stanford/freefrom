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

  let lawyer = props.allLawyers.filter(user => user.userId === props.lawyerId)[0];

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
              {lawyer.name}
            </Typography>
            <Avatar src={props.lawyerImage} className={classes.large} />
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              variant="subtitle1"
              align="center"
              paragraph
            >
              Practice Counties: {lawyer.counties}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Bio: {lawyer.bio}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={lawyer.status === "New Match!" ? "/home" : "/connections"}>
              <Button
                size="small"
                color="primary"
              >
                Go back
                </Button>
            </Link>
            {lawyer.status !== "New Match!" ?
              <div></div> :
              <Link to={`/reach_out/${lawyer.userId}`}>
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

