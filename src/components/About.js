import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/home");
  };
  return (
    <div>
      About
      <button onClick={handleNavigation}>Home</button>
    </div>
  );
};
