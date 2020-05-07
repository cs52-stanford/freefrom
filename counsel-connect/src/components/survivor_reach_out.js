import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { amber } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minWidth: 100,
      marginTop: 80,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
        fontSize: 40,
      },
    pos: {
      marginBottom: 12,
    },
    profilepic: {
        width:"30%",
        height: "10%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    container: {
        width: "50%",
    },
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 80,
        backgroundColor: "#e1f5fe",
    },
    DraftEmail: {
        marginTop: 20,
        marginRight: 100,
    },
    cardcontent: {
        alignItems: "center",
    },
    BottomRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
  });
  

const SurvivorReachOut = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <React.Fragment>
          <CssBaseline />
          <Container fixed className={classes.container}>
            <Card className={classes.root}>
                <CardContent className={classes.cardcontent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom align="center" variant="h3">
                        {props.lawyerName}
                    </Typography>
                    <Avatar img className={classes.profilepic} src={props.lawyerImage}></Avatar>
                    <div className="BottomRow">
                        <ColorButton variant="contained" className={classes.DraftEmail}>
                            <Typography>
                                Draft Email
                            </Typography>
                        </ColorButton>
                    </div>
                </CardContent>
            </Card>
          </Container>
        </React.Fragment>
      );
}


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(amber[900]),
      backgroundColor: amber[900],
      '&:hover': {
        backgroundColor: amber[900],
      },
    },
  }))(Button);

export default SurvivorReachOut;


