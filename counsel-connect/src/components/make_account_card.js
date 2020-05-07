import React from "react";
import "./sign_up.css";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const radioButtonStyle = {
  color: "#616771",
};

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

const check = {
  display: "flex",
  flexDirection: "row",
};

const DemographicsCard = (props) => {
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  // checks to see if they have filled out every question
  const isFinished = () => {
    if (
      props.gender === "" ||
      props.name === "name" ||
      props.email === "email" ||
      props.password === ""
    ) {
      props.setCannotContinue(true);
    } else {
      props.setCannotContinue(false);
    }
  };

  const handleGenderChange = (event) => {
    props.setGender(event.target.value);
    isFinished();
  };
  const handleEmailChange = (event) => {
    props.setEmail(event.target.value);
    isFinished();
  };
  const handleNameChange = (event) => {
    props.setName(event.target.value);
    isFinished();
  };
  const handlePasswordChange = (event) => {
    props.setPassword(event.target.value);
  };
  const checkPasswordsMatch = (event) => {
    if (event.target.value !== props.password) {
      setPasswordConfirm("Passwords do not match");
      props.setCannotContinue(true);
    } else {
      setPasswordConfirm(" ");
      isFinished();
    }
  };

  return (
    <Container style={demoStyle} maxWidth="sm">
      <Container style={check} maxWidth="sm">
        <Container maxWidth="sm">
          <TextField
            required
            id="outlined-required"
            label="Name/Alias"
            variant="outlined"
            className="spacing"
            margin="normal"
            onChange={handleNameChange}
            autoFocus
          />

          <div className="spacing">Gender:</div>

          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={props.gender}
              onChange={handleGenderChange}
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
          </FormControl>
        </Container>
        <Container>
          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            className="spacing2"
            margin="normal"
            onChange={handleEmailChange}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            onChange={handlePasswordChange}
          />
          <TextField
            required
            helperText={passwordConfirm}
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            onChange={checkPasswordsMatch}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default DemographicsCard;
