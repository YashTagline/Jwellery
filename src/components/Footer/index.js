import { Container, Link, List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import footerBg from "../../assets/images/background__layout.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import SubFooter from "./subFooter";
const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: `${theme.palette.secondary.backgroundColor} url(${footerBg}) center no-repeat`,
    padding: "80px 0 70px",
  },
  footerNav: {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    "& .MuiListItem-root": {
      width: "max-content",
      padding: "10px 12px",
      "& .MuiLink-root": {
        color: theme.palette.secondary.main,
        textDecoration: "none",
        cursor: "pointer",
        fontSize: 18,
        fontWeight: 600,
        transition: "all 0.4s ease",
        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  footerSubNav: {
    marginBottom: 0,
    "& .MuiListItem-root": {
      "& .MuiLink-root": {
        color: theme.palette.primary.main,
        fontSize: 14,
        [theme.breakpoints.down("md")]: {
          display: "block",
          position: "relative",
        },
        "&:hover": {
          color: theme.palette.background.paper,
        },
      },
    },
  },
}));
const footerMenuList = [
  { menuName: "Home" },
  { menuName: "Pages" },
  { menuName: "Animals" },
  { menuName: "Schedule" },
  { menuName: "Gallery" },
  { menuName: "Blog" },
  { menuName: "Contacts" },
  { menuName: "Elements" },
];
const socialMenuList = [
  { socialIcon: <FacebookIcon /> },
  { socialIcon: <TwitterIcon /> },
  { socialIcon: <YouTubeIcon /> },
  { socialIcon: <InstagramIcon /> },
];
const subMenuList = [
  { subMenuName: "Membership" },
  { subMenuName: "Education" },
  { subMenuName: "Map" },
  { subMenuName: "Events" },
  { subMenuName: "Donate" },
  { subMenuName: "Foundation" },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footerSection}>
        <Container maxWidth="xl">
          <List className={classes.footerNav}>
            {footerMenuList.map((item, i) => {
              return (
                <ListItem key={i}>
                  <Link to="">{item.menuName}</Link>
                </ListItem>
              );
            })}
          </List>
          <List className={classes.footerNav}>
            {socialMenuList.map((item, i) => {
              return (
                <ListItem key={i}>
                  <Link>{item.socialIcon}</Link>
                </ListItem>
              );
            })}
          </List>
          <List className={`${classes.footerNav} ${classes.footerSubNav}`}>
            {subMenuList.map((item, i) => {
              return (
                <ListItem key={i}>
                  <Link>{item.subMenuName}</Link>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </div>
      <SubFooter></SubFooter>
    </>
  );
};

export default Footer;
