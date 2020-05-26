import React from "react";
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

const DemographicsCard = () => {
  const [error, setError] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cannotContinue, setCannotContinue] = React.useState(true);
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  // checks to see if they have filled out every question
  React.useEffect(() => {
    if (
      gender.length === 0 ||
      name === "name" ||
      email === "email" ||
      password === "" ||
      passwordConfirm === "Passwords do not match" ||
      passwordConfirm === ""
    ) {
      setCannotContinue(true);
    } else {
      setCannotContinue(false);
    }
  });

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
  const checkPasswordsMatch = (event) => {
    if (event.target.value !== password) {
      setPasswordConfirm("Passwords do not match");
      setCannotContinue(true);
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
            <Select value={gender} onChange={handleGenderChange} multiple>
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
