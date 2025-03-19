import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SurpriseBox from "./SurpriseBox";
import LoveHugs from "./LoveHugs";
import LoveReason from "./LoveReason";

const components = {
  surprise: <SurpriseBox />,
  hugs: <LoveHugs />,
  reason: <LoveReason />,
};

const LoveMenu = () => {
  const [activeComponent, setActiveComponent] = useState("surprise");

  const menuItems = [
    { key: "surprise", label: "Caixinha Surpresa" },
    { key: "hugs", label: "Beijos & Abraços" },
    { key: "reason", label: "Coisas que Amo em Você" },
  ];

  return (
    <div className="love-menu">
      <h2>Escolhe um!</h2>
      <div className="love-menu__buttons">
        {menuItems.map((item) => (
          <button
            key={item.key}
            className={`love-menu__button ${
              activeComponent === item.key ? "active" : ""
            }`}
            onClick={() => setActiveComponent(item.key)}
          >
            <span style={{ fontFamily: '"Montserrat", sans-serif' }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="love-menu__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {components[activeComponent]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveMenu;
