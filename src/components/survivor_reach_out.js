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

  const CHARACTER_LIMIT = 300;
  const [message, setMessage] = React.useState({
    note: "",
  });

  const handleChange = (note) => (event) => {
    setMessage({ ...message, [note]: event.target.value });
  };

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
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
                paragraph
              >
                Please specify how {props.lawyerName} should contact you: ("I
                can be emailed at any time at xyz@gmail.com", "You can call me
                at 123-4567 on weekdays after 5pm but please do not leave a
                voicemail")
              </Typography>
              <TextField
                autoFocus
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
                    props.unsentLawyers[props.lawyerIndex],
                    "profile sent! awaiting response"
                  );
                  props.setSentLawyers(
                    [props.unsentLawyers[props.lawyerIndex]].concat(
                      props.sentLawyers
                    )
                  );
                  props.setUnsentLawyers(
                    props.unsentLawyers
                      .slice(0, props.lawyerIndex)
                      .concat(props.unsentLawyers.slice(props.lawyerIndex + 1))
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
                Practice Counties: Los Angeles
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Bio: Amy earned her J.D. from Georgetown University Law Center,
                where she began advocating for the rights of survivors of
                domestic violence as a student attorney in the Domestic Violence
                Clinic. After graduating from law school, Amy continued her
                advocacy as a lobbyist for the Georgia Coalition Against
                Domestic Violence and Georgia Women for a Change. After clerking
                for Fulton County Superior Court Chief Judge Gail S. Tusan in
                Atlanta, Amy joined the prestigious boutique law firm of Fellows
                LaBriola LLP where she litigated complex business, commercial,
                shareholder and insurance disputes. In addition to her
                litigation practice, Amy continued her advocacy as a Georgia
                Women’s Policy Institute Fellow, the Policy Chair for the Junior
                Leagues of Georgia and the founder of the Southern Center for
                Human Rights’ Ambassador Program. Amy joined FreeFrom as the
                Director of Law and Policy in 2019 after relocating from Atlanta
                to Los Angeles.
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
                Request Services
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}
