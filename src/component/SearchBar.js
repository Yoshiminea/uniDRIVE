import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";

export default function ComboBox({ searchData }) {
  const searchDataWithLabel = searchData?.map((item) => {
    return { label: item };
  });
  const state = useSelector((state) => state.data.searchMajor);

  return (
    <Paper elevation={5}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={searchDataWithLabel}
        sx={{ minWidth: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label={state ? "Major" : "Course"} />
        )}
      />
    </Paper>
  );
}
