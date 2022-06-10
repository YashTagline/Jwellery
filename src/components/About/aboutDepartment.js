import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import actionBoxImage1 from "../../assets/images/action-block_1.jpeg";
import actionBoxImage2 from "../../assets/images/action-block_2.jpeg";
import actionBoxImage3 from "../../assets/images/action-block_3.jpeg";

const useStyles = makeStyles((theme) => ({
  aboutDepartmentSection: {
    padding: "100px 0",
  },
  tableWrap: {
    display: "table",
    height: "100%",
    width: "100%",
    verticalAlign: "middle",
  },
  cellWrap: {
    display: "table-cell",
    height: "100%",
    width: "100%",
    verticalAlign: "middle",
  },
  departmentWrap: {
    height: 263,
    position: "relative",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform:"scale(1)",
      transition:"all 0.5s ease 0.1s"
    },
    "&:hover img":{
        transform:"scale(1.1)",
    }
  },
  overlayBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: "10%",
    color:theme.palette.background.paper,
    "& h4": {
      fontFamily: '"Quicksand", sans-serif',
    },
    "& h2": {
      fontFamily: '"Quicksand", sans-serif',
      fontWeight:600
    },
  },
}));

const aboutDepartment = [
  {
    actionBoxImage: actionBoxImage3,
    boxTitle: "The Biggest Zoo",
    boxSubTitle: "In America",
  },
  {
    actionBoxImage: actionBoxImage1,
    boxTitle: "The Biggest Aquarium",
    boxSubTitle: "In America",
  },
  {
    actionBoxImage: actionBoxImage2,
    boxTitle: "Amazing Terraium",
    boxSubTitle: "In Europe",
  },
];

const AboutDepartment = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutDepartmentSection}>
      <Grid container>
        {aboutDepartment.map((item, i) => {
          return (
            <Grid item lg={4} key={i} className={classes.departmentWrap}>
              <img src={item.actionBoxImage} alt="" draggable="false" />
              <Box className={classes.overlayBox}>
                <div className={classes.tableWrap}>
                  <div className={classes.cellWrap}>
                    <Typography variant="h4">{item.boxTitle}</Typography>
                    <Typography variant="h2">{item.boxSubTitle}</Typography>
                  </div>
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AboutDepartment;
