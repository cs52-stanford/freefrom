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
  const [name, setName] = React.useState("name");
  const [gender, setGender] = React.useState("");
  const [email, setEmail] = React.useState("email");
  const [password, setPassword] = React.useState("");

  // potentially use to make sure required fields have been filled out?
  /*
  const isFinished = () => {
    if (
      gender !== "" &&
      name !== "name" &&
      email !== "email" &&
      password !== ""
    ) {
      props.setCannotContinue(true);
    } else {
      props.setCannotContinue(false);
    }
  };
  */

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
              value={gender}
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
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default DemographicsCard;
