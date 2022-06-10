import { makeStyles } from "@material-ui/core";

export const blogStyle = makeStyles((theme) => ({
  blogLeftSideSection: {
    padding: 15,
  },
  blogWrap: {
    marginBottom: 69,
  },
  blogImageWrap: {
    position: "relative",
    marginBottom: 43,
  },
  blogDateDetail: {
    position: "absolute",
    padding: 33,
    backgroundColor: theme.palette.primary.main,
    top: 20,
    left: 20,
    textAlign: "center",
    "& h3": {
      fontSize: 40,
      lineHeight: 1,
      fontWeight: 700,
      color: theme.typography.primary.main,
    },
    "& h6": {
      fontSize: 16,
      lineHeight: 1,
      color: theme.typography.primary.main,
    },
  },
  blogContentDetail: {
    "& a": {
      transition: "all 0.5s ease",
      "&:hover": {
        textDecoration: "none",
        "& h4": {
          opacity: 0.75,
        },
      },
      "& h4": {
        fontFamily: '"Quicksand",sans-serif',
        fontWeight: 700,
        fontSize: 40,
        color: theme.typography.primary.main,
        marginBottom: 12,
      },
    },
    "& p": {
      fontSize: 16,
      color: theme.typography.secondary.main,
      marginBottom: 30,
    },
  },
  commentWrap: {
    display: "flex",
    alignItems: "center",
    color: "#a3a3a3",
    "& svg": {
      fontSize: 18,
    },
    "& h6": {
      marginLeft: 10,
      fontSize: 18,
    },
  },
  blogRightSideSection: {
    padding: 15,
  },
  searchInput: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: 51,
    "& input": {
      paddingRight: 20,
      paddingLeft: 48,
    },
  },
  searchIcon: {
    position: "absolute",
    fontSize: 18,
    left: "9%",
  },
  categories: {
    marginBottom: 30,
  },
  categoriesTitle: {
    marginBottom: 20,
  },
  categoriesList: {
    listStyleType: "circle",
    listStylePosition: "inside",
    "& li": {
      display: "list-item",
      padding: 0,
      fontSize: 15,
      fontWeight: 700,
      color: theme.typography.primary.main,
      fontFamily: "'Quicksand',sans-serif",
      marginBottom: 20,
      "&:hover a": {
        color: "#a3a3a3",
      },
      "& a": {
        color: "inherit",
        textDecoration: "none",
        transition: "all 0.4s ease",
      },
      "& h6": {
        float: "right",
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
      },
    },
  },
  latestBlogComment: {
    "& svg": {
      fontSize: 14,
    },
    "& h6": {
      marginLeft: 7,
      fontSize: 14,
    },
  },
  postList: {
    marginBottom: 30,
  },
  latestPostContent: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
    height: "100%",
    "& a": {
      fontFamily: "'Quicksand',sans-serif",
      fontWeight: 700,
      fontSize: 16,
      color: theme.typography.primary.main,
      transition: "all 0.4s ease",
      "&:hover": {
        textDecoration: "none",
        color: "#a3a3a3",
      },
    },
  },
  instaPostWrap:{
    margin:"-3px",
    "& .MuiGrid-item":{
      padding:"3px",
    }
  },
  tagsButton:{
    "& .MuiButton-root":{
      width:"max-content",
      height:40,
      margin: "0 4px 8px",
      padding:"0 10px",
      fontSize:14
    }
  }
}));
