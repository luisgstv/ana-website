import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kissGif from "../assets/images/kiss.gif";
import hugGif from "../assets/images/hug.gif";

const LoveHugs = () => {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState(null);

  const gifs = {
    hug: hugGif,
    kiss: kissGif,
  };

  const sendLove = (type) => {
    if (loading || gif) return;

    setLoading(type);
    setGif(null);

    setTimeout(() => {
      setLoading(false);
      setGif(gifs[type]);

      setTimeout(() => {
        setGif(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="love-hugs">
      <div className="love-hugs__buttons">
        <button
          className={`love-hugs__button ${loading === "hug" ? "loading" : ""}`}
          onClick={() => sendLove("hug")}
          disabled={loading || gif}
        >
          {loading === "hug" ? "Enviando Abraço..." : "Receber Abraço"}
          {loading === "hug" && <div className="love-hugs__progress"></div>}
        </button>

        <button
          className={`love-hugs__button ${loading === "kiss" ? "loading" : ""}`}
          onClick={() => sendLove("kiss")}
          disabled={loading || gif}
        >
          {loading === "kiss" ? "Enviando Beijo..." : "Receber Beijo"}
          {loading === "kiss" && <div className="love-hugs__progress"></div>}
        </button>
      </div>

      <AnimatePresence>
        {gif && (
          <motion.div
            className="love-hugs__gif"
            initial={{ opacity: 0, scale: 0.4, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img src={gif} alt="Love GIF" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveHugs;
