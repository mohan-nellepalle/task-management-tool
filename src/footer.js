import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: theme.palette.background.default,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Task Management System
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Made with ❤️ by{" "}
          <Link href="https://yourwebsite.com">Mohan Nellapalle</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
