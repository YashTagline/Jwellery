import { Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import blogPost1 from "../../assets/images/blog_1.jpeg";
import blogPost2 from "../../assets/images/blog_2.jpeg";
import blogPost3 from "../../assets/images/advantages_3.jpeg";
import blogPost4 from "../../assets/images/blog_3.jpeg";
import blogPost5 from "../../assets/images/blog_4.jpeg";
import CustomButton from "../comman/CustomButton";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { blogStyle } from "./blogStyle";

const blogPost = [
  {
    blogPostImage: blogPost1,
    blogDate: 22,
    blogMonth: "OCT",
    blogContentTitle: "Animal friendships at WildWorld Zoo",
    blogContentPar:
      "Gianttail worm eel duckbill unicorn fish bowfinsleeper anemonefish murray cod North American freshwater catfish. Crocodile shark carpsucker Atlantic saury leatherjacket sea snail glass catfish starry flounder longnose lancetfish yellow jack. Ricefish candiru moonfish trout cod yellowbanded perch sabertooth fish surgeonfish, golden dojo buri New...",
  },
  {
    blogPostImage: blogPost2,
    blogDate: 22,
    blogMonth: "OCT",
    blogContentTitle: "Giraffes are near us in our Zoo",
    blogContentPar:
      "To celebrate the 40th birthday of beloved cartoon cat Garfield, who lives in not-so-perfect harmony with dog Odie and human Jon, we are dedicating this blog entry to the curious cohabitations and fascinating friendships that have arisen over the years among animals at Zoo Berlin.",
  },
  {
    blogPostImage: blogPost3,
    blogDate: 22,
    blogMonth: "OCT",
    blogContentTitle: "Happy birthday, Hertha!",
    blogContentPar:
      "To celebrate the 40th birthday of beloved cartoon cat Garfield, who lives in not-so-perfect harmony with dog Odie and human Jon, we are dedicating this blog entry to the curious cohabitations and fascinating friendships that have arisen over the years among animals at Zoo Berlin.",
  },
  {
    blogPostImage: blogPost4,
    blogDate: 22,
    blogMonth: "OCT",
    blogContentTitle: "For she’s a jolly good fellow!",
    blogContentPar:
      "To celebrate the 40th birthday of beloved cartoon cat Garfield, who lives in not-so-perfect harmony with dog Odie and human Jon, we are dedicating this blog entry to the curious cohabitations and fascinating friendships that have arisen over the years among animals at Zoo Berlin.",
  },
  {
    blogPostImage: blogPost5,
    blogDate: 22,
    blogMonth: "OCT",
    blogContentTitle: "Animal friendships at Zoo Berlin",
    blogContentPar:
      "To celebrate the 40th birthday of beloved cartoon cat Garfield, who lives in not-so-perfect harmony with dog Odie and human Jon, we are dedicating this blog entry to the curious cohabitations and fascinating friendships that have arisen over the years among animals at Zoo Berlin.",
  },
];

const BlogLeftSide = () => {
  const classes = blogStyle();
  return (
    <div className={classes.blogLeftSideSection}>
      {blogPost.map((item, i) => {
        return (
          <div className={classes.blogWrap} key={i}>
            <div className={classes.blogImageWrap}>
              <img src={item.blogPostImage} alt="" />
              <div className={classes.blogDateDetail}>
                <Typography variant="h3">{item.blogDate}</Typography>
                <Typography variant="h6">{item.blogMonth}</Typography>
              </div>
            </div>
            <div className={classes.blogContentDetail}>
              <Link to="">
                <Typography variant="h4">{item.blogContentTitle}</Typography>
              </Link>
              <Typography variant="body1">{item.blogContentPar}</Typography>
            </div>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <CustomButton variant="outlined" color="secondary">
                  Read More
                </CustomButton>
              </Grid>
              <Grid item>
                <div className={classes.commentWrap}>
                  <ChatBubbleIcon />
                  <Typography variant="h6">0</Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default BlogLeftSide;
