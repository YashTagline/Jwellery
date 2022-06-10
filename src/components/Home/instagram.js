import { Box, Container, Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";
import CustomTitle from "../comman/CustomTitle";
import InstagramIcon from "@material-ui/icons/Instagram";
import post1 from "../../assets/images/insta_image_1.jpeg";
import post2 from "../../assets/images/insta_image_2.jpeg";
import post3 from "../../assets/images/insta_image_3.jpeg";
import post4 from "../../assets/images/insta_image_4.jpeg";
import post5 from "../../assets/images/insta_image_5.jpeg";
import post6 from "../../assets/images/insta_image_6.jpeg";

const useStyles = makeStyles((theme) => ({
  instagramTitle: {
    "& h3": {
      "& label": {
        display: "inline-block",
        marginRight: 10,
      },
    },
  },
  postWrap: {
    position: "relative",
    overflow: "hidden",
    "&::after": {
      position: "absolute",
      content: "''",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      opacity: 0,
      transition: "all 0.3s ease",
    },
    "&:hover::after": {
      opacity: 0.3,
    },
    "&:hover": {
      "& .MuiBox-root": {
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
  instaIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: 15,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    zIndex: 1,
    transition: "all 0.3s ease",
    "& .MuiSvgIcon-root": {
      fill: theme.palette.background.paper,
    },
  },
}));

const postList = [
  {
    postImage: post1,
    postName: "Instagram post 17957915194370071",
  },
  {
    postImage: post2,
    postName: "Instagram post 17848465922450261",
  },
  {
    postImage: post3,
    postName: "Instagram post 17889596008763083",
  },
  {
    postImage: post4,
    postName: "Instagram post 17848196435463046",
  },
  {
    postImage: post5,
    postName: "Instagram post 17896989166655111",
  },
  {
    postImage: post6,
    postName: "Instagram post 17865990335177982",
  },
];

const Instagram = () => {
  const classes = useStyles();

  return (
    <div className={classes.instagramSection}>
      <Container maxWidth="xl">
        <Box mb={5}>
          <CustomTitle subTitle="INSTAGRAM" title="# AWESOME" titleLight="AQUARIUM" className={classes.instagramTitle}></CustomTitle>
        </Box>
      </Container>
      <Grid container>
        {postList.map((item, i) => {
          return (
            <Grid item lg={2} md={4} xs={6} key={i}>
              <Link href="">
                <Box className={classes.postWrap}>
                  <img src={item.postImage} alt={item.postName} draggable="false" />
                  <Box className={classes.instaIcon}>
                    <InstagramIcon />
                  </Box>
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Instagram;
