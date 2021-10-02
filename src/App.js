import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Redirect, Route, Switch } from "react-router";
import Appbar from "./component/Appbar";
import Home from "./component/page/Home";
import Search from "./component/page/Search";

import SearchCourse from "./component/page/SearchCourse";
import { useDispatch } from "react-redux";
import { slicesActions } from "./store/slices";
import "./App.css";
import Post from "./component/page/Post";
function App() {
  const dispatch = useDispatch();
  const getData = async () => {
    let promise;
    let promiseData;
    try {
      promise = await fetch(
        "https://unidrive-e6ec7-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
      );
      promiseData = await promise.json();

      if (!promise.ok) {
        throw new Error("Encountered error");
      }
    } catch (error) {
      console.log("error:", error);
    }
    console.log("promiseData:", promiseData);

    const items = [];
    for (const key in promiseData) {
      items.push({
        id: key,
        khulliyya: promiseData[key].khulliyya,
        major: promiseData[key].major,
        course: promiseData[key].course,
        url: promiseData[key].url,
      });
    }
    items.forEach((item) => dispatch(slicesActions.setData(item)));

    console.log("items:", items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="background">
      <Appbar></Appbar>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/search" exact>
          <Search></Search>
        </Route>
        <Route path="/search/:major">
          <SearchCourse></SearchCourse>
        </Route>
        <Route path="/upload">
          <Post></Post>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
