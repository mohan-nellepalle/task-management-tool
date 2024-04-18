import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/021/030/038/original/4k-project-tracking-or-goal-tracker-animation-businessman-project-manager-holding-big-pencil-to-check-completed-tasks-in-project-management-timeline-free-video.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(-2),
    borderRadius: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login process
    setIsLoggedIn(true);
  };

  return (
    <div className={classes.background}>
      <Container>
        <Typography variant="h2" className={classes.title}>
          Welcome to Task Management System
        </Typography>
        <Typography variant="h5" gutterBottom>
          Organize your tasks efficiently
        </Typography>
        {isLoggedIn ? (
          <Typography variant="body1">
            You are logged in. Welcome back!
          </Typography>
        ) : (
          <Grid container justify="flex-end">
            <Grid item xs={6} sm={6}>
              <div className={classes.formContainer}>
                <LoginForm />
              </div>
            </Grid>
          </Grid>
        )}
        {!isLoggedIn && (
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Get Started
          </Button>
        )}
      </Container>
    </div>
  );
};

export default Home;
