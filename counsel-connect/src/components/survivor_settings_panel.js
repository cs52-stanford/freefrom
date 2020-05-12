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
import "./survivor.css"
import { css } from "@emotion/core";

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: "#F8F8FF",
      },
      InputLabel: {
        color: "#ff6f00",
        fontSize: 20,
      }
}));

const SurvivorSettingsPanel = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
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
                placeholder={"name"}
                value = {props.name}
                onChange={(event) => {
                    props.setName(event.target.value)
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
                placeholder={"email"}
                value = {props.email}
                onChange={(event) => {
                    props.setEmail(event.target.value)
                }}
            ></textarea>
            </Grid>
            </Grid>
            <Grid 
                    container
                    className={classes.Name}
                    direction="row"
                    spacing={3}
                    >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Password</Typography></Grid>
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
                placeholder={"password"}
                value = {props.password}
                onChange={(event) => {
                    props.setPassword(event.target.value)
                }}
            ></textarea>
            </Grid>
            </Grid>
            <Grid 
                    container
                    className={classes.Name}
                    direction="row"
                    spacing={3}
                    >
                    <Grid item><Typography className={classes.SubSettingsText} variant="h6" >Gender</Typography></Grid>
                    <Grid item>
                    <RadioGroup
                direction="row"
              aria-label="gender"
              name="gender1"
              value={props.gender}
              onChange={(event) => {
                  props.setGender(event.target.value)
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio style={radioButtonStyle} />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio style={radioButtonStyle} />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio style={radioButtonStyle} />}
                label="Other"
              />
            </RadioGroup>
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
          <Typography variant="h4" className={classes.SettingsText}>Case Information</Typography>
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
                            value={props.currentCounty}
                            onChange={(event) => {
                                props.setCurrentCounty(event.target.value)
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
                            value={props.financialCapability}
                            onChange={(event) => {
                                props.setFinancialCapability(event.target.value)
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
                            value={props.lastOccurred}
                            onChange={(event) => {
                                props.setLastOccurred(event.target.value)
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
                            value={props.abuseCounty}
                            onChange={(event) => {
                                props.setAbuseCounty(event.target.value)
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
                            value={props.weaponsInvolved}
                            onChange={(event) => {
                                props.setWeaponsInvolved(event.target.value)
                            }}
                        >
                            {weapons.map((label, index) => (
                            <MenuItem value={weapons[index]}>{label}</MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} fullWidth={true}>
                        <InputLabel className={classes.InputLabel} id="demo-simple-select-label">
                            Do you wish to receive email notifications about new matches?
                         </InputLabel>
                        <Select
                            value={props.emailNotifications}
                            onChange={(event) => {
                                props.setEmailNotifications(event.target.value)
                            }}
                        >
                            {email.map((label, index) => (
                            <MenuItem value={email[index]}>{label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}


export default SurvivorSettingsPanel
