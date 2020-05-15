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
      main: "#e06d4f",
    },
    secondary: {
      main: "#f7fff7",
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
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const classes = useStyles();

  const CHARACTER_LIMIT = 300;
  const [message, setMessage] = React.useState({
    note: "",
  });

  const handleChange = (note) => (event) => {
    setMessage({ ...message, [note]: event.target.value });
  };

  if (isConfirmScreen) {
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
                By clicking 'confirm', you agree to have your profile
                information (including any details about your case) sent to{" "}
                {props.lawyerName}. You may also add an optional message, if
                you'd like:
              </Typography>
              <TextField
                autoFocus
                multiline
                rows="3"
                color="primary"
                variant="outlined"
                size="medium"
                inputProps={{
                  maxlength: CHARACTER_LIMIT,
                }}
                value={message.note}
                helperText={`character limit: ${message.note.length}/${CHARACTER_LIMIT}`}
                onChange={handleChange("note")}
              />
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  setIsConfirmScreen(false);
                }}
              >
                Go back
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setViewProfile(false);
                  setIsConfirmScreen(false);
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
                {props.lawyerName}
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
                Practice Counties: placeholder county1, placeholder county2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Bio: Eventually this will have the lawyer's full bio and profile
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
                  props.setViewProfile(false);
                }}
              >
                Go back
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  setIsConfirmScreen(true);
                }}
              >
                Request Services
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}
