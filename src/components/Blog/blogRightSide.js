import { Grid, Link, List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import CustomInput from "../comman/CustomInput";
import SearchIcon from "@material-ui/icons/Search";
import BlogCommanTitle from "../comman/BlogCommanTitle";
import { blogStyle } from "./blogStyle";
import latestBlog5 from "../../assets/images/latest_blog_5.jpeg";
import latestBlog1 from "../../assets/images/latest_blog_1.jpeg";
import latestBlog2 from "../../assets/images/latest_blog_2.jpeg";
import latestBlog3 from "../../assets/images/latest_blog_3.jpeg";
import latestBlog4 from "../../assets/images/latest_blog_4.jpeg";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import instaPost1 from "../../assets/images/insta_post_1.jpeg"
import instaPost2 from "../../assets/images/insta_post_2.jpeg"
import instaPost3 from "../../assets/images/insta_post_3.jpeg"
import instaPost4 from "../../assets/images/insta_post_4.jpeg"
import instaPost5 from "../../assets/images/insta_post_5.jpeg"
import instaPost6 from "../../assets/images/insta_post_6.jpeg"
import CustomButton from "../comman/CustomButton";
const categories = [
  { categoriesLink: "/", categoriesName: "Animal Babies", catergoriesCount: "2" },
  { categoriesLink: "/", categoriesName: "Insider Tips from the Zoo", catergoriesCount: "4" },
  { categoriesLink: "/", categoriesName: "News from the Aquarium", catergoriesCount: "1" },
  { categoriesLink: "/", categoriesName: "News from the Terrarium", catergoriesCount: "1" },
  { categoriesLink: "/", categoriesName: "Our Employees", catergoriesCount: "3" },
  { categoriesLink: "/", categoriesName: "Zoo News", catergoriesCount: "4" },
];
const latestPost = [
  { latestPostImage: latestBlog5, postTitle: "Animal friendships at WildWorld Zoo",
    postTitleLink: "https://www.google.com", postDate: "October 22, 2020" },

  { latestPostImage: latestBlog1, postTitle: "Giraffes are near us in our Zoo",
    postTitleLink: "https://www.google.com",postDate: "October 22, 2020" },

  { latestPostImage: latestBlog2, postTitle: "Happy birthday, Hertha!",
    postTitleLink: "https://www.google.com", postDate: "October 22, 2020" },

  { latestPostImage: latestBlog3, postTitle: "For she’s a jolly good fellow",
    postTitleLink: "https://www.google.com", postDate: "October 22, 2020" },

  { latestPostImage: latestBlog4, postTitle: "Animal friendships at Zoo Berlin",
    postTitleLink: "https://www.google.com", postDate: "October 22, 2020" },
];
const archive=[{ archiveLink: "/", archiveName: "October 2020", archiveCount: "9" }]
const instagram=[
  { instaPostLink:"", instaPost: instaPost1 },
  { instaPostLink:"", instaPost: instaPost2 },
  { instaPostLink:"", instaPost: instaPost3 },
  { instaPostLink:"", instaPost: instaPost4 },
  { instaPostLink:"", instaPost: instaPost5 },
  { instaPostLink:"", instaPost: instaPost6 }
]
const tags = [
  { tagsButtonName:"Animals" },
  { tagsButtonName:"Griaffe" },
  { tagsButtonName:"Kids" },
  { tagsButtonName:"Lion" },
  { tagsButtonName:"Monkeys" },
  { tagsButtonName:"News" },
  { tagsButtonName:"Zoo" }
]
const BlogRightSide = () => {
  const classes = blogStyle();
  return (
    <div className={classes.blogRightSideSection}>
      <div className={classes.searchInput}>
        <CustomInput type="text" placeholder="Search" variant="outlined"></CustomInput>
        <SearchIcon className={classes.searchIcon} />
      </div>
      <div className={classes.categories}>
        <BlogCommanTitle blogTitle="Categories" extraClass={classes.categoriesTitle}></BlogCommanTitle>
        <List className={classes.categoriesList}>
          {categories.map((item, i) => {
            return (
              <ListItem key={i}>
                <a href={item.categoriesLink}>{item.categoriesName}</a>
                <Typography variant="h6">({item.catergoriesCount})</Typography>
              </ListItem>
            );
          })}
        </List>
      </div>
      <div>
        <BlogCommanTitle blogTitle="Latest Posts"></BlogCommanTitle>
        {latestPost.map((item, i) => {
          return (
            <Grid container key={i} className={classes.postList}>
              <Grid item xs={4}><img src={item.latestPostImage} alt={item.postTitle} /></Grid>
              <Grid item xs={8}>
                <div className={classes.latestPostContent}>
                  <Link to={item.categoriesLink}>{item.postTitle}</Link>
                  <Grid container alignItems="center" justifyContent="space-between" >
                    <Grid item><Typography variant="body1">{item.postDate}</Typography></Grid>
                    <Grid item>
                      <div className={`${classes.commentWrap} ${classes.latestBlogComment}`}>
                        <ChatBubbleIcon /><Typography variant="h6">0</Typography>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          );
        })}
      </div>
      <div className={classes.categories}>
        <BlogCommanTitle blogTitle="Archive" extraClass={classes.categoriesTitle}></BlogCommanTitle>
        <List className={classes.categoriesList}>
          {archive.map((item, i) => {
            return (
              <ListItem key={i}>
                <a href={item.archiveLink}>{item.archiveName}</a>
                <Typography variant="h6">({item.archiveCount})</Typography>
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className={classes.categories}>
        <BlogCommanTitle blogTitle="Instagram"></BlogCommanTitle>
        <Grid container className={classes.instaPostWrap}>
        {instagram.map((item, i) => {
          return (
            <Grid item sm={4} xs={6} key={i}>
              <Link href={item.instaPostLink}>
                <img src={item.instaPost} alt="" />
              </Link>
            </Grid>
          );
        })}
        </Grid>
      </div>
      <div>
          <BlogCommanTitle blogTitle="Tags"></BlogCommanTitle>
          <Grid container className={classes.tagsButton}>
            {
              tags.map((item,i)=>{
                return (
                  <Grid item key={i}>
                    <CustomButton variant="contained" color="primary" disableElevation>{item.tagsButtonName}</CustomButton>                    
                  </Grid>
                )
              })
            }
          </Grid>
      </div>
    </div>
  );
};
export default BlogRightSide;