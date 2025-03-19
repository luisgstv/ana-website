import React, { useState } from "react";

const LoveCounter = () => {
  const [loveYouCounter, setLoveYouCounter] = useState(0);

  return (
    <div className="love-counter">
      <p className="love-counter__text">{`Te amo muito${" muito".repeat(
        loveYouCounter
      )}!`}</p>
      <div className="love-counter__buttons">
        <button
          className="love-counter__button"
          onClick={() => {
            setLoveYouCounter(loveYouCounter + 1);
          }}
        >
          Clique aqui!
        </button>
        <button
          className="love-counter__button"
          onClick={() => {
            setLoveYouCounter(0);
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default LoveCounter;
