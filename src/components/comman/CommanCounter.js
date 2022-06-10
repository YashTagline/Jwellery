import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  counterWrap: {
    marginBottom: 10,
    "& h4": {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: 18,
      color: theme.typography.primary.main,
      fontWeight: 700,
    },
    "& span": {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: 46,
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
  },
}));

const CommanCounter = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item md={4}>
        <div className={classes.counterWrap}>
          <Typography variant="h4">Fishes Types</Typography>
          <CountUp end={850} duration={2.75} />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.counterWrap}>
          <Typography variant="h4">Species</Typography>
          <CountUp end={230} duration={2.75} />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.counterWrap}>
          <Typography variant="h4">Visitors per Year</Typography>
          <CountUp end={1600000.0} duration={2.75} />
        </div>
      </Grid>
    </Grid>
  );
};

export default CommanCounter;
