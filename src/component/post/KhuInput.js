import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export default function SelectVariants(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    props.khuInput(event.target.value);
    setAge(event.target.value);
    console.log("event.target.value:", event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Khulliyyah</InputLabel>
      <Select
        error={props.error}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value={"APPLIED HEALTH SCIENCES"}>
          APPLIED HEALTH SCIENCES
        </MenuItem>
        <MenuItem value={"ARCHITECTURE"}>ARCHITECTURE</MenuItem>
        <MenuItem value={"BRIDGING PROGRAMME"}>BRIDGING PROGRAM</MenuItem>
        <MenuItem value={"CELPAD"}>CELPAD</MenuItem>
        <MenuItem value={"COCU"}>COCU</MenuItem>
        <MenuItem value={"DENTISTRY"}>DENTISTRY</MenuItem>
        <MenuItem value={"EDUCATION"}>EDUCATION</MenuItem>
        <MenuItem value={"ENGIN"}>ENGIN</MenuItem>
        <MenuItem value={"ENMS"}>ENMS</MenuItem>
        <MenuItem value={"ICT"}>ICT</MenuItem>
        <MenuItem value={"IIHRT"}>IIHRT</MenuItem>
        <MenuItem value={"IRKHS"}>IRKHS</MenuItem>
        <MenuItem value={"ISLAMIC BANKING AND FINANCE"}>
          ISLAMIC BANKING AND FINANCE
        </MenuItem>
        <MenuItem value={"ISTAC"}>ISTAC</MenuItem>
        <MenuItem value={"KLM"}>KLM</MenuItem>
        <MenuItem value={"LAWS"}>LAWS</MenuItem>
        <MenuItem value={"MEDICINE"}>MEDICINE</MenuItem>
        <MenuItem value={"NURSING"}>NURSING</MenuItem>
        <MenuItem value={"PHARMACY"}>PHARMACY</MenuItem>
        <MenuItem value={"SCIENCE"}>SCIENCE</MenuItem>
      </Select>
      <FormHelperText style={{ color: "red" }}>
        {props.error ? "please provide a khulliyyah" : ""}
      </FormHelperText>
    </FormControl>
  );
}
