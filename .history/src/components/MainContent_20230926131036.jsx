

import Prayer from "./Prayer";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import moment from "moment/moment";
export default function MainContent() {
  const [timings, setTimings] = useState({
    Fajr: "06:04",
    Dhuhr: "13:16",
    Asr: "16:42",
    Maghrib: "19:18",
    Isha: "20:27",
  });

  const [selectedCity, setselectedCity] = useState("Fort Mill");
  const [date, setDate] = useState("");

  const availableCities = [
    { id: 1, name: "Fort Mill" },
    { id: 2, name: "Charlotte" },
    { id: 3, name: "Charleston" },
    { id: 4, name: "New York" },
    { id: 5, name: "Washington" },
    { id: 6, name: "Chicago" },
    { id: 7, name: "Los Angeles" },
    { id: 8, name: "San Francisco" },
    { id: 9, name: "Houston" },
  ];

  const getTimings = async () => {
    const res = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=USA&timestamp=${date}`
    );
    console.log(res);
    const resPrayes = res.data.data;
    setTimings({
      Fajr: resPrayes.timings.Fajr,
      Dhuhr: resPrayes.timings.Dhuhr,
      Asr: resPrayes.timings.Asr,
      Maghrib: resPrayes.timings.Maghrib,
      Isha: resPrayes.timings.Isha,
    });
  };
  useEffect(() => {
    getTimings();
  }, [date, selectedCity]);

  const handleCityChange = (e) => {
    e.preventDefault();
    setselectedCity(e.target.value);
    
    };
    const time = moment().format('MMMM Do YYYY, h:mm:ss a')
  return (
    <>
      {/* Top Row */}
      <section >
        <div className="top-section">
          <div>
            <h2>{time}</h2>
            <h1>{selectedCity}</h1>
          </div>
          <div>
            <h2> 4:20 | 9 2023 سبتمر </h2>
            <h1> مكة المكرمة </h1>
          </div>
        </div>
      </section>
      <hr
        style={{ borderColor: "black", opacity: "1", marginTop: "40px" }}
      />
      {/* Prayers Cards */}
      <section
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          padding: "0 25px",
        }}
      >
        {Object.entries(timings).map(([pray, time]) => (
          <Prayer name={pray} time={time} key={pray} />
        ))}
      </section>
      {/* Bottom Row */}
      <section className="bottom-section">
        <FormControl className="city-select">
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            age={""}
            value={selectedCity}
            label="Age"
            onChange={handleCityChange}
          >
            {availableCities.map((city) => (
              <MenuItem key={city.id} value={city.name}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
    </>
  );
}
