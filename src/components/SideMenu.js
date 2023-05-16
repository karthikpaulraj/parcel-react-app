import React from "react";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return <div>SideMenu</div>;
};

export default SideMenu;
