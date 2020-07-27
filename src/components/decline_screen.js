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

async function confirmDecline(userId, message) {
    await db.ref("requests/" + auth().currentUser.uid + userId).update({
        lawyerStatus: "Meeting declined",
        survivorStatus: "Meeting declined",
        lawyerMessage: message,
    });
}

export default function MediaCard(props) {

    const [message, setMessage] = React.useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const classes = useStyles();
    let survivor = props.allRequests.filter(user => user.userId === props.userId)[0];

    return (
        <ThemeProvider theme={themeA}>
            <Container className={classes.contain} maxWidth="lg">
                <Card className={classes.root}>
                    <CardContent className={classes.cardContentBox}>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            variant="subtitle1"
                            align="center"
                            paragraph
                        >
                            Since this process is such a difficult one for domestic abuse suvivors, we strive to provide them with full transparency.
                            We'd appreciate if you could write a brief explanation as to why you are unable to move forward with their case:
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
                            value={message}
                            helperText={`character limit: ${message.length}/${CHARACTER_LIMIT}`}
                            onChange={handleChange}
                        />
                    </CardContent>
                    <CardActions>
                        <Link to={`/profile/${survivor.userId}`}>
                            <Button
                                size="small"
                                color="primary"
                            >
                                Go back
                        </Button>
                        </Link>
                        <Link to="/home">
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => confirmDecline(survivor.userId, message)}
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