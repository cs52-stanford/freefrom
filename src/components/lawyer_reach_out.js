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

  const cases = ["My partner physically and emotionally abused me for about twelve months. It started with pushing and shoving and taking my keys when I wanted to leave. He was very insecure about past relationships and jealous of people he thought were a threat. The final straw was when he grabbed my arm and I fell down a flight of stairs trying to get away from him. I'm seeking compensation to pay for both the medical bills I had to pay for and the cost of the therapy sessions I am now attending.",
    "My name is Taylor and I am seeking compensation against my ex-boyfriend. Around three months ago we got into an verbal argument which escalated into physical violence. The conflict left me with visible facial injuries and a fractured wrist which required hospitalization. My hospital fees cost me thousands of dollars and as a result I need help getting compensation.",
    "I married an abusive man who had a severe drinking problem. He would take days off of work and drink terribly. When he would drink he would become particularly abusive. I became pregnant and it didn’t stop him. He would still knock me down, shake me, and push me into walls. I put up with it because I loved him. He never remembered the things he would do so I would blame the alcohol instead of him. Our relationship became so bad that I would miss a lot of work and my employer ended up firing me. I recently left him and am now living with my sister - I am hoping to get some money in a lawsuit so that I can afford to buy my own place and start my new life.",
    "I was married to a man who was frequently violent towards me. Every day things just got worse. When we were together he was very strict about who I went out with...I couldn’t easily go out with other people, girls or guys – I had no life. I felt I was a prisoner in my own home. If I did go out it was only with my family or him. I felt like a dog on a chain and I couldn’t get off it. He also hid money from me - I often wondered where half of our money had gone. He spent money on whatever he wanted, things he didn't need, but I wasn’t allowed. We were always broke. I finally feel ready to pursue a legal case against him and the way that he emotionally, physically, and financially abused me.",
    "I am seeking legal assistance to help me sue my ex-husband. He grew increasingly violent throughout our marriage, and I had to call the cops a few times because I was so scared. Over the past few years I've had to pay for various medical bills due to his abuse, including a fractured wrist. He never allowed me to get a job throughout the duration of our relationship so I am severely financially unstable and desperately need help."];

  const counties = ["Santa Clara", "Los Angeles", "El Dorado", "Marin", "San Francisco"];

  const contacts = ["I prefer to be called at 856-203-1245 on weekends.", "You can email me at tsmith@gmail.com", "I can be called at 651-834-0800 any day of the week", "You can email me at rhampton@gmail.com", "You can call my cellphone at 912-198-7679"];

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
                {props.survivorName}'s preferred method of contact: "{contacts[props.survivorIndex]}"
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
              >
                County: {counties[props.survivorIndex]}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
              >
                Abuse last occurred: Within 6 months
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
              >
                Weapons involved: Yes
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
                paragraph
              >
                Can afford legal fees: No
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="center"
                paragraph
              >
                Additional Info: {cases[props.survivorIndex]}
              </Typography>
            </CardContent>
            <CardActions>
              {props.alreadySent ?
                <div></div> :
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={function () {
                    props.setViewProfile(false);
                  }}
                >
                  Decline Meeting
              </Button>
              }
              {props.alreadySent ?
                <div></div> :
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={function () {
                    props.setIsConfirmScreen(true);
                  }}
                >
                  Accept Meeting
              </Button>
              }
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}
