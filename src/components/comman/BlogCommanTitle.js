import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    fontSize:25,
    fontWeight:700,
    lineHeight:"25px",
    color:theme.typography.primary.main,
    fontFamily:"'Quicksand',sans-serif",
    paddingLeft: 20,
    borderLeft: "2px solid",
    borderColor: theme.palette.primary.main,
    marginBottom: 30,
  },
}));

const BlogCommanTitle = ({ blogTitle, extraClass }) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={`${classes.blogTitle} ${extraClass}`}>
      {blogTitle}
    </Typography>
  );
};

export default BlogCommanTitle;
