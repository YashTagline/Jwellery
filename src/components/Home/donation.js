import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomTitle from "../comman/CustomTitle";
import donationBg from "../../assets/images/promo_donation.jpeg";
import CustomButton from "../comman/CustomButton";

const useStyles = makeStyles((theme) => ({
  donationSection: {
    padding: "150px 0",
    background: `url('${donationBg}') center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
      padding: "80px 0",
    },
  },
  donationTitle: {
    "& h6": {
      color: theme.palette.background.paper,
    },
    "& h3": {
      color: theme.palette.background.paper,
    },
  },
  titleDesc: {
    fontSize: 16,
    color: theme.palette.background.paper,
    lineHeight: 1.9,
    fontWeight: 600,
    marginBottom: 40,
  },
}));

const Donation = () => {
  const classes = useStyles();

  return (
    <Box className={classes.donationSection}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={5}>
            <CustomTitle
              subTitle=" DONATIONS"
              title="# DONATIONS FOR"
              titleLight="THE ZOO BERLIN"
              className={classes.donationTitle}
            ></CustomTitle>
            <Typography variant="body1" className={classes.titleDesc}>
              Zoo Berlin relies on your support as a non-profit organisation.
              You donations help to fund not only the food supply and the upkeep
              of our animals, but also the maintenance and structural adaptation
              of the enclosures in accordance with the latest insights into
              modern animal management. We have a lot on our agenda at Zoo
              Berlin for the future-exactly what can be seen in our target and
              development plan.
            </Typography>
            <CustomButton variant="outlined" color="primary">
              Donate
            </CustomButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Donation;
