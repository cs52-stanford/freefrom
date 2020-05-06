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
import PhotoCamera from "@material-ui/icons/PhotoCamera";

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

const q2Style = {
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
  marginTop: "20rem",
};

const q3Style = {
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
  marginTop: "9rem",
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

const ProfileCard = (props) => {
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

  const compensations = ["Pro bono", "Sliding scale", "Contingency agreement"];
  const numbers = [1, 2, 3, 4, 5];
  const email = ["Yes", "No"];
  const [questionNumber, setQuestionNumber] = React.useState(1);

  const [practiceCounty, setPracticeCounty] = React.useState("-");
  const [experience, setExperience] = React.useState("-");
  const [compensationRequest, setCompensationRequest] = React.useState("-");
  const [photo, setPhoto] = React.useState("-");
  const [numNotifications, setNumNotifications] = React.useState(-1);
  const [emailNotifications, setEmailNotifications] = React.useState("-");

  const handlePracticeCountyChange = (event) => {
    setPracticeCounty(event.target.value);
    //isFinished();
  };
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
    //isFinished();
  };
  const handleCompensationRequestChange = (event) => {
    setCompensationRequest(event.target.value);
    //isFinished();
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
    //isFinished();
  };
  const handleNumNotificationsChange = (event) => {
    setNumNotifications(event.target.value);
    //isFinished();
  };

  /*
  const isFinished = () => {
    if (
      practiceCounty !== "-" &&
      experience !== "-" &&
      compensationRequest !== "-" &&
      photo !== "-" &&
      numNotifications !== -1
    ) {
      props.setCannotContinue(false);
    }
  };
  */

  if (questionNumber === 1) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <h5>Question {questionNumber} of 5 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                Where do you practice?
              </InputLabel>
              <Select
                value={practiceCounty}
                onChange={handlePracticeCountyChange}
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
            <h5>Question {questionNumber} of 5 </h5>
            <p>Brief description of legal history/experience:</p>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              fullWidth={true}
              onChange={handleExperienceChange}
            />
            <p>Bar number:</p>
            <TextField
              id="outlined-multiline-static"
              rows={1}
              variant="outlined"
              fullWidth={true}
            />
          </Container>
          <Button
            style={q2Style}
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
            <h5>Question {questionNumber} of 5 </h5>
            <p>Upload a profile picture:</p>
            <Button variant="contained" color="primary" component="span">
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={handlePhotoChange}
              />
              <PhotoCamera />
            </Button>
          </Container>
          <Button
            style={q3Style}
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
            <h5>Question {questionNumber} of 5 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                I am willing to work:
              </InputLabel>
              <Select
                value={compensationRequest}
                onChange={handleCompensationRequestChange}
              >
                {compensations.map((label, index) => (
                  <MenuItem value={compensations[index]}>{label}</MenuItem>
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
            <h5>Question {questionNumber} of 5 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                Up to how many notifications would you like to receive about
                potential cases each week?
              </InputLabel>
              <Select
                value={numNotifications}
                onChange={handleNumNotificationsChange}
              >
                {numbers.map((label, index) => (
                  <MenuItem value={numbers[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
        </Container>
      </Container>
    );
  }
};

export default ProfileCard;
