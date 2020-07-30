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
        maxWidth: "40rem",
    },
}));

async function handleConfirm(userId) {
    return await db.ref("requests/" + auth().currentUser.uid + userId).update({
        lawyerStatus: "Meeting accepted",
        survivorStatus: "Meeting accepted",
    });
}

export default function ConfirmScreen(props) {

    const classes = useStyles();
    let survivor = props.allRequests.filter(user => user.userId === props.userId)[0];

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
                            By clicking 'confirm', you agree to contact {survivor.name}.
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            paragraph
                            align="center"
                        >
                            {survivor.name}'s preferred method of contact: "{survivor.contactMessage}"
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/profile/${survivor.userId}`} style={{ textDecoration: "none" }}>
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
                                onClick={() => handleConfirm(props.userId)}
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