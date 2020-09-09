import React, { useEffect, useState } from "react";
import "./sign_up.css";
import { CirclePicker } from "react-color";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  button: {
    ":disabled": {
      backgroundColor: "purple",
    },
  },
}));

const demoStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  backgroundColor: "#ffffff",
  color: "#273654",
  borderBottom: "3px solid #eeeeee",
  borderLeft: "2px solid #eee",
  borderRight: "2px solid #eee",
  borderRadius: "0.5rem",
  paddingTop: "30px",
  paddingBottom: "60px",
  textAlign: "left",
};

const nextStyle = {
  lineHeight: 1,
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: 300,
  textAlign: "center",
  fontFamily: "Montserrat, sans-serif",
  borderWidth: "initial",
  borderStyle: "none",
  borderColor: "initial",
  borderImage: "initial",
  borderRadius: "0.5rem",
  overflow: "visible",
  padding: "1rem 0.75rem",
  width: "50px",
  alignSelf: "center",
  marginLeft: "7px",
  paddingtop: "2rem",
  marginTop: "5.5rem",
};

const backStyle = {
  padding: "1rem",
};

const check = {
  display: "flex",
  flexDirection: "row",
};

const CaseCard = (props) => {
  const classes = useStyles();
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
  const abuseCounties = [
    "It did not take place in a California county",
    "Alameda County",
    "Alpine County",
    "Amador County",
    "Butte County",
    "Calaveras County",
    "Colusa County",
    "Contra Costa County",
    "Del Norte County",
    "El Dorado County",
    "Fresno County",
    "Glenn County",
    "Humboldt County",
    "Imperial County",
    "Inyo County",
    "Kern County",
    "Kings County",
    "Lake County",
    "Lassen County",
    "Los Angeles County",
    "Madera County",
    "Marin County",
    "Mariposa County",
    "Mendocino County",
    "Merced County",
    "Modoc County",
    "Mono County",
    "Monterey County",
    "Napa County",
    "Nevada County",
    "Orange County",
    "Placer County",
    "Plumas County",
    "Riverside County",
    "Sacramento County",
    "San Benito County",
    "San Bernardino County",
    "San Diego County",
    "San Francisco County",
    "San Joaquin County",
    "San Luis Obispo County",
    "San Mateo County",
    "Santa Barbara County",
    "Santa Clara County",
    "Santa Cruz County",
    "Shasta County",
    "Sierra County",
    "Siskiyou County",
    "Solano County",
    "Sonoma County",
    "Stanislaus County",
    "Sutter County",
    "Tehama County",
    "Trinity County",
    "Tulare County",
    "Tuolumne County",
    "Ventura County",
    "Yolo County",
    "Yuba County",
  ];
  const amounts = [
    "Nothing, I need free services",
    "I am able to pay the legal fees",
  ];
  const times = ["Within 6 months", "Within 1 year", "Over 1 year ago"];
  const weapons = ["Yes", "No", "Not sure"];
  const email = ["Never", "Weekly", "Monthly", "For every new match"];
  const [color, setColor] = useState("");
  const [questionNumber, setQuestionNumber] = React.useState(1);

  // checks to see if they have filled out every question
  useEffect(() => {
    if (
      props.currentCounty !== "" &&
      props.financialCapability !== "" &&
      props.lastOccurred !== "" &&
      props.abuseCounty !== "" &&
      props.weaponsInvolved !== "" &&
      props.emailNotifications !== "" &&
      props.color != ""
    ) {
      props.setCannotContinue(false);
    } else {
      props.setCannotContinue(true);
    }
  });

  const handleCurrentCountyChange = (event) => {
    props.setCurrentCounty(event.target.value);
  };
  const handleFinancialChange = (event) => {
    props.setFinancialCapability(event.target.value);
  };
  const handleLastOccurredChange = (event) => {
    props.setLastOccurred(event.target.value);
  };
  const handleAbuseCountyChange = (event) => {
    props.setAbuseCounty(event.target.value);
  };
  const handleWeaponsChange = (event) => {
    props.setWeaponsInvolved(event.target.value);
  };
  const handleEmailChange = (event) => {
    props.setEmailNotifications(event.target.value);
  };
  const handleInfoChange = (event) => {
    props.setExtraInfo(event.target.value);
  };
  const handleColorChange = (color) => {
    props.setColor(color.hex);
  };

  if (questionNumber === 1) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <Typography>Question {questionNumber} of 7 </Typography>
            <FormControl className={classes.formControl} fullWidth={true}>
              <Typography>Where do you currently live?</Typography>
              <Select
                value={props.currentCounty}
                onChange={handleCurrentCountyChange}
              >
                {counties.map((label, index) => (
                  <MenuItem value={counties[index]}>{label} County</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            onClick={function () {
              setQuestionNumber(2);
            }}
            disabled={props.currentCounty === ""}
          >
            NEXT
          </Button>
        </Container>
      </Container>
    );
  }

  if (questionNumber === 2) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <Button
              className="backStyle"
              variant="outlined"
              onClick={function () {
                setQuestionNumber(1);
              }}
            >
              last question
            </Button>
            <Typography>Question {questionNumber} of 7 </Typography>
            <FormControl className={classes.formControl} fullWidth={true}>
              <Typography>
                How much money are you willing/able to spend on compensation?
              </Typography>
              <Select
                value={props.financialCapability}
                onChange={handleFinancialChange}
              >
                {amounts.map((label, index) => (
                  <MenuItem value={amounts[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            onClick={function () {
              setQuestionNumber(3);
            }}
            disabled={props.financialCapability === ""}
          >
            NEXT
          </Button>
        </Container>
      </Container>
    );
  }

  if (questionNumber === 3) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <Button
              className="backStyle"
              variant="outlined"
              onClick={function () {
                setQuestionNumber(2);
              }}
            >
              last question
            </Button>
            <Typography>Question {questionNumber} of 7 </Typography>
            <FormControl className={classes.formControl} fullWidth={true}>
              <Typography>When was the last incidence of abuse?</Typography>
              <Select
                value={props.lastOccurred}
                onChange={handleLastOccurredChange}
              >
                {times.map((label, index) => (
                  <MenuItem value={times[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            onClick={function () {
              setQuestionNumber(4);
            }}
            disabled={props.lastOccurred === ""}
          >
            NEXT
          </Button>
        </Container>
      </Container>
    );
  }

  if (questionNumber === 4) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <Button
              className="backStyle"
              variant="outlined"
              onClick={function () {
                setQuestionNumber(3);
              }}
            >
              last question
            </Button>
            <Typography>Question {questionNumber} of 7 </Typography>
            <FormControl className={classes.formControl} fullWidth={true}>
              <Typography>Where did the abuse take place?</Typography>
              <Select
                value={props.abuseCounty}
                onChange={handleAbuseCountyChange}
              >
                {abuseCounties.map((label, index) => (
                  <MenuItem value={counties[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            disabled={props.abuseCounty === ""}
            onClick={function () {
              setQuestionNumber(5);
            }}
          >
            NEXT
          </Button>
        </Container>
      </Container>
    );
  }

  if (questionNumber === 5) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <Button
              className="backStyle"
              variant="outlined"
              onClick={function () {
                setQuestionNumber(4);
              }}
            >
              last question
            </Button>
            <Typography>Question {questionNumber} of 7 </Typography>
            <FormControl className={classes.formControl} fullWidth={true}>
              <Typography>Were there weapons involved?</Typography>
              <Select
                value={props.weaponsInvolved}
                onChange={handleWeaponsChange}
              >
                {weapons.map((label, index) => (
                  <MenuItem value={weapons[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            disabled={props.weaponsInvolved === ""}
            onClick={function () {
              setQuestionNumber(6);
            }}
          >
            NEXT
          </Button>
        </Container>
      </Container>
    );
  }

  if (questionNumber === 6) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <Button
              className="backStyle"
              variant="outlined"
              onClick={function () {
                setQuestionNumber(5);
              }}
            >
              last question
            </Button>
            <Typography>Question {questionNumber} of 7 </Typography>
            <FormControl className={classes.formControl} fullWidth={true}>
              <Typography>
                How often, if at all, do you wish to recieve email notifications about new matches?
              </Typography>
              <Select
                value={props.emailNotifications}
                onChange={handleEmailChange}
              >
                {email.map((label, index) => (
                  <MenuItem value={email[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            disabled={props.emailNotifications === ""}
            onClick={function () {
              setQuestionNumber(7);
            }}
          >
            NEXT
          </Button>
        </Container>
      </Container>
    );
  }

  if (questionNumber === 7) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <Button
              className="backStyle"
              variant="outlined"
              onClick={function () {
                setQuestionNumber(6);
              }}
            >
              LAST QUESTION
            </Button>
            <Typography paragraph>Question {questionNumber} of 7 </Typography>
            <Typography paragraph>
              Choose a color to customize your profile:{" "}
            </Typography>
            <CirclePicker onChange={handleColorChange}></CirclePicker>
            <Typography className="bottomText">
              Multiple choice questions are not able to fully capture your story.
              If you'd like, you may use this space to share any additional
              information about your case:
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              fullWidth={true}
              onChange={handleInfoChange}
            />
          </Container>
        </Container>
      </Container>
    );
  }
};

export default CaseCard;
