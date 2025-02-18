import { useState, useEffect, useCallback } from "react";
import "./css/CountdownTimer.css";

const CountdownTimer = ({ eventDate }) => {
  console.log("Event Date:", eventDate);

  const getTimeLeft = useCallback(() => {
    if (!eventDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const now = new Date();
    const difference = eventDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [eventDate]);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    console.log("Timer Updated:", timeLeft);

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimeLeft, timeLeft]); // Include `timeLeft` to satisfy ESLint

  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="time-box">
          <span className="time">{value}</span>
          <span className="label">{unit.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
