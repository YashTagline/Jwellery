import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomButton from "../comman/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import sliderImage1 from "../../assets/images/sliderImage1.jpeg";
import sliderImage2 from "../../assets/images/sliderImage2.jpeg";
import sliderImage3 from "../../assets/images/sliderImage3.jpeg";
import videoImage from "../../assets/images/video-block.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import DialogContent from "@material-ui/core/DialogContent";
import HomeAbout from "./homeAbout";
import AboutFish from "./aboutFish";
import FishType from "./fishType";
import Gallery from "./gallery";
import Tickets from "./tickets";
import Donation from "./donation";
import Events from "./events";
import Instagram from "./instagram";
import Partners from "../comman/partners";
import Testimonial from "../comman/testimonial";
SwiperCore.use([Pagination, Scrollbar, A11y, EffectFade]);

const useStyles = makeStyles((theme) => ({
  bannerSection: {
    position: "relative",
    [theme.breakpoints.down("768")]: {
      height: 300,
    },
  },
  bannerSwiper: {
    height: "100%",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  bannerText: {
    padding: "300px 0",
    "& h3": {
      color: theme.palette.background.paper,
      fontSize: 60,
      lineHeight: "60px",
      fontWeight: 300,
      letterSpacing: -3,
      fontFamily: '"Quicksand", sans-serif',
    },
    "& h1": {
      color: theme.palette.background.paper,
      fontSize: 100,
      fontWeight: 700,
      lineHeight: "100px",
      fontFamily: '"Quicksand", sans-serif',
    },
    "& h6": {
      color: theme.palette.background.paper,
      marginBottom: 50,
      fontWeight: 600,
      maxWidth: 1000,
    },
  },
  videoBox: {
    position: "relative",
  },
  videoImage: {
    width: 292,
    position: "relative",
    overflow: "hidden",
    "&::after": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transition: "all 0.8s ease-in-out",
      transform: "scale(1)",
    },
    "&:hover img": {
      transform: "scale(1.2)",
    },
  },
  videoContent: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& h6": {
      color: theme.palette.background.paper,
      fontSize: 18,
      marginTop: 8,
    },
  },
  videoDialog: {
    "& .MuiDialogContent-root": {
      padding: 0,
    },
  },
  videoBtn: {
    width: "50px",
    minWidth: "50px",
    height: "50px",
    borderRadius: "60px",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& svg": {
      color: theme.palette.background.paper,
      fontSize: "13px",
      margin: "8px 0 0 3px",
    },
  },
  rightBoxWrap: {
    alignItems: "center",
    height: "155px",
    backgroundColor: theme.palette.background.paper,
  },
  eventsTitle: {
    position: "relative",
    "& h6": {
      color: "#dcdcdc",
      fontSize: "24px",
      fontWeight: 700,
      display: "inline-block",
      transform: "translateY(20%) translateX(40%) rotate(-90deg)",
    },
  },
  eventsContent: {
    padding: "40px 0 25px",
    "& h5": {
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 10,
    },
    "& a": {
      display: "block",
      fontSize: 18,
      fontWeight: 700,
      color: theme.typography.primary.main,
      marginBottom: 8,
      fontFamily: '"Quicksand", sans-serif',
      textDecoration: "none",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        opacity: "0.7",
      },
    },
    "& span": {
      fontSize: 14,
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 700,
      color: "#a2a2a2",
    },
  },
  additionalInfo: {
    [theme.breakpoints.down("991")]: {
      display: "none",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className={classes.bannerSection}>
        <Swiper
          effect={"fade"}
          loop
          speed={1000}
          spaceBetween={0}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          slidesPerView={1}
          className={classes.bannerSwiper}
        >
          <SwiperSlide>
            <img src={sliderImage1} alt="Slider" width="100%" draggable="false" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImage2} alt="Slider" width="100%" draggable="false" />
            <Box
              position="absolute"
              zIndex="1"
              top={0}
              left={0}
              right={0}
              bottom={0}
            >
              <Container maxWidth="xl" height="100%">
                <Grid
                  container
                  height="100%"
                  alignItems="center"
                  direction="column"
                  justifyContent="center"
                  className={classes.bannerText}
                >
                  <Typography variant="h3">Amazing</Typography>
                  <Typography variant="h1">Underwater World</Typography>
                  <Typography variant="subtitle1" align="center">
                    Animals World accreditation standards. Members are proactive
                    in both undertaking and applying animal welfare scientific
                    research, contributing to EAZA being a recognised
                    organisation in animal welfare best-practice.
                  </Typography>
                  <CustomButton variant="outlined" color="primary">
                    Discover
                  </CustomButton>
                </Grid>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImage3} alt="Slider" width="100%" draggable="false" />
            <Box
              position="absolute"
              zIndex="1"
              top={0}
              left={0}
              right={0}
              bottom={0}
            >
              <Container maxWidth="xl" height="100%">
                <Grid
                  container
                  height="100%"
                  direction="column"
                  justifyContent="flex-start"
                  className={classes.bannerText}
                >
                  <Typography variant="h3">Awesome</Typography>
                  <Typography variant="h1">Colorful Corals</Typography>
                  <Typography variant="subtitle1">
                    Animals World accreditation standards. Members are proactive
                    in both undertaking and applying animal welfare scientific
                    research, contributing to EAZA being a recognised{" "}
                  </Typography>
                  <CustomButton variant="outlined" color="primary">
                    Explore More
                  </CustomButton>
                </Grid>
              </Container>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Box
          className={classes.additionalInfo}
          position="absolute"
          zIndex={1}
          bottom={0}
          left={0}
          right={0}
        >
          <Grid container>
            <Grid item>
              <Link to="" onClick={handleClickOpen}>
                <div className={classes.videoBox}>
                  <div className={classes.videoImage}>
                    <img src={videoImage} alt="Youtube" draggable="false" />
                  </div>
                  <div className={classes.videoContent}>
                    <Button className={classes.videoBtn}>
                      <FontAwesomeIcon icon={faPlay} />
                    </Button>
                    <Typography variant="subtitle2">Watch Video</Typography>
                  </div>
                </div>
              </Link>
              <Dialog
                open={open}
                onClose={handleClose}
                className={classes.videoDialog}
              >
                <DialogContent>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_sI_Ps7JSEk"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>
            </Grid>
            <Grid item md={4} style={{ alignSelf: "flex-end" }}>
              <Grid container className={classes.rightBoxWrap}>
                <Grid item className={classes.eventsTitle} md={3}>
                  <Typography variant="h6">Events</Typography>
                </Grid>
                <Grid item md={4} className={classes.eventsContent}>
                  <Typography variant="h5">01</Typography>
                  <Link to="/">Fishes Dancing</Link>
                  <Typography variant="caption">01 Nov 2020</Typography>
                </Grid>
                <Grid item md={5} className={classes.eventsContent}>
                  <Typography variant="h5">02</Typography>
                  <Link to="/">Aquarium Photosession</Link>
                  <Typography variant="caption">02 Nov 2020</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box position="absolute" zIndex={1} bottom={0} right={0}></Box>
      </div>
      <HomeAbout></HomeAbout>
      <AboutFish></AboutFish>
      <FishType></FishType>
      <Gallery></Gallery>
      <Tickets></Tickets>
      <Donation></Donation>
      <Testimonial></Testimonial>
      <Events></Events>
      <Partners></Partners>
      <Instagram></Instagram>
    </React.Fragment>
  );
};

export default Home;
