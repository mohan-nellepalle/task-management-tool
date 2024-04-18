import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  IconButton,
  Menu,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: "none", // Remove underline from the link
    color: "inherit", // Use the default color
  },
  logo: {
    marginRight: theme.spacing(1), // Adjust spacing between logo and text
    height: "36px", // Adjust height of the logo as needed
  },
  addButton: {
    fontSize: "16px",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));
const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          component={RouterLink}
          to="/"
        >
          {/* <Logo></Logo> */}
          TaskManagementTool
        </Typography>{" "}
        <IconButton component={Link} color="inherit" onClick={handleOpen}>
          <span
            component={Link}
            to="/"
            color="inherit"
            style={{ fontSize: "16px" }}
          >
            + Add Task
          </span>
        </IconButton>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About Us
        </Button>
        <IconButton
          className={classes.profileIcon}
          color="inherit"
          onClick={handleMenuOpen}
        >
          <Avatar />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          <MenuItem onClick={handleMenuClose}>My Tasks</MenuItem>
        </Menu>
      </Toolbar>{" "}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField label="Task Name" variant="outlined" />
          <TextField label="Date" variant="outlined" type="date" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default Header;
