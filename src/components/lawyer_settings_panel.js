import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Container from "@material-ui/core/Container";
import "./survivor.css"
import TextField from "@material-ui/core/TextField";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import { css } from "@emotion/core";
import { auth, db } from "../services/firebase";
import * as firebase from "firebase/app";
import "firebase/storage";

const radioButtonStyle = {
  color: "#616771",
};


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


const counties = [
  "Alameda",
  "Alpine",
  "Amador",
  "Butte",
  "Calaveras",
  "Colusa",
  "Contra Costa",
  "Del Norte",
  "El Dorado",
  "Fresno",
  "Glenn",
  "Humboldt",
  "Imperial",
  "Inyo",
  "Kern",
  "Kings",
  "Lake",
  "Lassen",
  "Los Angeles",
  "Madera",
  "Marin",
  "Mariposa",
  "Mendocino",
  "Merced",
  "Modoc",
  "Mono",
  "Monterey",
  "Napa",
  "Nevada",
  "Orange",
  "Placer",
  "Plumas",
  "Riverside",
  "Sacramento",
  "San Benito",
  "San Bernardino",
  "San Diego",
  "San Francisco",
  "San Joaquin",
  "San Luis Obispo",
  "San Mateo",
  "Santa Barbara",
  "Santa Clara",
  "Santa Cruz",
  "Shasta",
  "Sierra",
  "Siskiyou",
  "Solano",
  "Sonoma",
  "Stanislaus",
  "Sutter",
  "Tehama",
  "Trinity",
  "Tulare",
  "Tuolumne",
  "Ventura",
  "Yolo",
  "Yuba",
];

const compensations = ["Pro bono", "Sliding scale", "Contingency agreement"];
const numbers = [1, 2, 3, 4, 5];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 100,
    marginTop: 20,
    padding: '30px 30px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  AccountInfoPanel: {
    backgroundColor: "#eee",
  },
  CaseInfoPanel: {
    backgroundColor: "#eee",
  },
  SettingsText: {
    color: "#ff6f00",
  },
  SubSettingsText: {
    color: "#000000",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "#F8F8FF",
  },
  InputLabel: {
    color: "#ff6f00",
    fontSize: 20,
  },
  profilepic: {
    height: "70%",
  },
  profileupload: {
    marginTop: 50,
  },
  AccountGrid: {
    marginBottom: "1rem",
  },
}));

