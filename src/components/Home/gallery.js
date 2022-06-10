import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import CustomTitle from "../comman/CustomTitle";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import gallery25 from "../../assets/images/gallery_25.jpeg";
import gallery26 from "../../assets/images/gallery_26.jpeg";
import gallery27 from "../../assets/images/gallery_27.jpeg";
import gallery28 from "../../assets/images/gallery_28.jpeg";
import gallery29 from "../../assets/images/gallery_29.jpeg";
import gallery30 from "../../assets/images/gallery_30.jpeg";
import gallery31 from "../../assets/images/gallery_31.jpeg";
import gallery32 from "../../assets/images/gallery_32.jpeg";

const useStyles = makeStyles((theme) => ({
  gallerSection: {
    padding: "100px 0 0",
  },
  galleryTitle: {
    paddingBottom: 30,
  },
  gallerySlider: {
    display: "flex",
    flexWrap: "wrap",
  },
  animalListWrap: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      "& .MuiBox-root::after": {
        opacity: "0.3",
        background: theme.palette.primary.main,
      },
      "& .MuiBox-root img": {
        transform: "scale(1.1)",
      },
    },
    "& .MuiBox-root": {
      position: "relative",
      height: "100%",
      width: "100%",
      "&::after": {
        position: "absolute",
        content: "''",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: "#002C594D",
        height: "100%",
        width: "100%",
        transition: "all 0.5s ease 0s",
      },
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "scale(1.01)",
        transition: "all 0.5s ease 0s",
      },
    },
  },
  animalContent: {
    position: "absolute",
    padding: 37,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    "& h6": {
      fontSize: 12,
      color: theme.palette.primary.main,
      textTransform: "uppercase",
      fontWeight: 600,
    },
    "& p": {
      fontSize: 18,
      color: theme.palette.background.paper,
      fontWeight: 700,
    },
  },
}));

const animalList = [
  {
    image: gallery25,
    animalType: "Marine mammals",
    animalName: "Dolphins",
  },
  {
    image: gallery26,
    animalType: "Cephalopod",
    animalName: "Octopus",
  },
  {
    image: gallery27,
    animalType: "Fish",
    animalName: "Salt Fish",
  },
  {
    image: gallery28,
    animalType: "Reptiles",
    animalName: "Leopard tortoise",
  },
  {
    image: gallery29,
    animalType: "Corals",
    animalName: "White Coral",
  },
  {
    image: gallery30,
    animalType: "Fish",
    animalName: "Batoidea",
  },
  {
    image: gallery31,
    animalType: "Jellyfish",
    animalName: "Mastigias papua",
  },
  {
    image: gallery32,
    animalType: "Marine mammals",
    animalName: "Orca",
  },
];

const Gallery = () => {
  const classes = useStyles();
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <Box className={classes.gallerSection}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={6}>
            <CustomTitle title="GALLERY" titleLight="OF AQUARIUM" subTitle="OUR GALLERY" className={classes.galleryTitle}></CustomTitle>
          </Grid>
        </Grid>
      </Container>
      <LightGallery onInit={onInit} speed={300} mousewheel={true} plugins={[lgZoom]} elementClassNames={classes.gallerySlider}>
        {animalList.map((item, index) => {
          return (
            <Grid item xs={12} md={6} lg={3} key={index} data-src={item.image} className={classes.animalListWrap}>
              <Box>
                <img src={item.image} alt={item.name} draggable="false" />
              </Box>
              <div className={classes.animalContent}>
                <Typography variant="h6">{item.animalType}</Typography>
                <Typography variant="body1">{item.animalName}</Typography>
              </div>
            </Grid>
          );
        })}
      </LightGallery>
    </Box>
  );
};

export default Gallery;
