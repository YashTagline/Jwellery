import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  commanBannerSection: {
    height: "600px",
    width: "100%",
    backgroundSize: "cover !important",
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
  bannerCommanTitle: {
    "& h5": {
      color: theme.palette.background.paper,
      fontFamily: '"Quicksand", sans-serif',
      fontSize: 16,
      marginBottom: 10,
      fontWeight: 700,
    },
    "& h2": {
      fontSize: 50,
      paddingBottom: 10,
      marginBottom: 10,
      fontWeight: 300,
      color: theme.palette.background.paper,
      fontFamily: '"Quicksand", sans-serif',
      position: "relative",
      textTransform: "uppercase",
      "&::before": {
        position: "absolute",
        content: "''",
        left: 0,
        bottom: 0,
        width: 75,
        height: 2,
        background: theme.palette.primary.main,
      },
      "& p": {
        fontSize: "inherit",
        lineHeight: 1.3,
        fontWeight: 900,
        display: "inline-block",
        fontFamily: "inherit",
        marginLeft: 10,
      },
    },
  },
}));

const CommanBanner = ({
  mainTitle,
  mainSubTitle,
  smallTtile,
  className,
  bgImage,
}) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.commanBannerSection} ${classes.className}`}
      style={{ background: `url(${bgImage}) no-repeat center` }}
    >
      <div className={classes.tableWrap}>
        <div className={classes.cellWrap}>
          <Container maxWidth="xl">
            <div className={classes.bannerCommanTitle}>
              <Typography variant="h5">{smallTtile}</Typography>
              <Typography variant="h2">
                {mainTitle}
                <Typography variant="body1">{mainSubTitle}</Typography>
              </Typography>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CommanBanner;
