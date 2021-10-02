import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchBar from "../SearchBar";
import DisplayData from "../DisplayData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slicesActions } from "../../store/slices";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Search = () => {
  const classes = useStyles();
  let data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  dispatch(slicesActions.setSearchMajor(true));
  // data.sort(function (a, b) {
  //   return a.khulliyya.localeCompare(b.khulliyya);
  // });

  let newData = [...data];
  newData.sort(function (a, b) {
    if (a.khulliyya.toLowerCase() < b.khulliyya.toLowerCase()) {
      return -1;
    }
    if (a.khulliyya.toLowerCase() > b.khulliyya.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  var uniqueData = [];
  newData.filter(function (item) {
    var i = uniqueData.findIndex((x) => x.major == item.major);
    if (i <= -1) {
      uniqueData.push(item);
    }
    return null;
  });
  console.log(uniqueData);

  const searchData = uniqueData.map((item) => item.major);
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
            <DisplayData data={uniqueData}></DisplayData>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Search;
