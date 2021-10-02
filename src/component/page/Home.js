import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ChaRight from "../../img/character right.svg";
import ChaLeft from "../../img/character left.svg";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import DisplayData from "../DisplayData";
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "95vh",
    // backgroundColor: "black",
  },
  buttonContainer: {
    marginTop: "1px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          alignItems="center"
          spacing={5}
          className={classes.gridContainer}
        >
          <Grid container item sm={6}>
            <Grid item sm={6}>
              <img src={ChaLeft} alt="" />
            </Grid>
            <Grid item sm={6}>
              <img src={ChaRight} alt="" />
            </Grid>
          </Grid>

          <Grid
            container
            item
            sm={6}
            spacing={2}
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" sx={{ color: "grey.700" }}>
                Google link database
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ color: "grey.700" }}>
                Keep life organized and work moving—all in one place
              </Typography>
            </Grid>
            <Grid
              container
              item
              spacing={5}
              className={classes.buttonContainer}
            >
              <Grid item>
                <Link to="./upload">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<FileUploadIcon />}
                  >
                    Upload
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="./search">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
