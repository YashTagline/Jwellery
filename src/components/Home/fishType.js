import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomTitle from "../comman/CustomTitle";
import boxImage1 from "../../assets/images/text-box_1.jpeg";
import boxImage2 from "../../assets/images/text-box_2.jpeg";
import boxImage3 from "../../assets/images/text-box_3.jpeg";
import boxImage4 from "../../assets/images/text-box_4.jpeg";
import CommanCounter from "../comman/CommanCounter";

const useStyles = makeStyles((theme) => ({
  fishTypeSection: {
    position: "relative",
    paddingTop: 80,
    [theme.breakpoints.down("md")]: {
      paddingTop: 20,
    },
  },
  fishHeadingTitle: {
    "& h3": {
      marginBottom: 0,
      "& label": {
        display: "inline-block",
      },
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: 30,
    },
  },

  detailBox: {
    position: "relative",
    overflow: "hidden",
    padding: 5,
    "&:hover": {
      "& div::after": {
        opacity: "0.4",
      },
      "& .MuiBox-root": {
        transform: "translateY(-100%)",
      },
    },
  },
  detailBoxImage: {
    position: "relative",
    "& img": {
      width: "100%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      backgroundColor: theme.palette.primary.main,
      opacity: "0.2",
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transition: "all 0.5s ease 0s",
    },
  },
  detailBoxText: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    padding: "0 30px 20px",
    transform: "translateY(20%)",
    transition: "all 0.5s ease 0s",
    "& h6": {
      fontSize: 20,
      fontWeight: 300,
      color: theme.palette.background.paper,
    },
    "& h5": {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: 18,
      fontWeight: 700,
      color: theme.palette.background.paper,
      marginBottom: 15,
    },
    "& p": {
      color: theme.palette.background.paper,
      fontSize: 16,
      position: "absolute",
    },
  },
}));


const detailList = [
  {
    detailImage: boxImage1,
    detailNum: "01",
    detailName: "Colorful Fishes",
    detailContent:
      "Fangtooth yellowtail banded killifish seamoth triplefin blenny",
  },
  {
    detailImage: boxImage2,
    detailNum: "02",
    detailName: "Colorful Fishes",
    detailContent:
      "Fangtooth yellowtail banded killifish seamoth triplefin blenny fangtooth yellowtail banded killifish seamoth triplefin blenny",
  },
  {
    detailImage: boxImage3,
    detailNum: "03",
    detailName: "Colorful Fishes",
    detailContent:
      "Fangtooth yellowtail banded killifish seamoth triplefin blenny",
  },
  {
    detailImage: boxImage4,
    detailNum: "04",
    detailName: "Colorful Fishes",
    detailContent:
      "Fangtooth yellowtail banded killifish seamoth triplefin blenny fangtooth yellowtail banded killifish seamoth triplefin blenny",
  },
];

const FishType = () => {
  const classes = useStyles();

  return (
    <div className={classes.fishTypeSection}>
      <Container maxWidth="xl">
        <Box mb={5}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item md={4}>
              <CustomTitle
                title="FISHES"
                className={classes.fishHeadingTitle}
                titleLight="TYPE"
                subTitle="FISHES"
              ></CustomTitle>
            </Grid>
            <Grid item md={6}>
              <CommanCounter></CommanCounter>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container className={classes.detailBoxWrapper}>
            {detailList.map((item, index) => {
              return (
                <Grid
                  item
                  md={3}
                  xs={12}
                  className={classes.detailBox}
                  key={index}
                >
                  <div className={classes.detailBoxImage}>
                    <img src={item.detailImage} alt="" draggable="false" />
                  </div>
                  <Box className={classes.detailBoxText}>
                    <Typography variant="h6">{item.detailNum}</Typography>
                    <Typography variant="h5">{item.detailName}</Typography>
                    <Typography variant="body1">
                      {item.detailContent}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default FishType;
