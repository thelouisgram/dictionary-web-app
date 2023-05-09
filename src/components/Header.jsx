import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import darkMoon from "../assets/darkMoon.svg";
import { toggleTheme, setFavTheme } from "../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FontForm from "./FontForm";

const Header = () => {
  const dispatch = useDispatch();
  // Local preferred theme state
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  // Setting theme on change of preferred theme
  useEffect(() => {
    setPrefersDarkMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    // Setting local theme state to global
    dispatch(setFavTheme(prefersDarkMode));
  }, [dispatch, prefersDarkMode]);
  // Destructured global state
  const { darkMode } = useSelector((state) => state.app);

  // Toggle Theme Function
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    // Header Container
    <header className="flex w-full py-6 xs:py-8 sm:py-14 justify-between items-center">
      {/* Right Container */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="h-[30px] xs:h-[36px] sm:h-[40px]"
        />
      </div>
      {/* Left Container */}
      <div className="flex items-center gap-2 sm:gap-5">
        {/* Font Selection Form */}
        <FontForm />
        {/* Barricade Div */}
        <div className={`h-[30px] w-[1px] bg-[#e9e9e9]`} />
        {/* Toggle Theme Container */}
        <div className="flex items-center">
        <label title="Toggle Theme" className="switch ">
          <input checked={darkMode} onChange={handleTheme} type="checkbox" />
          <span className="slider round"></span>
        </label>
        </div>
        {/* Theme icon */}
        {darkMode ? (
          <img src={darkMoon} alt="moon" className='w-[20px] xs-[26px]' />
        ) : (
          <img src={moon} alt="moon"  className='w-[20px] xs-[26px]'/>
        )}
      </div>
    </header>
  );
};

export default Header;
