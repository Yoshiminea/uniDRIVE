import React, { useState } from "react";
import { Typography, Paper, TextField, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { slicesActions } from "../../store/slices";
import KhulInput from "./KhuInput";
import { useInputError } from "../../hook/useInputError";
const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "100%",
    // maxWidth: "50vw",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(8),
  },
  container: {
    minHeight: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
  },
}));

const PostForm = () => {
  const classes = useStyles();
  const [khulliyya, setKhulliyya] = useState("");
  const [major, setMajor] = useState("");
  const [course, setCourse] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const { error: errorMajor, setError: setErrorMajor } = useInputError();
  const { error: errorCourse, setError: setErrorCourse } = useInputError();
  const { error: errorUrl, setError: setErrorUrl } = useInputError();
  const { error: errorKhul, setError: setErrorKhul } = useInputError();

  const khuInputHandler = (value) => {
    console.log("value:", value);
    if (value === "") {
      setErrorKhul(true);
      return;
    }
    setKhulliyya(value);
  };

  function capitalizeFirstLetter(string) {
    const temp = string.charAt(0).toUpperCase() + string.slice(1);
    console.log("temp:", temp);

    return temp;
  }
  function trim(string) {
    return string.trim();
  }
  function processLink(string) {
    const temp = string.trim();
    console.log("temp:", temp);
    const newTemp = temp.includes("https://drive.google.com/drive/");

    return newTemp;
  }
  function processMajor(string) {
    const trimmedString = string.trim();
    const capString = capitalizeFirstLetter(string);
  }
  function processInput(string) {
    const splittedCourseName = string.split(" ");
    console.log("splittedCourseName:", splittedCourseName);

    const processedCourseName = splittedCourseName.map((item) =>
      capitalizeFirstLetter(item)
    );
    return processedCourseName.join(" ");
  }
  const errorHandler = (major, course, url, khul) => {
    console.log("url:", url);
    console.log("course:", course);
    console.log("major:", major);
    if (major === "") {
      setErrorMajor(true);
    } else {
      setErrorMajor(false);
    }
    if (course === "") {
      setErrorCourse(true);
    } else {
      setErrorCourse(false);
    }
    if (url === "") {
      setErrorUrl(true);
    } else {
      setErrorUrl(false);
    }
    if (!processLink(url)) {
      setErrorUrl(true);
    } else {
      setErrorUrl(false);
    }
    if (khul === "") {
      setErrorKhul(true);
    } else {
      setErrorKhul(false);
    }
  };
  /*form*/
  const submitHandler = (e) => {
    e.preventDefault();
    const newMajor = processInput(major);
    const newCourse = processInput(course);
    errorHandler(newMajor, newCourse, url, khulliyya);

    if (!(errorKhul && errorMajor && errorCourse && errorUrl)) {
      console.log("error in one of the inputs");
      return;
    }

    console.log("errorUrl:", errorUrl);
    const data = {
      khulliyya: khulliyya,
      major: newMajor,
      course: newCourse,
      url: url,
    };

    const sendData = async () => {
      try {
        await fetch(
          "https://unidrive-e6ec7-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",
          {
            method: "POST",
            body: JSON.stringify(data),
          }
        );
      } catch (error) {
        console.log("error:", error);
      }
      console.log("data sent!");
    };
    sendData();
    dispatch(slicesActions.setData(data));

    // clear inputs
    setMajor("");
    setCourse("");
    setUrl("");
  };
  return (
    <>
      <Grid container className={classes.container}>
        <form onSubmit={submitHandler}>
          <Grid>
            <Paper className={classes.paper}>
              <Typography variant="h5" color="initial" gutterBottom>
                Share Google Drive Link
              </Typography>
              <Typography variant="subtitle1" color="initial">
                Information Details
              </Typography>
              <KhulInput
                error={errorKhul}
                khuInput={khuInputHandler}
              ></KhulInput>

              <TextField
                className={classes.textField}
                error={errorMajor}
                helperText={errorMajor ? "Please provide a valid major" : ""}
                id="standard-error-helper-text"
                label="Major"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                onChange={(event) => setMajor(event.target.value)}
                value={major}
              />
              <TextField
                className={classes.textField}
                error={errorCourse}
                helperText={errorCourse ? "Please provide a valid course" : ""}
                id="standard-error-helper-text"
                label="Course"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                onChange={(event) => setCourse(event.target.value)}
                value={course}
              />
              <TextField
                className={classes.textField}
                error={errorUrl}
                helperText={errorUrl ? "Please provide a valid URL" : ""}
                id="standard-error-helper-text"
                label="Google Drive URL"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                onChange={(event) => setUrl(event.target.value)}
                value={url}
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Paper>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default PostForm;
