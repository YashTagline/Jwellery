import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  commanSmallTitle: {
    display: "flex",
    alignItems: "center",
    color: "#848484",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: 10,
    "& span": {
      width: 30,
      height: 1,
      marginRight: 7,
      backgroundColor: theme.palette.primary.main,
    },
  },
  commanHeadingTitle: {
    fontSize: 40,
    fontWeight: 400,
    color: theme.typography.primary.main,
    fontFamily: '"Quicksand", sans-serif',
    lineHeight: "1.5",
    marginBottom: 20,
    textTransform: "uppercase",
    "& label": {
      fontWeight: 700,
      display: "block",
    },
  },
}));

const CustomTitle = ({ subTitle, title, titleLight, className }) => {
  const classes = useStyles();

  return (
    <Box className={`${className}`}>
      <Typography className={classes.commanSmallTitle} variant="subtitle1">
        <span></span>
        {subTitle}
      </Typography>
      <Typography className={classes.commanHeadingTitle} variant="h3">
        <label>{title}</label>
        {titleLight}
      </Typography>
    </Box>
  );
};

export default CustomTitle;
