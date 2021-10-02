import React from "react";
import { Typography } from "@mui/system";
import PostForm from "../post/PostForm";
import { useDispatch } from "react-redux";
import { slicesActions } from "../../store/slices";

const Post = () => {
  const dispatch = useDispatch();
  dispatch(slicesActions.setShowSearchBar(false));
  return (
    <>
      {" "}
      <PostForm></PostForm>
    </>
  );
};

export default Post;
