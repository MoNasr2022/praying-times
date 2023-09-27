/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import moment from "moment/moment";
import { useEffect, useState } from "react";

export default function CountDownTimer({ timings, city }) {
  const [date, setDate] = useState("");
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState("");
  const prayersArray = Object.keys(timings);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format("MMMM Do YYYY | h:mm:ss a"));
      setCountDownTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  const setCountDownTimer = () => {
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

    let remainingTime = diffTime;

    if (remainingTime < 0) {
      const midnightDiff = moment("23:58:59", "hh:mm:ss").diff(momentNow);
      const afterMidnightDiff = moment(nextPrayTime, "hh:mm:ss").diff(
        moment("00:00:00", "hh:mm:ss")
      );
      const timeTillFajr = midnightDiff + afterMidnightDiff;
      remainingTime = moment.duration(timeTillFajr);
    }

    const durationTime = moment.duration(remainingTime);
    setRemainingTime(
      `${durationTime.hours()}:${durationTime.minutes()}:${durationTime.seconds()}`
    );
  };

  return (
    <div  className="Grid"
    >
      <div style={{flex}}
      >
        <div>
          <h2>{date}</h2>
          <h1>{city}</h1>
        </div>
      </div>

      <div 
      >
        <div>
          <h2>Time left till {prayersArray[nextPrayerIndex]}</h2>
          <h1>{remainingTime}</h1>
        </div>
      </div>
    </div>
  );
}
