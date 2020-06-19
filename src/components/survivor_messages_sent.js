import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import SurvivorReachOut from "./survivor_reach_out.js";

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
        Counsel Connect
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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
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
    paddingTop: "86.25%", // 16:9
    paddingBottom: "10.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    alignSelf: "center",
  },
}));

export default function Album(props) {
  const classes = useStyles();
  const counties = ["Santa Clara", "Los Angeles", "El Dorado", "San Francisco"];
  const bios = [
    "Protima Pandey runs the ...",
    "Amy earned her J.D. ...",
    "Drew graduated from ...",
    "Michele Dauber is a ...",
  ];
  const [viewProfile, setViewProfile] = useState(false);
  const [alreadySent, setAlreadySent] = useState(true);

  if (!viewProfile) {
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
                  Here are the lawyers you have reached out to - make sure to
                  check back to see if they've responded!
              </Typography>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {props.sentLawyers.map((card, index) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={props.lawyerPhotos[card]}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {props.lawyerNames[card]}
                        </Typography>
                        <Typography color="secondary" align="center" gutterBottom>
                          Status: {props.statuses[card]}
                        </Typography>
                        <Typography align="center">
                          Practice county: {counties[card]}
                        </Typography>
                        <Typography align="center">Bio: {bios[card]}</Typography>
                      </CardContent>
                      <CardActions className={classes.root}>
                        <Button
                          size="small"
                          color="primary"
                          onClick={function () {
                            props.setViewProfile(true);
                            props.setLawyerName(props.lawyerNames[card]);
                            props.setLawyerImage(props.lawyerPhotos[card]);
                            props.setLawyerIndex(card);
                            setViewProfile(true);
                          }}
                        >
                          View Full Profile
                      </Button>
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
  } else {
    return (
      <SurvivorReachOut
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
        setLawyerImage={props.setLawyerImage}
        setLawyerName={props.setLawyerName}
        setLawyerProfile={props.setLawyerProfile}
        lawyerName={props.lawyerName}
        lawyerImage={props.lawyerImage}
        lawyerProfile={props.lawyerProfile}
        statuses={props.statuses}
        lawyerNames={props.lawyerNames}
        lawyerPhotos={props.lawyerPhotos}
        setStatus={props.setStatus}
        isConfirmScreen={props.isConfirmScreen}
        setIsConfirmScreen={props.setIsConfirmScreen}
        unsentLawyers={props.unsentLawyers}
        sentLawyers={props.sentLawyers}
        lawyerIndex={props.lawyerIndex}
        setLawyerIndex={props.setLawyerIndex}
        setUnsentLawyers={props.setUnsentLawyers}
        setSentLawyers={props.setSentLawyers}
        alreadySent={alreadySent} />
    )
  };
}
