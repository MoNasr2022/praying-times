import { Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Prayer from "./Prayer";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
export default function MainContent() {
  const [timings, setTimings] = useState({
    Fajr: "06:04",
    Dhuhr: "13:16",
    Asr: "16:42",
    Maghrib: "19:18",
    Isha: "20:27",
  });
  const [prayers, setPrayers] = useState([]);
  const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    
    const getTimings = async () => {
        const res = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=USA&timestamp=${date}`)
        console.log(',)
        setTimings(res.data.data.timings)
     }
    useEffect(() => {
        getTimings()
    }, [] )
    
    
    
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
      <Divider
        style={{ borderColor: "white", opacity: "0.1", marginTop: "40px" }}
      />
      {/* Prayers Cards */}
          <Stack className="middle-stack" direction="row">
              {Object.entries(timings).map(([pray, time], key) => (
                  <>
                  <Prayer name={pray} time={time} key={key}/>
                  </>
              ))}
      </Stack>
      {/* Bottom Row */}
      <Stack className="bottom-stack">
        <FormControl className="city-select">
          <InputLabel id="demo-simple-select-label">المدينة</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            age={""}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}></MenuItem>
            <MenuItem value={20}></MenuItem>
            <MenuItem value={30}></MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
