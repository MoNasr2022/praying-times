import Prayer from "./Prayer";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import {cities} from "../data"
import { Divider } from "@mui/material";
import CountDownTimer from "./CountDownTimer";
import { images } from "../data";
import Loading from "./loader/Loading";

export default function MainContent() {
  const [loading, setLoading] =useState(true)
  const [timings, setTimings] = useState({
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: "",
  });
  const [selectedCity, setselectedCity] = useState("Marion,VA");
    const availableCities = cities
    
  const getTimings = async () => {
    
    const res = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=USA}`
    );
    const resPrayes = res.data.data;
    setTimings({
      Fajr: resPrayes.timings.Fajr,
      Dhuhr: resPrayes.timings.Dhuhr,
      Asr: resPrayes.timings.Asr,
      Maghrib: resPrayes.timings.Maghrib,
      Isha: resPrayes.timings.Isha,
    });
    setLoading(false)
  };
  useEffect(() => {
    setLoading(true);
    
    getTimings();
  }, [selectedCity]);

  const handleCityChange = (e) => {
    e.preventDefault();
    setselectedCity(e.target.value);
  };

  if (loading) {
    return <Loading />;
  } else
  return (
    <>
  {/* Top Row */}
  <section className="top-section">
  <CountDownTimer timings={timings} city={selectedCity} />
      </section>
      <Divider
      style={{ borderColor: "white", opacity: "0.1", margin: "40px", }}
      />
      {/* Prayers Cards */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "0 25px",
        }}
      >
        {Object.entries(timings).map(([pray, time]) => (
          <Prayer name={pray} time={time} key={pray} image={images[pray]} />
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
