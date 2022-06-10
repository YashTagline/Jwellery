import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import footerLogo from "../../assets/images/footer-logo.png";
const useStyles = makeStyles((theme) => ({
  subFooterSection: {
    backgroundColor: theme.typography.primary.backgroundColor,
    padding: "50px 0",
  },
  footerLogo: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
    },
  },
  privacyText: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
    },
    "& .MuiListItem-root": {
      position: "relative",
      width: "max-content",
      padding: 0,
      fontSize: 14,
      color: theme.palette.secondary.main,
      "& .MuiLink-root": {
        cursor: "pointer",
        color: "inherit",
        transition: "all 0.5s ease",
        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
    },
    "& .MuiListItem-root + .MuiListItem-root::before": {
      content: "'|'",
      display: "inline-block",
      padding: "0 8px",
      left: 0,
    },
  },
  contactInfo: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30,
    },
    "& p": {
      color: theme.palette.background.paper,
      marginBottom: 8,
      fontSize: 14,
      "& .MuiLink-root": {
        color: "inherit",
        cursor: "pointer",
        transition: "all 0.5s ease",
        marginLeft: 10,
        "&:hover": {
          textDecoration: "none",
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));

const SubFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.subFooterSection}>
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <div className={classes.footerLogo}>
              <img src={footerLogo} alt="Association Of Zoos & Aquariums" />
            </div>
          </Grid>
          <Grid item>
            <List className={classes.privacyText}>
              <ListItem>
                <Link>Privacy Policy</Link>
              </ListItem>
              <ListItem>
                <Link>Terms & Conditions</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <div className={classes.contactInfo}>
              <Typography variant="body1">
                <strong>Location:</strong>
                <Link> av. Washington 165, NY CA 54003</Link>
              </Typography>
              <Typography variant="body1">
                <strong>Phone:</strong>
                <Link>+31 85 964 47 25</Link>
                <Link>+31 65 792 63 11</Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SubFooter;
