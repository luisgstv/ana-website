import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faTimes } from "@fortawesome/free-solid-svg-icons";
import { surpriseMessagesArray } from "../assets/data/surpriseMessagesArray.js";

const SurpriseBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const getRandomMessage = (prevMessage) => {
    let newMessage;
    do {
      newMessage =
        surpriseMessagesArray[
          Math.floor(Math.random() * surpriseMessagesArray.length)
        ];
    } while (newMessage === prevMessage);
    return newMessage;
  };

  const handleOpenBox = () => {
    if (!isOpen) {
      setMessage(getRandomMessage(message));
      setIsOpen(true);
    }
  };

  return (
    <div className="surprise-box">
      <motion.div
        className="surprise-box__button"
        onClick={handleOpenBox}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faGift} className="surprise-box__icon" />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="surprise-box__popup"
            initial={{ opacity: 0, scale: 0.2, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: -50 }}
            exit={{ opacity: 0, scale: 0.2, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button
              className="surprise-box__close"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p className="surprise-box__message">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurpriseBox;
