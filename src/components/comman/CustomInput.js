import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  customInput: {
    width: "100%", 
    "& input": {
      height: 60,
      fontSize: 16,
      padding: "0 16px",
      color: theme.typography.primary.main,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #e1e1e1",
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 600,
      "&:focus": {
        outline: "none",
        borderColor: theme.typography.primary.main,
      },
    },
    "& fieldset":{
      border:"none !important"
    }
  },
}));

const CustomInput = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <TextField className={`${classes.customInput} ${className}`} {...rest} />
  );
};

export default CustomInput;
