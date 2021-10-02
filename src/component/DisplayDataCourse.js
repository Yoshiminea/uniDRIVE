import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import "./DisplayData.module.css";
import { makeStyles } from "@mui/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { slicesActions } from "../store/slices";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  link: {
    color: "blue",
    textDecoration: "underline",
  },
});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(major, khulliyya, link1, link2, link3) {
  return { major, khulliyya, link1, link2, link3 };
}
const rows = [
  {
    id: "1",
    major: "Mechatronics",
    khulliyya: "Engineering",
    course: "Dynamics",
    link1:
      "https://drive.google.com/drive/folders/1qdC95ZZgAqbYH8f3H9lS2NrkcCPgwRK0?usp=sharing",
  },
  {
    id: "2",
    major: "Business Administration",
    khulliyya: "Economics",
    course: "Marketing",
    link1:
      "https://drive.google.com/drive/folders/1qdC95ZZgAqbYH8f3H9lS2NrkcCPgwRK0?usp=sharing",
  },
  {
    id: "3",
    major: "Civil",
    khulliyya: "Engineering",
    course: "Structure Analysis ",
    link1:
      "https://drive.google.com/drive/folders/1qdC95ZZgAqbYH8f3H9lS2NrkcCPgwRK0?usp=sharing",
  },
  {
    id: "4",
    major: "Civil",
    khulliyya: "Engineering",
    course: " Material Science two",
    link1:
      "https://drive.google.com/drive/folders/1qdC95ZZgAqbYH8f3H9lS2NrkcCPgwRK0?usp=sharing",
  },
];

export default function CustomizedTables({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(slicesActions.setSearchMajor(false));
  // let data = useSelector((state) => state.data.data);
  // console.log("data:", data);
  // const dispatch = useDispatch();
  // dispatch(slicesActions.setShowSearchBar(true));
  // // data.sort(function (a, b) {
  // //   return a.khulliyya.localeCompare(b.khulliyya);
  // // });
  // let newData = [...data];
  // newData.sort(function (a, b) {
  //   console.log("b.khulliyya:", b.khulliyya);
  //   console.log("a.khulliyya:", a.khulliyya);
  //   if (a.khulliyya.toLowerCase() < b.khulliyya.toLowerCase()) {
  //     return -1;
  //   }
  //   if (a.khulliyya.toLowerCase() > b.khulliyya.toLowerCase()) {
  //     return 1;
  //   }
  //   return 0;
  // });

  // const dispatch = useDispatch();
  /* fetch data */
  // const getData = async () => {
  //   let promise;
  //   try {
  //     promise = await fetch(
  //       "https://unidrive-e6ec7-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
  //     );

  //     if (!promise.ok) {
  //       throw new Error("Encountered error");
  //     }
  //   } catch (error) {
  //     console.log("error:", error);
  //   }
  //   const promiseData = await promise.json();
  //   console.log("promiseData:", promiseData);

  //   const items = [];
  //   for (const key in promiseData) {
  //     console.log("key:", key);

  //     console.log("promiseData[key].course:", promiseData[key].course);
  //     items.push({
  //       id: key,
  //       khulliyya: promiseData[key].khulliyya,
  //       major: promiseData[key].major,
  //       course: promiseData[key].course,
  //       url: promiseData[key].url,
  //     });
  //   }
  //   items.forEach((item) => dispatch(slicesActions.setData(item)));

  //   console.log("items:", items);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Course</StyledTableCell>
              {/* <StyledTableCell>Major</StyledTableCell> */}
              <StyledTableCell align="center">Link</StyledTableCell>
              {/* <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="left">{row.course}</StyledTableCell>
                {/* <StyledTableCell component="th" scope="row">
                  {row.major}
                </StyledTableCell> */}
                <StyledTableCell align="center">
                  {/* <a href={row.link1}></a> */}
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CheckCircleOutlineIcon />}
                    // href={row.link1}
                  >
                    GET
                  </Button>
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.link2}</StyledTableCell>
                <StyledTableCell align="right">{row.link3}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
