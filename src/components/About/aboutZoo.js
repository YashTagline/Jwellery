import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import tigerImage from "../../assets/images/tiger-img-box.jpeg";
import contentBgImage from "../../assets/images/content_bg.png";
import aboutBgTiger from "../../assets/images/about_bg.png";
import CustomTitle from "../comman/CustomTitle";
const useStyles = makeStyles((theme) => ({
  aboutZooSection: {
    padding: "150px 0",
    position: "relative",
  },
  aboutZooBg: {
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  zooContentInner: {
    background: `url(${aboutBgTiger}) no-repeat right`,
  },
  aboutZooText: {
    "& h6": {
      fontSize: 16,
      marginBottom: 30,
      color: theme.typography.secondary.main,
    },
    "& p": {
      fontSize: 16,
      marginBottom: 30,
      fontWeight: 600,
      color: theme.typography.secondary.main,
    },
  },
}));

const AboutZoo = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutZooSection}>
      <img src={contentBgImage} alt="" className={classes.aboutZooBg} />
      <div className={classes.zooContentInner}>
        <Container maxWidth="xl">
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={5}>
              <div className={classes.tigerImageWrap}>
                <img src={tigerImage} alt="" draggable="false" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.aboutZooText}>
                <CustomTitle subTitle="ABOUT ZOO" title="WORDS ABOUT" titleLight="ANIMAL WORLD ZOO" className={classes.eventsTitle}></CustomTitle>
                <Typography variant="h6">
                  <strong>
                    Silver carp pygmy sunfish blue triggerfish longneck eel dory bullhead shark; spotted dogfish perch silver dollar fangtooth dab
                    Rainbow trout.
                  </strong>
                </Typography>
                <Typography variant="body1">
                  Cornish Spaktailed Bream shark goldeye Black scalyfin murray cod Shingle Fish; oceanic whitetip shark clown loach! Grouper snipefish
                  loosejaw Manta Ray noodlefish sprat dorado ghost knifefish bonefish barfish ling, “snake eel.” Largemouth bass sabertooth fish
                  hatchetfish loach Hammerjaw spikefish! Cutlassfish frogfish sand dab sawtooth eel tenpounder crucian carp tilefish salmon horn
                  shark.
                </Typography>
                <Typography variant="body1">
                  Trevally conger eel, Pacific cod spiderfish bleak, greenling sea bass pupfish yellowbanded perch threespine stickleback bigscale
                  fish silverside trout rough pomfret temperate bass. Dwarf loach slimehead pigfish pollock dartfish zebra noodlefish sprat dorado
                  ghost knifefish bonefish barfish ling, “snake eel.”
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AboutZoo;
