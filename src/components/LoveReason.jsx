import React, { useState } from "react";
import { motion } from "framer-motion";
import { reasonsArray } from "../assets/data/reasonsArray";

const LoveReason = () => {
  const getRandomReason = () =>
    reasonsArray[Math.floor(Math.random() * reasonsArray.length)];

  const [reason, setReason] = useState(getRandomReason());

  const handleNewReason = () => {
    let newReason;
    do {
      newReason = getRandomReason();
    } while (newReason === reason);

    setReason(newReason);
  };

  return (
    <motion.div
      className="love-reason"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>💖 {reason}</p>
      <button className="love-reason__button" onClick={handleNewReason}>
        💕 Mostrar Outro 💕
      </button>
    </motion.div>
  );
};

export default LoveReason;
