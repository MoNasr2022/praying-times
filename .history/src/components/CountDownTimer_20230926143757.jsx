import moment from "moment";
import { useState } from "react";

const = setCountdownTimer =(timings) {
    
    const [nextPrayerIndex, setNextPrayerIndex] = useState(2);

    const momentNow = moment();
    let prayerIndex = 0;
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
     momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
   ) {
     prayerIndex = 3;
   } else if (
     momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
     momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
   ) {
     prayerIndex = 4;
   } else {
     prayerIndex = 0;
   }
    return  setNextPrayerIndex(prayerIndex);
    
}