import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slicesActions } from "../../store/slices";
import SearchBar from "../SearchBar";
import DisplayDataCourse from "../DisplayDataCourse";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const SearchCourse = () => {
  const classes = useStyles();
  const params = useParams();
  console.log("params:", params);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.data.data);
  console.log("state:", state);
  const data = state.filter((state) => state.major === params.major);
  console.log("data:", data);

  dispatch(slicesActions.setShowSearchBar(true));
  data.sort(function (a, b) {
    console.log("b.khulliyya:", b.khulliyya);
    console.log("a.khulliyya:", a.khulliyya);
    if (a.major.toLowerCase() < b.major.toLowerCase()) {
      return -1;
    }
    if (a.major.toLowerCase() > b.major.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const searchData = data.map((item) => item.major);

  return (
    <>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={5}
          sx={{ marginTop: 1 }}
          direction="column"
          alignItems="center"
        >
          <Grid item sx={{ minWidth: "100%" }}>
            <SearchBar searchData={searchData}></SearchBar>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            sx={{ minWidth: "100%" }}
          >
            <DisplayDataCourse data={data}></DisplayDataCourse>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SearchCourse;
