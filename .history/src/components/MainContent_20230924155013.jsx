import { Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Prayer from "./Prayer";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import axios from "axios";
import "../App.css";
export default function MainContent() {
    const [prayers, setPrayers] = useState([]);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");
    


  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      {/* Top Row */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2> 4:20 | 9 2023 سبتمر </h2>
            <h1> مكة المكرمة </h1>
          </div>
        </Grid>
        <Grid xs={6}>
          <div>
            <h2> 4:20 | 9 2023 سبتمر </h2>
            <h1> مكة المكرمة </h1>
          </div>
        </Grid>
      </Grid>
      <Divider style={{ borderColor: "white", opacity: "0.1",marginTop:"40px" }} />
      {/* Prayers Cards */}
      <Stack className="middle-stack" direction="row">
        <Prayer name="Fajr" time="4:20" />
        <Prayer name="Dhur" time="1:20" />
        <Prayer name="Aser" time="4:54" />
        <Prayer name="Maghrib" time="7:20" />
        <Prayer name="Isha" time="8:44" />
      </Stack>
      {/* Bottom Row */}
      <Stack className="bottom-stack"  >
        <FormControl className="city-select">
          <InputLabel id="demo-simple-select-label">المدينة</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            age={""}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
