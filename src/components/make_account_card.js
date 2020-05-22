import React, { useState, useEffect } from "react";
import "./sign_up.css";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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

const DemographicsCard = (props) => {
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // checks to see if they have filled out every question
  useEffect(() => {
    if (
      props.gender.length === 0 ||
      props.name === "name" ||
      props.email === "email" ||
      props.password === "" ||
      passwordConfirm === "Passwords do not match" ||
      passwordConfirm === ""
    ) {
      props.setCannotContinue(true);
    } else {
      props.setCannotContinue(false);
    }
  });

  const handleGenderChange = (event) => {
    props.setGender(event.target.value);
  };
  const handleEmailChange = (event) => {
    props.setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    props.setName(event.target.value);
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

          <div className="spacing">Gender(s):</div>

          <FormControl className="formSize">
            <Select value={props.gender} onChange={handleGenderChange} multiple>
              {genderOptions.map((label, index) => (
                <MenuItem value={genderOptions[index]}>{label}</MenuItem>
              ))}
            </Select>
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
