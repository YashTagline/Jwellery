import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CustomTitle from "../comman/CustomTitle";
import partnerOne from "../../assets/images/logo_1.png";
import partnerTwo from "../../assets/images/logo_2.png";
import partnerThree from "../../assets/images/logo_3.png";
import partnerFour from "../../assets/images/logo_4.png";
import partnerFive from "../../assets/images/logo_5.png";

const useStyles = makeStyles((theme) => ({
  parterSection: {
    padding: "100px 0 100px",
  },
  partnerTitle: {
    textAlign: "center",
    "& h6": {
      display: "inline-block",
    },
    "& h3": {
      "& label": {
        marginRight: 10,
        display: "inline-block",
      },
    },
  },
  partnerLogoWrap: {
    textAlign: "center",
    marginBottom: 40,
  },
}));

const partnerList = [
  {
    partnerLogo: partnerOne,
    partnerName: "OutDoor Adventure",
  },
  {
    partnerLogo: partnerTwo,
    partnerName: "Vintage Studio",
  },
  {
    partnerLogo: partnerThree,
    partnerName: "Hello Sunshine",
  },
  {
    partnerLogo: partnerFour,
    partnerName: "Classic",
  },
  {
    partnerLogo: partnerFive,
    partnerName: "Brandit",
  },
];

const Partners = () => {
  const classes = useStyles();

  return (
    <div className={classes.parterSection}>
      <Container maxWidth="xl">
        <Box mb={5}>
          <CustomTitle
            subTitle="Our Partners"
            title="People Who"
            titleLight="Trust Us?"
            className={classes.partnerTitle}
          ></CustomTitle>
        </Box>
        <Grid container alignItems="center" justifyContent="space-between">
          {partnerList.map((item, i) => {
            return (
              <Grid item lg={2} md={3} xs={12} key={i}>
                <div className={classes.partnerLogoWrap}>
                  <img src={item.partnerLogo} alt={item.partnerName} draggable="false" />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Partners;
