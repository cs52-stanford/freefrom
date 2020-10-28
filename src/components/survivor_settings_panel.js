import React from 'react';
import { CirclePicker } from "react-color";
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
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./survivor.css"
import { css } from "@emotion/core";
import { auth, db } from "../services/firebase";
import * as firebase from "firebase/app";
import "firebase/storage";


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

const radioButtonStyle = {
  color: "#616771",
};


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

const amounts = [
  "Nothing, I need free services",
  "Some fees ($50-$200)",
  "All fees (>$1000)",
];

const times = ["Within 6 months", "Within 1 year", "Over 1 year ago"];
const weapons = ["Yes", "No", "Not sure"];
const email = ["Yes", "No"];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    height: 100,
    marginTop: 20,
    padding: '30px 30px',
    backgroundColor: "white",
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
    backgroundColor: "white",
  },
  CaseInfoPanel: {
    backgroundColor: "white",
  },
  SettingsText: {
    color: "#ef6548",
  },
  SubSettingsText: {
    color: "#000000",
    flexGrow: 1,
    marginLeft: ".5em",
  },
  caseTextbox: {
    flexGrow: 3,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "white",
  },
  InputLabel: {
    color: "black",
    fontSize: 20,
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    padding: theme.spacing(4, 0, 2),
    paddingTop: 0,
  },
  AccountGrid: {
    alignItems: "center",
  },
  colorItem: {
    marginTop: "1rem",
    alignItems: "center",
  },
  flexbox: {
    alignItems: "center",
    display: "flex",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8px",
  },
  fullWidthItem: {
    width: "100%",
  },
}));

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

const SurvivorSettingsPanel = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

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
  const amounts = [
    "Nothing, I need free services",
    "I am able to pay the legal fees",
  ];
  const times = ["Within 6 months", "Within 1 year", "Over 1 year ago"];
  const weapons = ["Yes", "No", "Not sure"];
  const email = ["Never", "Weekly", "Monthly", "For every new match"];

  const [updatedName, setName] = React.useState(props.userDetails.name);
  const [updatedEmail, setEmail] = React.useState(props.userDetails.email);
  const [updatedGender, setGender] = React.useState(props.userDetails.gender);
  const [updatedCurrentLocation, setCurrentLocation] = React.useState(props.userDetails.currentCounty);
  const [updatedFinances, setFinances] = React.useState(props.userDetails.financialCapability);
  const [updatedTime, setTime] = React.useState(props.userDetails.lastOccurred);
  const [updatedAbuseLocation, setAbuseLocation] = React.useState(props.userDetails.abuseCounty);
  const [updatedWeapons, setWeapons] = React.useState(props.userDetails.weaponsInvolved);
  const [updatedNotifications, setNotifications] = React.useState(props.userDetails.emailNotifications);
  const [updatedCaseInfo, setCaseInfo] = React.useState(props.userDetails.extraInfo);
  const [updatedColor, setColor] = React.useState(props.userDetails.color);

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

  async function updateCaseInfo() {
    await db.ref("users/" + auth().currentUser.uid).update({
      currentCounty: updatedCurrentLocation,
      financialCapability: updatedFinances,
      lastOccurred: updatedTime,
      abuseCounty: updatedAbuseLocation,
      weaponsInvolved: updatedWeapons,
      emailNotifications: updatedNotifications,
      extraInfo: updatedCaseInfo,
      color: updatedColor,
    });
  }

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
                Welcome to your settings! Be sure to keep your account and case information up to date.
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
                >
                  <Grid
                    container
                    className={classes.AccountGrid}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" align="center">Name</Typography></Grid>
                    <Grid item>
                      <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        fullWidth={true}
                        value={updatedName}
                        onChange={(event) => {
                          setName(event.target.value)
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
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Email</Typography></Grid>
                    <Grid item>
                      <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        fullWidth={true}
                        value={updatedEmail}
                        onChange={(event) => {
                          setEmail(event.target.value)
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
                    className={classes.center}
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
                  className={classes.CaseGrid}
                  direction="row"
                  spacing={3}
                >
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      Where do you currently live?
                        </InputLabel>
                    <Select
                      value={updatedCurrentLocation}
                      onChange={(event) => {
                        setCurrentLocation(event.target.value)
                      }}
                    >
                      {counties.map((label, index) => (
                        <MenuItem value={counties[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      How much money are you willing/able to spend on compensation?
                        </InputLabel>
                    <Select
                      value={updatedFinances}
                      onChange={(event) => {
                        setFinances(event.target.value)
                      }}
                    >
                      {amounts.map((label, index) => (
                        <MenuItem value={amounts[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      How long ago did the abuse last occur?
                        </InputLabel>
                    <Select
                      value={updatedTime}
                      onChange={(event) => {
                        setTime(event.target.value)
                      }}
                    >
                      {times.map((label, index) => (
                        <MenuItem value={times[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      Where did the abuse take place?
                        </InputLabel>
                    <Select
                      value={updatedAbuseLocation}
                      onChange={(event) => {
                        setAbuseLocation(event.target.value)
                      }}
                    >
                      {counties.map((label, index) => (
                        <MenuItem value={counties[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      Were there weapons involved?
                        </InputLabel>
                    <Select
                      value={updatedWeapons}
                      onChange={(event) => {
                        setWeapons(event.target.value)
                      }}
                    >
                      {weapons.map((label, index) => (
                        <MenuItem value={weapons[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                      How often, if at all, do you wish to recieve email notifications about new matches?
                        </InputLabel>
                    <Select
                      value={updatedNotifications}
                      onChange={(event) => {
                        setNotifications(event.target.value)
                      }}
                    >
                      {email.map((label, index) => (
                        <MenuItem value={email[index]}>{label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Grid
                    container
                    className={classes.flexbox}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Additional case information:</Typography></Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.flexbox}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item className={classes.fullWidthItem}>
                      <TextField
                        id="outlined-multiline-static"
                        className={classes.caseTextbox}
                        multiline
                        size="large"
                        fullWidth={true}
                        rows={4}
                        variant="outlined"
                        value={updatedCaseInfo}
                        onChange={(event) => {
                          setCaseInfo(event.target.value)
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.ColorItem}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item className={classes.ColorItem}><Typography className={classes.SubSettingsText} variant="h6" >Change your color identifier:</Typography></Grid>
                    <Grid item>
                      <CirclePicker
                        color={updatedColor}
                        onChange={(color) => {
                          setColor(color.hex)
                        }}></CirclePicker>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.center}
                    direction="row"
                    spacing={3}
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={updateCaseInfo}
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


export default SurvivorSettingsPanel
