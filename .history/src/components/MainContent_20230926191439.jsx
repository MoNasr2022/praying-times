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
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: "",
  });
  const [selectedCity, setselectedCity] = useState("Fort Mill");
  const [date, setDate] = useState("");
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);

  const prayersArray = Object.keys(timings);

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
    
  }, [selectedCity]);

  useEffect(() => {
    countDownTimer();
    const interval = setInterval(() => {
      setDate(moment().format("MMMM Do YYYY | h:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  const countDownTimer = () => {
    const momentNow = moment();
    let prayerIndex;
    if (
      momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Maghrib"], "hh:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timings["Maghrib"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
    ) {
      prayerIndex = 4;
    } else {
      prayerIndex = 0;
    }

    setNextPrayerIndex(prayerIndex);

    // Let's find out the remaining time till the next pray
    const nextPray = prayersArray[prayerIndex];
    const nextPrayTime = timings[nextPray];
    const diffTime = moment(nextPrayTime, "hh:mm").diff(momentNow);

    const remainingTime = moment.duration(diffTime);
    

    if (remainingTime < 0) {
        const midnightDiff = moment("23:", "hh:mm").diff(momentNow);
        const afterMidnightDiff = moment(timings[nextPray], "hh:mm").diff(
          "00:00",
          "hh:mm"
        );
        console.log(afterMidnightDiff.hours())
    }
  };

  const handleCityChange = (e) => {
    e.preventDefault();
    setselectedCity(e.target.value);
  };

  return (
    <>
      {/* Top Row */}
      <section>
        <div className="top-section">
          <div>
            <h2>{date}</h2>
            <h1>{selectedCity}</h1>
          </div>
          <div>
            <h2> Time left till {prayersArray[nextPrayerIndex]} </h2>
            <h1> مكة المكرمة </h1>
          </div>
        </div>
      </section>
      <hr style={{ borderColor: "black", opacity: "1", marginTop: "40px" }} />
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
          <Prayer name={pray} time={time} key={pray} image={pray.image} />
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
