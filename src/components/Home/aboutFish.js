import {
  Box,
  Container,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomTitle from "../comman/CustomTitle";
import fish1 from "../../assets/images/fish-1.png";
import fish2 from "../../assets/images/fish-2.png";
import fish3 from "../../assets/images/fish-3.png";
import fish4 from "../../assets/images/fish-4.png";
import fish5 from "../../assets/images/fish-5.png";
import fish6 from "../../assets/images/fish-6.png";
import fish7 from "../../assets/images/fish-7.png";
import fish8 from "../../assets/images/fish-8.png";
import fish9 from "../../assets/images/fish-9.png";
import fish10 from "../../assets/images/fish-10.png";
import fish11 from "../../assets/images/fish-11.png";
import fish12 from "../../assets/images/fish-12.png";

const fishList = [
  { image: fish1, fishName: "Tunas" },
  { image: fish2, fishName: "Sharks" },
  { image: fish3, fishName: "Dolphins" },
  { image: fish4, fishName: "Whales" },
  { image: fish5, fishName: "Tunas" },
  { image: fish6, fishName: "Flounders" },
  { image: fish7, fishName: "Deep-water angler" },
  { image: fish8, fishName: "Starfishes" },
  { image: fish9, fishName: "Sea Urchins" },
  { image: fish10, fishName: "Crabs" },
  { image: fish11, fishName: "Octopuses" },
  { image: fish12, fishName: "Perches" },
];
const useStyles = makeStyles((theme) => ({
  aboutFishSection: {
    paddingTop: 400,
    [theme.breakpoints.down("md")]: {
      paddingTop: 300,
    },
  },
  commanDesc: {
    fontSize: 16,
    color: theme.typography.secondary.main,
    lineHeight: "30px",
  },
  fishDesc: {
    textAlign: "center",
    marginBottom: 30,
    "& img": {},
    "& h6": {
      fontSize: 18,
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 700,
      margin: "20px 0 0",
      color: theme.typography.primary.main,
    },
  },
}));
const AboutFish = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box className={classes.aboutFishSection} mb={5}>
        <Box mb={3} pb={5}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item md={4}>
              <CustomTitle
                title="AWESOME FISHES"
                titleLight="IN OUR AQUARIUMS"
                subTitle="OUR FISHES"
              ></CustomTitle>
            </Grid>
            <Grid item md={7}>
              <Typography className={classes.commanDesc} variant="subtitle2">
                Zebra oto pikeperch yellow jack nibbler ronquil duckbill round
                stingray greenling eulachon: rough scad ray, driftfish bobtail
                snipe eel anchovy stingray grunt sculpin. Soldierfish flounder
                bleak gouramie algae eater flying gurnard. Rudderfish
                long-finned pikerazorfish menhaden paradise fish, barramundi
                oceanic flyingfish. Fangtooth yellowtail banded killifish
                seamoth triplefin blenny desert pupfish crocodile shark catfish
                cutlassfish broadband dogfish whalefish.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container alignItems="center" justifyContent="space-between">
            {fishList.map((item, i) => {
              return (
                <Grid item xs={6} md={2} key={i}>
                  <Tooltip title={item.fishName}>
                    <div className={classes.fishDesc}>
                      <img src={item.image} alt={item.fishName} draggable="false" />
                      <Typography variant="subtitle1">
                        {item.fishName}
                      </Typography>
                    </div>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default AboutFish;
