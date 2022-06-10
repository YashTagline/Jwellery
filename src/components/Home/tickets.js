import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomTitle from "../comman/CustomTitle";
import priceBg from "../../assets/images/price-bg.png";
import priceAsideBg from "../../assets/images/price-aside-bg.png";
import CustomButton from "../comman/CustomButton";
import { ReactComponent as IconOne } from "../../assets/images/icon1.svg";
import { ReactComponent as IconTwo } from "../../assets/images/icon2.svg";
import { ReactComponent as IconThree } from "../../assets/images/icon3.svg";

const useStyles = makeStyles((theme) => ({
  ticketSection: {
    padding: "130px 0",
    backgroundColor: theme.palette.primary.backgroundColor,
    background: ` url('${priceBg}') center no-repeat`,
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: "70px 0",
    },
    "&::after": {
      position: "absolute",
      content: "''",
      background: `url('${priceAsideBg}') left no-repeat`,
      left: 0,
      top: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
    },
  },
  ticketsTitle: {
    "& h3 label": {
      display: "inline-block",
      marginRight: 10,
    },
  },
  priceItemBox: {
    background: theme.palette.background.paper,
    position: "relative",
    zIndex: "1",
    textAlign: "center",
    margin: 10,
  },
  priceItemTop: {
    padding: "30px 0 15px",
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.primary.backgroundColor,
    borderBottomStyle: "dashed",
    "&::after": {
      position: "absolute",
      content: "''",
      left: "-15px",
      bottom: "-15px",
      width: "30px",
      height: "30px",
      backgroundColor: theme.palette.primary.backgroundColor,
      transform: "rotate(-45deg)",
    },
    "&::before": {
      position: "absolute",
      content: "''",
      right: "-15px",
      bottom: "-15px",
      width: "30px",
      height: "30px",
      backgroundColor: theme.palette.primary.backgroundColor,
      transform: "rotate(-45deg)",
    },
    "& h5": {
      color: theme.typography.secondary.main,
      fontWeight: 700,
      fontSize: 16,
    },
    "& h6": {
      fontSize: 30,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.primary.main,
      fontFamily: '"Quicksand", sans-serif',
      "& p": {
        display: "inline-block",
        fontSize: 16,
        fontWeight: 400,
        marginRight: 5,
        color: theme.typography.secondary.main,
      },
    },
  },
  priceItemImage: {
    width: 140,
    height: 140,
    // padding: 35,
    overflow: "hidden",
    borderRadius: "100%",
    margin: "0 auto",
    marginBottom: 25,
    backgroundColor: theme.palette.primary.backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      width: 80,
      height: 80,
      fill: "#565b6e",
    },
  },
  priceItemBottom: {
    padding: "25px 0",
  },
}));

const priceList = [
  {
    icon: <IconOne />,
    priceAge: "Adult (12+yrs)",
    price: "25.00",
    priceTag: "$",
    priceBtnText: "Buy Tickets",
  },
  {
    icon: <IconTwo />,
    priceAge: "Child (4-12 yrs)",
    price: "15.00",
    priceTag: "$",
    priceBtnText: "Buy Tickets",
  },
  {
    icon: <IconThree />,
    priceAge: "Baby (0-3 yrs)",
    price: "Free",
    priceBtnText: "Buy Tickets",
  },
];

const Tickets = () => {
  const classes = useStyles();

  return (
    <Box className={classes.ticketSection}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={3} className={classes.mlAuto}></Grid>
          <Grid item md={9} className={classes.mlAuto}>
            <CustomTitle
              subTitle="PRICE"
              title="# BUY"
              titleLight="ONLINE TICKETS"
              className={classes.ticketsTitle}
            ></CustomTitle>
            <Grid container>
              {priceList.map((item, index) => {
                return (
                  <Grid item lg={4} md={6} xs={12} key={index}>
                    <Box className={classes.priceItemBox}>
                      <Box className={classes.priceItemTop}>
                        <Box className={classes.priceItemImage}>
                          {item.icon}
                        </Box>
                        <Box className={classes.priceItemInfo}>
                          <Typography variant="h5">{item.priceAge}</Typography>
                          <Typography variant="subtitle1">
                            <Typography variant="body1">
                              {item.priceTag}
                            </Typography>
                            {item.price}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.priceItemBottom}>
                        <CustomButton variant="outlined" color="secondary">
                          {item.priceBtnText}
                        </CustomButton>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Tickets;
