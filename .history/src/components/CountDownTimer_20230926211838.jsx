import moment from "moment/moment";

export default function CountDownTimer() {
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
    console.log(afterMidnightDiff);
    const timeTillFajr = midnightDiff + afterMidnightDiff;
    remainingTime = moment.duration(timeTillFajr);
  }

  const durationTime = moment.duration(remainingTime);
  setRemainingTime(
    `${durationTime.hours()}:${durationTime.minutes()}:${durationTime.seconds()}`
  );
}
