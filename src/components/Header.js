import React from "react";

/* Plugin */
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

/* Component */
import SideMenu from "./SideMenu";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div>Header</div>
      <button onClick={toggleMenuHandler}>Toggle menu</button>
      <SideMenu />
    </>
  );
};

export default Header;
