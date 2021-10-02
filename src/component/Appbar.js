import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import AppbarCSS from "./Appbar.module.css";
export default function header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/home" className={AppbarCSS.link}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                UniDrive
              </Typography>
            </Link>
            <Link to="/upload">
              <Button color="inherit">Upload</Button>
            </Link>
            <Link to="/search">
              <Button color="inherit">Search</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
