import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomTitle from "../comman/CustomTitle";
import wildWolrdImage from "../../assets/images/wild-world.jpeg";
const useStyles = makeStyles((theme) => ({
  aboutZooText: {
    "& p": {
      fontSize: 16,
      marginBottom: 30,
      fontWeight: 600,
      color: theme.typography.secondary.main,
    },
  },
}));

const AboutMission = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <div className={classes.aboutZooText}>
              <CustomTitle
                subTitle="MISSION"
                title="AWESOME ANIMALS IN"
                titleLight="OUR ZOO"
                className={classes.eventsTitle}
              ></CustomTitle>
              <Typography variant="body1">
                Silver carp pygmy sunfish blue triggerfish longneck eel dory
                bullhead shark; spotted dogfish perch silver dollar fangtooth
                dab Rainbow trout. Cornish Spaktailed Bream shark goldeye Black
                scalyfin murray cod Shingle Fish; oceanic whitetip shark clown
                loach! Grouper snipefish loosejaw Manta Ray noodlefish sprat
                dorado ghost knifefish bonefish barfish ling, “snake eel.
              </Typography>
              <Typography variant="body1">
                Largemouth bass sabertooth fish hatchetfish loach Hammerjaw
                spikefish! Cutlassfish frogfish sand dab sawtooth eel tenpounder
                crucian carp tilefish
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.tigerImageWrap}>
              <img src={wildWolrdImage} alt="" draggable="false" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutMission;
