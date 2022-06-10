import {
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import CustomTitle from "../comman/CustomTitle";
import eventsImage1 from "../../assets/images/events_image_1.jpeg";
import eventsImage2 from "../../assets/images/events_image_2.jpeg";
import eventsImage3 from "../../assets/images/events_image_3.jpeg";
import eventsImage4 from "../../assets/images/events_image_4.jpeg";
import aboutBg from "../../assets/images/about-aquarium-bg.png";
SwiperCore.use([Pagination, EffectFade]);

const useStyles = makeStyles((theme) => ({
  eventsSection: {
    padding: "100px 0 150px",
    marginBottom: 100,
    backgroundColor: "#F4F6F7",
    background: `url('${aboutBg}') center no-repeat`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  aboutAquariumImage: {
    marginBottom: "-250px",
  },
  eventsTitle: {
    "& h3 label": {
      display: "inline-block",
      marginRight: 10,
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
        transform: "translateY(-10%)",
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
      transition: "all 0.2s ease 0s",
    },
  },
  eventDateDetail: {
    position: "absolute",
    top: 18,
    left: 20,
    color: theme.palette.background.paper,
    zIndex: 1,
    "& h3": {
      opacity: 0.8,
      fontSize: 35,
      lineHeight: 1,
      fontWeight: 700,
    },
    "& h6": {
      fontSize: 20,
      lineHeight: "24px",
      fontWeight: "bold",
    },
  },
  detailBoxText: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    padding: "0 30px 20px",
    transform: "translateY(40%)",
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
    "& a": {
      color: theme.palette.background.paper,
      fontSize: 16,
      fontWeight: 600,
      position: "relative",
      paddingBottom: 5,
      "&::after": {
        position: "absolute",
        content: '""',
        width: "0",
        height: "2px",
        backgroundColor: theme.palette.background.paper,
        left: "0",
        bottom: "0",
        transition: "all 0.5s ease",
      },
      "&:hover": {
        textDecoration: "none",
        "&::after": {
          width: "100%",
        },
      },
    },
  },
}));

const detailList = [
  {
    eventDate: 14,
    eventMonth: "NOV",
    eventImage: eventsImage1,
    eventDay: "Tuesday",
    eventName: "Amazing Water World",
    evenBtn: "Read More",
    eventLink: "https://www.google.co.in/",
  },
  {
    eventDate: 13,
    eventMonth: "NOV",
    eventImage: eventsImage2,
    eventDay: "Tuesday",
    eventName: "Jellyfish Dance",
    evenBtn: "Read More",
    eventLink: "https://www.google.co.in/",
  },
  {
    eventDate: "01",
    eventMonth: "NOV",
    eventImage: eventsImage3,
    eventDay: "Tuesday",
    eventName: "Colorful Fishes",
    evenBtn: "Read More",
    eventLink: "https://www.google.co.in/",
  },
  {
    eventDate: 13,
    eventMonth: "NOV",
    eventImage: eventsImage4,
    eventDay: "Tuesday",
    eventName: "Awesome Corals",
    evenBtn: "Read More",
    eventLink: "https://www.google.co.in/",
  },
];

const Events = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.eventsSection}>
        <Container maxWidth="xl">
          <Box mb={5}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item md={6}>
                <CustomTitle
                  subTitle="EVENTS"
                  title="WHAT'S"
                  titleLight="COMING UP?"
                  className={classes.eventsTitle}
                ></CustomTitle>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.aboutAquariumImage}>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
            >
              {detailList.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Box className={classes.detailBoxWrapper}>
                      <Box className={classes.detailBox}>
                        <div className={classes.detailBoxImage}>
                          <img src={item.eventImage} alt="" draggable="false" />
                        </div>
                        <div className={classes.eventDateDetail}>
                          <Typography variant="h3">{item.eventDate}</Typography>
                          <Typography variant="h6">
                            {item.eventMonth}
                          </Typography>
                        </div>
                        <Box className={classes.detailBoxText}>
                          <Typography variant="h6">{item.eventDay}</Typography>
                          <Typography variant="h5">{item.eventName}</Typography>
                          <Link href={item.eventLink} target="_blank">
                            {item.evenBtn}
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Events;
