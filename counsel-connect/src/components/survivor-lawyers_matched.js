import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
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
      main: "#73CEC5",
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    padding: theme.spacing(6, 0, 3),
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
}));

const cards = [1, 2, 3, 4, 5, 6];
const lawyerNames = [
  "RBG",
  "Amy",
  "Drew",
  "Elle Woods",
  "Mr. Generic",
  "Mrs. Generic",
];
const lawyerPhotos = [
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg",
  "https://images.squarespace-cdn.com/content/v1/56a24df4d8af10a5072bed7c/1563939557942-M33YY0ZL2ZN7Y0RR14Q7/ke17ZwdGBToddI8pDm48kBelsVAev15nrlBAFMzKsdEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tU2ReFwpVgSm7x-SgOFtAmJMoyi-Ta5HHhO2BVXHKKXdZR9z9mxWb0yLUToVqwSd/UNADJUSTEDNONRAW_thumb_23b.jpg",
  "https://www.callahan-law.com/wp-content/uploads/2020/01/att-bio-harbur.jpg",
  "https://i.insider.com/5c40e230524147386364af33?width=750&format=jpeg&auto=webp",
  "https://media.gettyimages.com/photos/smiling-lawyer-sitting-at-desk-in-office-picture-id104821116?s=612x612",
  "https://www.thebalance.com/thmb/jCOulTG9w5WGoY6lZIHKqOQlY64=/3633x3633/smart/filters:no_upscale()/Gettywomanlawyer-5955ab903df78cdc296e8f7e.jpg",
];
const statuses = ["new!", "new!", "new!", "new!", "new!", "new!"];

export default function Album(props) {
  const classes = useStyles();

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
                Welcome! Here are a list of lawyers who may be willing to take
                your case. Click "reach out" to send them your profile
                information and request legal help!
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={lawyerPhotos[index]}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {lawyerNames[index]}
                      </Typography>
                      <Typography color="secondary" align="center" gutterBottom>
                        Status: {statuses[index]}
                      </Typography>
                      <Typography align="center">
                        Practice county: placeholder
                      </Typography>
                      <Typography align="center">
                        Bio: here is some placeholder text
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={function () {
                          props.setViewProfile(true);
                          props.setLawyerName(lawyerNames[index]);
                          props.setLawyerImage(lawyerPhotos[index]);
                          statuses[index] = "viewed";
                        }}
                      >
                        View Full Profile
                      </Button>
                      <Button size="small" color="primary">
                        Reach Out
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
}
