import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { amber } from "@material-ui/core/colors";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./survivor.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
    marginTop: 80,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 40,
  },
  pos: {
    marginBottom: 12,
  },
  profilepic: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    width: "70%",
  },
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
    backgroundColor: "#e1f5fe",
  },
  cardcontent: {
    alignItems: "center",
    width: "100%",
  },
  BottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButton: {
    alignSelf: "flex-end",
  },
  pText: {
    alignSelf: "",
  },
}));

const themeA = createMuiTheme({
  root: {
    backgroundColor: "#e06d4f",
  },

  palette: {
    primary: {
      main: "#e06d4f",
    },
    secondary: {
      main: "#f7fff7",
    },
  },
});

const SurvivorReachOut = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [isDisplayingProfile, setIsDisplayingProfile] = useState(true);

  if (isDisplayingProfile) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.container} maxWidth="md">
          <Card className={classes.root}>
            <CardContent className={classes.cardcontent}>
              <Button
                className="DraftEmail"
                onClick={() => {
                  props.setViewProfile(false);
                }}
              >
                <Typography>GO BACK</Typography>
              </Button>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="center"
                variant="h3"
              >
                {props.lawyerName}
              </Typography>
              <Avatar
                img
                className={classes.profilepic}
                src={props.lawyerImage}
              ></Avatar>
              <div className="BottomRow">
                <Typography variant="p" align="center" paragraph="true">
                  Bio: This will eventually have the lawyer's bio but for now
                  this is just placeholder text.
                </Typography>
                <Button
                  variant="outlinedPrimary"
                  className="DraftEmail"
                  onClick={() => {
                    setIsDisplayingProfile(false);
                  }}
                >
                  <Typography>REQUEST SERVICES</Typography>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.container}>
          <Card className={classes.root}>
            <CardContent className={classes.cardcontent}>
              <div className="BottomRow">
                <p className={classes.pText}>
                  By clicking confirm you agree to send your profile
                  information, including any details you included about your
                  case, to {props.lawyerName}.
                </p>
                <div className="buttonRow">
                  <ColorButton
                    variant="contained"
                    className="confirmationButtons"
                    onClick={() => {
                      setIsDisplayingProfile(true);
                    }}
                  >
                    <Typography>GO BACK</Typography>
                  </ColorButton>
                  <ColorButton
                    variant="contained"
                    className={classes.confirmButton}
                    onClick={() => {
                      props.setViewProfile(false);
                      props.setStatus(props.lawyerIndex, "profile sent!");
                    }}
                  >
                    <Typography>CONFIRM</Typography>
                  </ColorButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
};

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(amber[900]),
    backgroundColor: amber[900],
    "&:hover": {
      backgroundColor: amber[900],
    },
  },
}))(Button);

export default SurvivorReachOut;
