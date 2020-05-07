import React from "react";
import "./sign_up.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
  backgroundColor: "#e06d4f",
  color: "#fff",
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
  backgroundColor: "#f5f5f5",
  color: "#d4d4d4",
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
  padding: "0.5rem",
  width: "9rem",
  alignSelf: "center",
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
  const amounts = [
    "Nothing, I need free services",
    "Some fees ($50-$200)",
    "All fees (>$1000)",
  ];
  const times = ["Within 6 months", "Within 1 year", "Over 1 year ago"];
  const weapons = ["Yes", "No", "Not sure"];
  const email = ["Yes", "No"];
  const [questionNumber, setQuestionNumber] = React.useState(1);

  // checks to see if they have filled out every question
  const isFinished = () => {
    if (
      props.currentCounty !== "-" &&
      props.financialCapability !== "-" &&
      props.lastOccurred !== "-" &&
      props.abuseCounty !== "-" &&
      props.weaponsInvolved !== "-"
    ) {
      props.setCannotContinue(false);
    }
  };

  const handleCurrentCountyChange = (event) => {
    props.setCurrentCounty(event.target.value);
    isFinished();
  };
  const handleFinancialChange = (event) => {
    props.setFinancialCapability(event.target.value);
    isFinished();
  };
  const handleLastOccurredChange = (event) => {
    props.setLastOccurred(event.target.value);
    isFinished();
  };
  const handleAbuseCountyChange = (event) => {
    props.setAbuseCounty(event.target.value);
    isFinished();
  };
  const handleWeaponsChange = (event) => {
    props.setWeaponsInvolved(event.target.value);
    isFinished();
  };
  const handleEmailChange = (event) => {
    props.setEmailNotifications(event.target.value);
    isFinished();
  };
  const handleInfoChange = (event) => {
    props.setExtraInfo(event.target.value);
    isFinished();
  };

  if (questionNumber === 1) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <h5>Question {questionNumber} of 7 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                Where do you currently live?
              </InputLabel>
              <Select
                value={props.currentCounty}
                onChange={handleCurrentCountyChange}
              >
                {counties.map((label, index) => (
                  <MenuItem value={counties[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            style={nextStyle}
            onClick={function () {
              setQuestionNumber(2);
            }}
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
              style={backStyle}
              onClick={function () {
                setQuestionNumber(1);
              }}
            >
              {"<"} last question
            </Button>
            <h5>Question {questionNumber} of 7 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                How much money are you willing/able to spend on compensation?
              </InputLabel>
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
            style={nextStyle}
            onClick={function () {
              setQuestionNumber(3);
            }}
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
              style={backStyle}
              onClick={function () {
                setQuestionNumber(2);
              }}
            >
              {"<"} last question
            </Button>
            <h5>Question {questionNumber} of 7 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                How long ago did the abuse last occur?
              </InputLabel>
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
            style={nextStyle}
            onClick={function () {
              setQuestionNumber(4);
            }}
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
              style={backStyle}
              onClick={function () {
                setQuestionNumber(3);
              }}
            >
              {"<"} last question
            </Button>
            <h5>Question {questionNumber} of 7 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                Where did the abuse take place?
              </InputLabel>
              <Select
                value={props.abuseCounty}
                onChange={handleAbuseCountyChange}
              >
                {counties.map((label, index) => (
                  <MenuItem value={counties[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            style={nextStyle}
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
              style={backStyle}
              onClick={function () {
                setQuestionNumber(4);
              }}
            >
              {"<"} last question
            </Button>
            <h5>Question {questionNumber} of 7 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                Were there weapons involved?
              </InputLabel>
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
            style={nextStyle}
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
              style={backStyle}
              onClick={function () {
                setQuestionNumber(5);
              }}
            >
              {"<"} last question
            </Button>
            <h5>Question {questionNumber} of 7 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                Do you wish to recieve email notifications about new matches?
              </InputLabel>
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
            style={nextStyle}
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
              style={backStyle}
              onClick={function () {
                setQuestionNumber(6);
              }}
            >
              {"<"} LAST QUESTION
            </Button>
            <h5>Question {questionNumber} of 7 </h5>
            <p>
              If you'd like, you may use this space to share any more
              information about your situation.
            </p>
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
