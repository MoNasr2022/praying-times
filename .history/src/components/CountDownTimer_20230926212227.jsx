import moment from "moment/moment";
import { useEffect, useState } from "react";

export default function CountDownTimer({timings}) {

const [date, setDate] = useState("");

      useEffect(() => {
        const interval = setInterval(() => {
          setDate(moment().format("MMMM Do YYYY | h:mm:ss a"));
        }, 1000);
        return () => clearInterval(interval);
      }, [timings]);
    const setCount
  return
}
