import { createSlice } from "@reduxjs/toolkit";
import React, { useState } from "react";

const initialState = { data: [], major: "", showSearchBar: false,searchMajor: false };

const slices = createSlice({
  name: "slices",
  initialState: initialState,
  reducers: {
    setData(state, action) {
      state.data.push({
        id: action.payload.id,
        khulliyya: action.payload.khulliyya,
        major: action.payload.major,
        course: action.payload.course,
        url: action.payload.url,
      });
    },
    setMajor(state, action) {
      state.major = action.payload;
    },
    setShowSearchBar(state, action) {
      state.showSearchBar = action.payload;
    },
    setSearchMajor(state,action){
      state.searchMajor=action.payload
    }
  },
});

export const slicesActions = slices.actions;
export default slices;
