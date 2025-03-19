import React, { useState, useEffect } from "react";

const TimeCounter = () => {
  const [timeTogether, setTimeTogether] = useState("");

  useEffect(() => {
    const calculateTime = () => {
      const initialDate = new Date(2022, 2, 18);
      const dateNow = new Date();

      const diffMs = dateNow - initialDate;

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setTimeTogether(`${days} dias, ${hours}h ${minutes}min ${seconds}s`);
    };

    const interval = setInterval(calculateTime, 1000);

    calculateTime();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-counter">
      <span>
        ⏳ Estamos juntos há:{" "}
        <span className="time-counter__time">{timeTogether}</span> ❤️
      </span>
    </div>
  );
};

export default TimeCounter;
