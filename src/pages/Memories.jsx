import React from "react";

import Memory from "../components/Memory";

import { memoriesArray } from "../assets/data/memoriesArray";

const Memories = () => {
  return (
    <main className="main">
      <h2>Nossas memórias!</h2>
      {memoriesArray.map((item, index) => {
        const reverse = index % 2 === 0 ? false : true;
        return <Memory key={index} {...item} reverse={reverse} />;
      })}
    </main>
  );
};

export default Memories;
