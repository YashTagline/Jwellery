import React from "react";
import CommanBanner from "../comman/CommanBanner";
import blogBg from "../../assets/images/blog.jpeg"
import BlogContent from "./blogContent";
const Blog = () => {
  return (
    <div>
      <CommanBanner
        bgImage={blogBg}
        smallTtile="Animal World"
        mainTitle="OUR"
        mainSubTitle="Blog"
      ></CommanBanner>
      <BlogContent></BlogContent>
    </div>
  );
};

export default Blog;
