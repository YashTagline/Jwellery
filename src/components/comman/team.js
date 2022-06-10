import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomTitle from "./CustomTitle";
import frontBackBg from "../../assets/images/front-services__bg.jpeg";
import team1 from "../../assets/images/team_1.jpeg";
import team2 from "../../assets/images/team_2.jpeg";
import team3 from "../../assets/images/team_3.jpeg";
import team4 from "../../assets/images/team_4.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles((theme) => ({
  teamSection: {
    marginTop: "-100px",
    padding: "100px 0",
    background: `url(${frontBackBg}) left no-repeat`,
    backgroundSize: "cover",
  },
  teamTitle: {
    "& h3 label": {
      display: "inline-block",
      marginRight: 15,
    },
  },
  teamBoxWrap: {
    paddingRight: "25px",
    marginTop:20
  },
  teamContentDetail: {
    marginTop: 30,
    "& h5": {
      fontSize: 18,
      color: theme.typography.primary.main,
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 700,
    },
    "& h6": {
      fontSize: 16,
      color: "#777",
      margin: "5px 0 15px 0",
    },
  },
  socialIconList: {
    display: "flex",
    "& a": {
      width: "auto",
      margin: "0 20px 0 0",
      fontSize: 17,
      "&:nth-child(1) svg": {
        fill: "#1C388C",
      },
      "&:nth-child(2) svg": {
        fill: "#1C90F3",
      },
      "&:nth-child(3) svg": {
        fill: "#E11717",
      },
      "&:hover svg": {
        fill: theme.palette.primary.main,
      },
    },
  },
}));

const team = [
  {
    teamMemberImage: team1,
    teamMemberName: "Chris Patt",
    teamMemberPosition: "Director of Animal Health",
    facebookLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    youtubeLink: "https://www.youtube.com",
  },
  {
    teamMemberImage: team2,
    teamMemberName: "Anastasia Lee",
    teamMemberPosition: "President & CEO",
    facebookLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    youtubeLink: "https://www.youtube.com",
  },
  {
    teamMemberImage: team3,
    teamMemberName: "Martin Harix",
    teamMemberPosition: "Director of Terrarium",
    facebookLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    youtubeLink: "https://www.youtube.com",
  },
  {
    teamMemberImage: team4,
    teamMemberName: "John Doe",
    teamMemberPosition: "Director of Wildlife Care",
    facebookLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    youtubeLink: "https://www.youtube.com",
  },
];

const Team = () => {
  const classes = useStyles();
  return (
    <div className={classes.teamSection}>
      <Container maxWidth="xl">
        <Grid item xs={12} md={6}>
          <div className={classes.aboutTeamText}>
            <CustomTitle
              subTitle="ZOO STAFF"
              title="TEAM IN OUR"
              titleLight="ZOO"
              className={classes.teamTitle}
            ></CustomTitle>
          </div>
        </Grid>
        <Grid container>
          {team.map((item, i) => {
            return (
              <Grid item lg={3} md={4} sm={2} xs={12} key={i}>
                <div className={classes.teamBoxWrap}>
                  <img src={item.teamMemberImage} alt={item.teamMemberName} />
                  <div className={classes.teamContentDetail}>
                    <Typography variant="h5">{item.teamMemberName}</Typography>
                    <Typography variant="h6">
                      {item.teamMemberPosition}
                    </Typography>
                    <div className={classes.socialIconList}>
                      <a href={item.facebookLink} rel="noreferrer"  target="_blank">
                        <FacebookIcon />
                      </a>
                      <a href={item.twitterLink} rel="noreferrer"  target="_blank">
                        <TwitterIcon />
                      </a>
                      <a href={item.youtubeLink} rel="noreferrer"  target="_blank">
                        <YouTubeIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Team;