const LawyerSettingsPanel = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [updatedName, setName] = React.useState(props.userDetails.name);
  const [updatedEmail, setEmail] = React.useState(props.userDetails.email);
  const [updatedGender, setGender] = React.useState(props.userDetails.gender);
  const [updatedCounty, setCounty] = React.useState(props.userDetails.practiceCounty);
  const [updatedBio, setBio] = React.useState(props.userDetails.experience);
  const [updatedPhoto, setPhoto] = React.useState(props.photoUrl);
  const [updatedCompensation, setCompensation] = React.useState(props.userDetails.compensationRequest);
  const [updatedNotifications, setNotifications] = React.useState(props.userDetails.numNotifications);

  console.log("photo URL: ", props.photoUrl);
  console.log("photo variable: ", updatedPhoto);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  async function updateAccountInfo() {
    await db.ref("users/" + auth().currentUser.uid).update({
      name: updatedName,
      email: updatedEmail,
      gender: updatedGender,
    });

    var user = auth().currentUser;
    await user.updateEmail(updatedEmail).then(function () {
      // Update successful.
      console.log("success updating email");
    }).catch(function (error) {
      // An error happened.
      console.log("error updating email");
    });
  }

  async function updateProfileInfo() {
    // update profile info
    await db.ref("users/" + auth().currentUser.uid).update({
      practiceCounty: updatedCounty,
      experience: updatedBio,
      compensationRequest: updatedCompensation,
      numNotifications: updatedNotifications,
    });

    // check if photo needs to be updated
    if (updatedPhoto.name) {
      // delete old profile picture
      var storageRef = firebase.storage().ref('photos/' + auth().currentUser.uid);
      var photoRef = firebase.storage().ref().child('photos/' + auth().currentUser.uid);
      await photoRef.delete().then(function () {
        // File deleted successfully
      }).catch(function (error) {
        // Uh-oh, an error occurred!
      });
      // upload new profile picture
      const data = new FormData();
      data.append('file', updatedPhoto);
      await storageRef.put(updatedPhoto);
      var storageReference = firebase.storage().ref();
      await storageReference.child('photos/' + auth().currentUser.uid).getDownloadURL().then(function (url) {
        console.log("url:", url);
        props.setPhotoUrl(url);
      })
    }

  }

  const genderOptions = [
    "Transgender",
    "Genderqueer/Gender fluid",
    "Gender non-conforming/Non-binary",
    "Intersex",
    "Agender",
    "Two-spirit",
    "Cisgender",
    "Female/Femme",
    "Male/Masculine",
    "I prefer not to say",
    "I prefer to self-describe",
  ];

  const counties = [
    "Alameda",
    "Alpine",
    "Amador",
    "Butte",
    "Calaveras",
    "Colusa",
    "Contra Costa",
    "Del Norte",
    "El Dorado",
    "Fresno",
    "Glenn",
    "Humboldt",
    "Imperial",
    "Inyo",
    "Kern",
    "Kings",
    "Lake",
    "Lassen",
    "Los Angeles",
    "Madera",
    "Marin",
    "Mariposa",
    "Mendocino",
    "Merced",
    "Modoc",
    "Mono",
    "Monterey",
    "Napa",
    "Nevada",
    "Orange",
    "Placer",
    "Plumas",
    "Riverside",
    "Sacramento",
    "San Benito",
    "San Bernardino",
    "San Diego",
    "San Francisco",
    "San Joaquin",
    "San Luis Obispo",
    "San Mateo",
    "Santa Barbara",
    "Santa Clara",
    "Santa Cruz",
    "Shasta",
    "Sierra",
    "Siskiyou",
    "Solano",
    "Sonoma",
    "Stanislaus",
    "Sutter",
    "Tehama",
    "Trinity",
    "Tulare",
    "Tuolumne",
    "Ventura",
    "Yolo",
    "Yuba",
  ];

  const compensations = ["Pro bono", "Sliding scale", "Contingency agreement"];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ThemeProvider theme={themeA} className="backgroundColor">
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Welcome to your Settings! Be sure to keep your account and case information up to date.
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <ExpansionPanel className={classes.AccountInfoPanel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h4" className={classes.SettingsText}>Account Information</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    container
                    className={classes.AccountGrid}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Name</Typography></Grid>
                    <Grid item>
                      <textarea
                        className={css`
                        box-sizing: border-box;
                        height: calc(2.75em + 1.75rem + 2px);
                        display: block;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: rgb(73, 80, 87);
                        background-color: rgb(255, 255, 255);
                        background-clip: padding-box;
                        margin-bottom: 1rem;
                        margin-right: 0.5rem;
                        margin-top: 0.5rem;
                        width: 95%;
                        padding: 0.75rem 0.75rem;
                        border-width: 1px;
                        border-style: solid;
                        border-color: rgb(206, 212, 218);
                        border-image: initial;
                        border-radius: 0.25rem;
                        `}
                        placeholder={props.userDetails.name}
                        value={updatedName}
                        onChange={(event) => {
                          setName(event.target.value)
                        }}
                      ></textarea>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.AccountGrid}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Email</Typography></Grid>
                    <Grid item>
                      <textarea
                        className={css`
                        box-sizing: border-box;
                        height: calc(2.75em + 1.75rem + 2px);
                        display: block;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: rgb(73, 80, 87);
                        background-color: rgb(255, 255, 255);
                        background-clip: padding-box;
                        margin-bottom: 1rem;
                        margin-right: 0.5rem;
                        margin-top: 0.5rem;
                        width: 95%;
                        padding: 0.75rem 0.75rem;
                        border-width: 1px;
                        border-style: solid;
                        border-color: rgb(206, 212, 218);
                        border-image: initial;
                        border-radius: 0.25rem;
                        `}
                        placeholder={props.userDetails.email}
                        value={updatedEmail}
                        onChange={(event) => {
                          setEmail(event.target.value)
                        }}
                      ></textarea>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.AccountGrid}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Gender</Typography></Grid>
                    <Grid item>
                      <FormControl className="formSize">
                        <Select value={updatedGender} multiple onChange={(event) => {
                          setGender(event.target.value)
                        }}>
                          {genderOptions.map((label, index) => (
                            <MenuItem value={genderOptions[index]}>{label}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.Name}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={updateAccountInfo}
                      >
                        Update account information
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.CaseInfoPanel} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography variant="h4" className={classes.SettingsText}>Profile Information</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid
                  container
                  className={classes.AccountGrid}
                  direction="row"
                  spacing={3}
                >
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      Where do you practice?
                      </InputLabel>
                    <Select
                      value={updatedCounty}
                      multiple
                      onChange={(event) => {
                        setCounty(event.target.value)
                      }}
                    >
                      {counties.map((label, index) => (
                        <MenuItem value={counties[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Grid
                    container
                    className={classes.AccountGrid}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Brief description of legal history/experience:</Typography></Grid>
                    <Grid item>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth={true}
                        value={updatedBio}
                        onChange={(event) => {
                          setBio(event.target.value)
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.AccountGrid}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Profile Picture</Typography></Grid>
                    <Grid item>
                      <Avatar img variant="square" className={classes.profilepic} src={props.photoUrl}></Avatar>
                    </Grid>
                    <Grid item>
                      <Button className={classes.profileupload} variant="contained" color="primary" component="span">
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          type="file"
                          onChange={(event) => {
                            setPhoto(event.target.files[0]);
                            console.log(updatedPhoto);
                          }}
                        />
                        <PhotoCamera />
                      </Button>
                    </Grid>
                  </Grid>
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      I am willing to work:
                        </InputLabel>
                    <Select
                      value={updatedCompensation}
                      multiple
                      onChange={(event) => {
                        setCompensation(event.target.value)
                      }}
                    >
                      {compensations.map((label, index) => (
                        <MenuItem value={compensations[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      Up to how many notifications would you like to receive about
                      potential cases each week?
                        </InputLabel>
                    <Select
                      value={updatedNotifications}
                      onChange={(event) => {
                        setNotifications(event.target.value)
                      }}
                    >
                      {numbers.map((label, index) => (
                        <MenuItem value={numbers[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Grid
                    container
                    className={classes.Name}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={updateProfileInfo}
                      >
                        Update profile information
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Container>
        </main>
      </React.Fragment>
    </ThemeProvider>
  );
}


export default LawyerSettingsPanel;
