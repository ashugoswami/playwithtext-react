import React, { useState } from "react";
import Textarea from "./Textarea";

const Home = () => {
  const [mode, setMode] = useState("light");

  const toggelmode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div>
      <Textarea />
    </div>
  );
};

export default Home;
