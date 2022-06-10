import {
  AppBar,
  Container,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React, { useEffect } from "react";
import siteLogo from "../../assets/images/site_logo.png";
import siteLogoBlack from "../../assets/images/site_logo_black.png";
import CustomButton from "../comman/CustomButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  headerWrap: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    zIndex: 99,
    "& .MuiAppBar-root": {
      backgroundColor: "transparent",
    },
    "& .MuiToolbar-regular": {
      padding: "0 15px",
    },
    "& .MuiToolbar-root": {
      justifyContent: "space-between",
      padding: 0,
      transition: "all 0.5s eas-in-out",
    },
  },
  root: {
    flexGrow: 1,
  },
  sticky: {
    position: "fixed",
    "& .MuiToolbar-root": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0 3px 10px 5px rgba(0,0,0,.05)",
      "& li": {
        "& a": {
          padding: "11px 0 10px 0",
          color: theme.typography.primary.main,
        },
      },
      "& #logo": {
        background: `url(${siteLogoBlack}) no-repeat center`,
        backgroundSize: "contain",
      },
    },
  },
  siteLogo: {
    "& a": {
      width: 200,
      height: 45,
      display: "bLock",
      background: `url(${siteLogo}) no-repeat center`,
      backgroundSize: "contain",
      marginLeft: 15,
      [theme.breakpoints.down("768")]: {
        width: 150,
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuList: {
    marginLeft: "auto",
    "& li": {
      width: "auto",
      display: "inline-block",
      padding: "0 15px",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
      "& a": {
        padding: "31px 0 30px 0",
        color: theme.palette.background.paper,
        fontWeight: "700",
        display: "block",
        position: "relative",
        textDecoration:"none",
        [theme.breakpoints.down("md")]: {
          display: "inline-block",
        },
        "&::after": {
          position: "absolute",
          content: '""',
          width: "0",
          height: "3px",
          backgroundColor: theme.palette.primary.main,
          left: "0",
          bottom: "0",
          transition: "all 0.5s ease",
        },
        "&.active::after": {
          width: "100%",
        },
        "&:hover": {
          textDecoration: "none",
          "&::after": {
            width: "100%",
          },
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      transform: "translateX(-100%)",
      transition: "all 0.5s ease-in-out",
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      paddingTop: 56,
      width: "100%",
      height: "100%",
      overflowY: "auto",
      background: theme.palette.secondary.backgroundColor,
      zIndex: -1,
    },
  },
  open: {
    transform: "translateX(00%)",
  },
  active: {
    "&::after": {
      width: "100% !important",
    },
  },
  mainMenuDropDown: {
    marginTop: 50,
  },
  togglerButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [mainManu, setMainMenu] = React.useState(false);

  const MainMenuOpen = () => {
    setMainMenu(!mainManu);
  };

  useEffect(() => {
    const header = document.querySelector("header");

    document.addEventListener("scroll", () => {
      var scroll_position = window.scrollY;
      if (window.innerWidth > 768) {
        if (scroll_position > 30) {
          header.classList.add(classes.sticky);
        } else {
          header.classList.remove(classes.sticky);
        }
      }
    });
  },);

  return (
    <React.Fragment>
      <header className={classes.headerWrap}>
        <Container maxWidth="xl">
          <AppBar position="static" elevation={0}>
            <Toolbar>
              <div className={classes.siteLogo}>
                <Link to="/" id="logo">&nbsp;</Link>
              </div>
              <IconButton
                className={classes.togglerButton}
                onClick={() => MainMenuOpen()}
              >
                <MenuIcon />
              </IconButton>
              <List
                className={`${classes.menuList} ${
                  mainManu ? classes.open : ""
                }`}
              >
                <ListItem>
                  <Link to="/" className={classes.active}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/about">Pages</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog">Blog</Link>
                </ListItem>
                <ListItem>
                  <Link to="/shopCatelog">Shop</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Contact</Link>
                </ListItem>
                <ListItem>
                  <Link to="/">Elements</Link>
                </ListItem>
                <ListItem>
                  <CustomButton
                    color="primary"
                    variant="contained"
                    disableElevation
                  >
                    Tickets
                  </CustomButton>
                </ListItem>
              </List>
            </Toolbar>
          </AppBar>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Header;
