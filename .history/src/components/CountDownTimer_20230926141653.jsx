import moment from "moment";

export const setupCountdownTimer = (timings) => {
    const momentNow = moment();
    if (
        momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
        momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
    ) {
        timings.name = "Dhuhr"
    } else if (
        momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
        momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
    ) {
        timings.name = "Asr";
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Maghrib"], "hh:mm"))
    ) {
      timings.name = "Maghrib";
    } else if (
      momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
    ) {
      timings.name = "Dhuhr";
    } else {
      timings.name = "Dhuhr";
    }

    setNextPrayerIndex(prayerIndex);
}