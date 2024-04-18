// src/components/LoginForm.js
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);
      console.log(response.data); // Handle successful login
    } catch (error) {
      console.error("Error:", error.response.data.message); // Handle login error
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.formContainer}>
      <div>
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
          >
            Login
          </Button>{" "}
          <Grid container justify="flex-end" style={{ marginTop: "10px" }}>
            <Grid item>
              {" "}
              Don't have an account?
              <Button component={Link} to="/register">
                {" "}
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
