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

export default function MediaCard(props) {
  const classes = useStyles();

  const bios = ["Protima has been an advocate for gender justice and is the newly appointed Director for the Office of Women’s Policy at Santa Clara County. Working for the County Executive, her office works to bring a gender lens to policy decision-making, building a pipeline to leadership, and demand equity in governance. Prior to that, she was the Managing Attorney and Regional Counsel for Immigration at Bay Area Legal Aid, where she started as a staff attorney litigating on family law and immigration cases for survivors of domestic violence, as well as allied legal relief in areas of public benefits, housing preservation, and economic justice. Most recently she co-counseled on a precedent setting case in California, Kumar v. Kumar, a complex immigration and family law cross-over case. She also led the firm-wide post-graduate Fellowship program to shepherd and develop fellowship proposals through the national selection process. She is also one of 17 lawyers nation-wide appointed as a Commissioner to the American Bar Association Commission on Domestic and Sexual Violence to work on issues impacting delivery of legal services to survivors, where she is also a litigation skills faculty. She also serves as faculty for Practicing Law Institute in San Francisco, training on issues relating to housing rights for immigrants and representation of domestic violence survivors in family courts as well as on understanding personal bias, working with diverse populations, and on domestic violence awareness. Being passionate about giving back to the legal profession, Protima has served as the Chair of San Mateo County Bar Association's Diversity Committee (2014), has been integral to the work of BayLegal's diversity initiative, and the Racial Justice Initiative. Prior to joining BayLegal, Protima was the Public Policy specialist for California Partnership to End Domestic Violence in Sacramento, California where she worked on legislation and advocacy on behalf of agencies serving survivors and their families.",
    "Amy earned her J.D. from Georgetown University Law Center, where she began advocating for the rights of survivors of domestic violence as a student attorney in the Domestic Violence Clinic. After graduating from law school, Amy continued her advocacy as a lobbyist for the Georgia Coalition Against Domestic Violence and Georgia Women for a Change.After clerking for Fulton County Superior Court Chief Judge Gail S.Tusan in Atlanta, Amy joined the prestigious boutique law firm of Fellows LaBriola LLP where she litigated complex business, commercial, shareholder and insurance disputes.In addition to her litigation practice, Amy continued her advocacy as a Georgia Women’s Policy Institute Fellow, the Policy Chair for the Junior Leagues of Georgia and the founder of the Southern Center for Human Rights’ Ambassador Program.Amy joined FreeFrom as the Director of Law and Policy in 2019 after relocating from Atlanta to Los Angeles.",
    "Drew Harbur began his career at one of the nation’s preeminent law firms-Gibson, Dunn & Crutcher LLP. At Gibson Dunn, he represented clients in both civil and criminal matters. For example, Drew represented a major bank in multiple global regulatory and antitrust investigations, requiring him to help manage teams in the U.S., Zurich, London, Singapore, and Hong Kong. At the same time, he also represented local Orange County clients in financial, property, contract, and trade secret litigation. As Drew’s career progressed, he discovered that few business litigation attorneys have meaningful trial experience, which limits their ability to effectively strategize cases in the early stages of litigation. As a result, and in order to develop this critical skill set, he joined the Los Angeles County District Attorney’s Office, one of the largest prosecutorial agencies in the world. As a Deputy District Attorney, Drew prosecuted numerous fast-paced and high-stakes cases, including business fraud, gang, and murder cases. In 2018, Drew left the District Attorney’s Office to join Callahan & Blaine, California’s premier litigation firm.",
    "A law professor and a sociologist, Michele Landis Dauber has written highly original historical and sociological studies focusing on the history of social provision and the US welfare state. Her first book, The Sympathetic State (2013 University of Chicago Press) received numerous distinguished book awards and prizes including from the American Historical Association, the American Sociological Association, the American Political Science Association, the American Society for Legal History, and the Law and Society Association. Michele has received numerous grants for her research including from the National Endowment for the Humanities. She is currently working on a project about the history of resettlement and relocation following catastrophes. Michele is the recipient of the 2006 Walter J. Gores Award, Stanford University’s highest teaching honor. Prior to joining the Stanford faculty in 2001, Michele was a clerk to Judge Stephen Reinhardt of the U.S. Court of Appeals for the Ninth Circuit (1998-99) and a doctoral fellow at the American Bar Foundation (1999-2001). From 2011-13, she co-chaired the Board on Judicial Affairs and helped to lead the process that revised Stanford’s policy on sexual assault. She is a nationally-respected advocate for improving college and university policies on sexual assault in order to increase compliance with Title IX."];

  const counties = ["Santa Clara", "Los Angeles", "El Dorado", "San Francisco"];

  const CHARACTER_LIMIT = 300;
  const [message, setMessage] = React.useState({
    note: "",
    contact: "",
  });

  const handleChange = (note) => (event) => {
    setMessage({ ...message, [note]: event.target.value });
  };

  if (props.isConfirmScreen) {
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
                {props.lawyerName}. You may also add an optional message, if
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
                Please specify how {props.lawyerName} should contact you: ("I
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
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setIsConfirmScreen(false);
                }}
              >
                Go back
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setViewProfile(false);
                  props.setIsConfirmScreen(false);
                  props.setStatus(
                    props.unsentLawyers[props.lawyerIndex],
                    "profile sent! awaiting response"
                  );
                  props.setSentLawyers(
                    [props.unsentLawyers[props.lawyerIndex]].concat(
                      props.sentLawyers
                    )
                  );
                  props.setUnsentLawyers(
                    props.unsentLawyers
                      .slice(0, props.lawyerIndex)
                      .concat(props.unsentLawyers.slice(props.lawyerIndex + 1))
                  );
                }}
              >
                Confirm
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={themeA}>
        <Container className={classes.contain} maxWidth="lg">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {props.lawyerName}
              </Typography>
              <Avatar src={props.lawyerImage} className={classes.large} />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                variant="subtitle1"
                align="center"
                paragraph
              >
                Practice Counties: {counties[props.lawyerIndex]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Bio: {bios[props.lawyerIndex]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={function () {
                  props.setViewProfile(false);
                }}
              >
                Go back
              </Button>
              {props.alreadySent ?
                <div></div> :
                <Button
                  size="small"
                  color="primary"
                  onClick={function () {
                    props.setIsConfirmScreen(true);
                  }}
                >
                  Request Services
              </Button>
              }
            </CardActions>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}
