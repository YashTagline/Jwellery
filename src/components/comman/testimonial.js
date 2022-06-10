import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.min.css";
import 'swiper/components/pagination/pagination.min.css'
import CustomTitle from "./CustomTitle";
SwiperCore.use([Pagination, EffectFade]);

const useStyles = makeStyles((theme) => ({
  tesimonialSection: {
    margin: "100px 0",
    padding: "70px 0",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      position: "absolute",
      content: "''",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      backgroundColor: theme.palette.primary.backgroundColor,
      width: "calc(100% - 260px)",
      height: "100%",
      zIndex: "-1",
    },
    "&::before": {
      position: "absolute",
      content: "''",
      left: 0,
      top: 0,
      backgroundColor: theme.palette.primary.main,
      width: "100px",
      height: "100%",
      zIndex: "-1",
    },
  },
  backgroundBox: {
    width: 60,
    height: 75,
    fontSize: 85,
    lineHeight: 126,
    fontWeight: 300,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    "& h4": {
      fontSize: 85,
      lineHeight: 0,
      color: theme.typography.primary.main,
    },
  },
  testimonialContent: {
    backgroundColor: theme.palette.primary.backgroundColor,
    "& p": {
      fontSize: 20,
      lineHeight: 1.5,
      fontStyle: "italic",
      color: theme.typography.secondary.main,
      marginBottom: 25,
      fontWeight: 600,
    },
    "& h6": {
      display: "flex",
      alignItems: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: theme.typography.primary.main,
      "& span": {
        width: 30,
        height: 1,
        marginRight: 10,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  testimonialRightWrap: {
    paddingLeft: 30,
    "& .swiper-pagination-h": {
      "& .swiper-pagination-bullet": {
        marginLeft: "20px !important",
        width: 18,
        height: 18,
        background: "#c5c5c5 !important",
        border: "5px solid",
        borderColor: theme.palette.primary.backgroundColor,
        boxShadow: "0 0 0 2px transparent",
        opacity: 1,
      },
      "& .swiper-pagination-bullet-active": {
        background: `${theme.palette.primary.main} !important`,
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
      },
    },
  },
}));

const testimonialContent = [
  {
    content:
      "Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish",
    clientName: "John Maclein",
  },
  {
    content:
      "Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish",
    content1:
      "Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish",
    clientName: "John Maclein",
  },
  {
    content:
      "Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish",
    content1:
      "Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish",
    content2:
      "Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury swordfish southern sandfish",
    clientName: "John Maclein",
  },
];

const Testimonial = () => {
  const classes = useStyles();

  return (
    <Box className={classes.tesimonialSection}>
      <Container maxWidth="xl">
        <Grid container className={classes.rightBoxWrap} >
          <Grid item lg={1}>
            <Box className={classes.backgroundBox}>
              <Typography variant="h4">“</Typography>
            </Box>
          </Grid>
          <Grid item lg={11} className={classes.testimonialRightWrap}>
            <Grid container  alignItems="center" justifyContent="space-between">
              <Grid item>
                <CustomTitle
                  subTitle="TESTIMONIALS"
                  title="WHAT PEOPLE"
                  titleLight="SAY ABOUT US"
                ></CustomTitle>
              </Grid>
              <Grid item>
                <div className="swiper-pagination-h"></div>
              </Grid>
            </Grid>
            <Box>
              <Swiper
                spaceBetween={0}
                autoHeight={true}
                effect={"fade"}
                loop
                speed={800}
                pagination={{
                  el: '.swiper-pagination-h',
                  clickable: true,
                }}
                className={classes.mySwiper}
              >
                {testimonialContent.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Box className={classes.testimonialContent}>
                        <Typography variant="body1">{item.content}</Typography>
                        <Typography variant="body1">{item.content1}</Typography>
                        <Typography variant="body1">{item.content2}</Typography>
                        <Typography variant="h6">
                          <Typography variant="overline"></Typography>
                          {item.clientName}
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
                
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
