
import { useState, useEffect } from "react";

export default function useTimer() {
  const [hour, setHour] = useState(24);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else {
        if (minute > 0) {
          setMinute(minute - 1);
          setSecond(59);
        } else {
          if (hour > 0) {
            setHour(hour - 1);
            setMinute(59);
            setSecond(59);
          } else {
            clearInterval(timer);
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hour, minute, second]);

  const formatTime = (unit) => {
    return `0${unit}`.slice(-2);
  };

  return {
    hour,
    minute,
    second,
    formatTime
  };
}
