import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { auth, db } from "../services/firebase";

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

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 140,
    },

    large: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "1rem",
    },

    contain: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
    },

    cardContentBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}));

const CHARACTER_LIMIT = 300;

async function sendRequest(lawyerId, message) {
    await db.ref("requests/" + lawyerId + auth().currentUser.uid).update({
        lawyerStatus: "New Match!",
        survivorStatus: "Profile sent, awaiting response",
        survivorMessage: message.note,
        survivorContact: message.contact,
    });
}

export default function MediaCard(props) {

    const [message, setMessage] = React.useState({
        note: "",
        contact: "",
    });

    const handleChange = (note) => (event) => {
        setMessage({ ...message, [note]: event.target.value });
    };

    const classes = useStyles();
    let lawyer = props.allLawyers.filter(user => user.userId === props.lawyerId)[0];

    return (
        <ThemeProvider theme={themeA}>
            <Container className={classes.contain} maxWidth="lg">
                <Card className={classes.root}>
                    <CardContent className={classes.cardContentBox}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            align="center"
                        >
                            Almost done!
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            variant="subtitle1"
                            align="center"
                            paragraph
                        >
                            By clicking 'confirm', you agree to have your profile
                            information (including any details about your case) sent to{" "}
                            {lawyer.name}. You may also add an optional message, if
                            you'd like:
                        </Typography>
                        <TextField
                            autoFocus
                            multiline
                            rows="3"
                            color="primary"
                            variant="outlined"
                            size="medium"
                            inputProps={{
                                maxlength: CHARACTER_LIMIT,
                            }}
                            value={message.note}
                            helperText={`character limit: ${message.note.length}/${CHARACTER_LIMIT}`}
                            onChange={handleChange("note")}
                        />
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            variant="subtitle1"
                            align="center"
                            paragraph
                        ></Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            variant="subtitle1"
                            align="center"
                            paragraph
                        >
                            Please specify how {lawyer.name} should contact you: ("I
                            can be emailed at any time at xyz@gmail.com", "You can call me
                            at 123-4567 on weekdays after 5pm but please do not leave a
                            voicemail")
                        </Typography>
                        <TextField
                            color="primary"
                            variant="outlined"
                            size="medium"
                            value={message.contact}
                            onChange={handleChange("contact")}
                        />
                    </CardContent>
                    <CardActions>
                        <Link to={`/profile/${lawyer.userId}`} style={{ textDecoration: "none" }}>
                            <Button
                                size="small"
                                color="primary"
                            >
                                Go back
                        </Button>
                        </Link>
                        <Link to="/home" style={{ textDecoration: "none" }}>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => sendRequest(lawyer.userId, message)}
                            >
                                Confirm
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Container>
        </ThemeProvider>
    );
}