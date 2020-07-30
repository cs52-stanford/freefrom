import React, { useEffect } from "react";
import "./sign_up.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: "8rem",
    width: "8rem",
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
  borderColor: "#e06d4f",
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
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [bar, setBar] = React.useState("");

  const handlePracticeCountyChange = (event) => {
    props.setPracticeCounty(event.target.value);
  };
  const handleExperienceChange = (event) => {
    props.setExperience(event.target.value);
  };
  const handleBarChange = (event) => {
    setBar(event.target.value);
  };
  const handleCompensationRequestChange = (event) => {
    props.setCompensationRequest(event.target.value);
    if (props.numNotifications !== -1) {
      props.setCannotContinue(false);
    }
  };
  const handlePhotoChange = (event) => {
    props.setPhoto(event.target.value);
  };
  const handleNumNotificationsChange = (event) => {
    props.setNumNotifications(event.target.value);
    if (event.target.value !== -1) {
      props.setCannotContinue(false);
    }
  };

  useEffect(() => {
    if (
      props.practiceCounty.length !== 0 &&
      props.experience !== "" &&
      props.compensationRequest.length !== 0 &&
      props.photo !== "" &&
      props.numNotifications !== ""
    ) {
      props.setCannotContinue(false);
    } else {
      props.setCannotContinue(true);
    }
  });

  if (questionNumber === 1) {
    return (
      <Container style={demoStyle} maxWidth="sm">
        <Container style={check} maxWidth="sm">
          <Container maxWidth="sm" fixed={true}>
            <h5>Question {questionNumber} of 5 </h5>
            <FormControl className={classes.formControl}>
              <Typography>
                In which California county/counties do you practice?
              </Typography>
              <Select
                value={props.practiceCounty}
                onChange={handlePracticeCountyChange}
                multiple
              >
                {counties.map((label, index) => (
                  <MenuItem value={counties[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            disabled={props.practiceCounty.length === 0}
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
              variant="outlined"
              onClick={function () {
                setQuestionNumber(1);
              }}
            >
              last question
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
              onChange={handleBarChange}
            />
          </Container>
          <Button
            variant="contained"
            style={q2Style}
            color="primary"
            disabled={props.experience === "" || bar === ""}
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
              variant="outlined"
              onClick={function () {
                setQuestionNumber(2);
              }}
            >
              last question
            </Button>
            <h5>Question {questionNumber} of 5 </h5>
            <Typography>Upload a profile picture:</Typography>
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
            variant="contained"
            style={q3Style}
            color="primary"
            disabled={props.photo === ""}
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
              variant="outlined"
              onClick={function () {
                setQuestionNumber(3);
              }}
            >
              last question
            </Button>
            <h5>Question {questionNumber} of 5 </h5>
            <FormControl className={classes.formControl}>
              <Typography>
                I am willing to work (can select multiple):
              </Typography>
              <Select
                value={props.compensationRequest}
                multiple
                onChange={handleCompensationRequestChange}
              >
                {compensations.map((label, index) => (
                  <MenuItem value={compensations[index]}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
          <Button
            variant="contained"
            style={nextStyle}
            color="primary"
            disabled={props.compensationRequest.length === 0}
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
              variant="outlined"
              onClick={function () {
                setQuestionNumber(4);
              }}
            >
              last question
            </Button>
            <h5>Question {questionNumber} of 5 </h5>
            <FormControl className={classes.formControl} fullWidth={true}>
              <Typography>
                Up to how many notifications would you like to receive about
                potential cases each week?
              </Typography>
              <Select
                value={props.numNotifications}
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
