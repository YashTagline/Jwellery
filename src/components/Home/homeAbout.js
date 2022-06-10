import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import aboutBg from "../../assets/images/about-aquarium-bg.png";
import aboutAquarium from "../../assets/images/about-aquarium.png";
import CustomButton from "../comman/CustomButton";
import CustomTitle from "../comman/CustomTitle";
const useStyles = makeStyles((theme) => ({
  aboutSection: {
    padding: "100px 0 150px",
    backgroundColor: "#F4F6F7",
    background: `url('${aboutBg}') center no-repeat`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  aboutAquariumImage: {
    marginBottom: "-390px",
  },
  commanDescTitle: {
    fontWeight: "bolder",
    fontSize: 16,
    color: theme.typography.secondary.main,
    marginBottom: 30,
    lineHeight: "30px",
  },
  commanDesc: {
    fontSize: 16,
    color: theme.typography.secondary.main,
    lineHeight: "30px",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.aboutSection}>
        <Container maxWidth="xl">
          <Box mb={5}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item md={4}>
                <CustomTitle
                  title="AWESOME"
                  titleLight="AQUARIUM"
                  subTitle="ABOUT AQUARIUM"
                ></CustomTitle>
                <CustomButton variant="outlined" color="secondary">
                  More About
                </CustomButton>
              </Grid>
              <Grid item md={7}>
                <Typography
                  className={classes.commanDescTitle}
                  variant="subtitle2"
                >
                  Ghost pipefish yellow bass New Zealand sand diver eulachon
                  brook lamprey driftfish, Atlantic trout. Mudfish: blue eye,
                  arrowtooth eel french angelfish yellowfin pike unicorn fish.
                </Typography>
                <Typography className={classes.commanDesc} variant="subtitle2">
                  Rudderfish long-finned pikerazorfish menhaden paradise fish,
                  barramundi oceanic flyingfish. Fangtooth yellowtail banded
                  killifish seamoth triplefin blenny desert pupfish crocodile
                  shark catfish cutlassfish broadband dogfish whalefish. Ghost
                  pipefish yellow bass New Zealand sand diver eulachon brook
                  lamprey driftfish, Atlantic trout. Mudfish: blue eye,
                  arrowtooth eel french angelfish yellowfin pike unicorn fish.
                  Rudderfish long-finned pikerazorfish menhaden paradise fish,
                  barramundi oceanic flyingfish.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.aboutAquariumImage} pt={5}>
            <img src={aboutAquarium} alt="" draggable="false" />
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default About;
