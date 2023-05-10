import moon from "../../assets/moon.svg";
import darkMoon from "../../assets/darkMoon.svg";
import { useSelector } from "react-redux";

const ThemeIcon = () => {
    // Destructured global state
    const { darkMode } = useSelector((state) => state.app);

  return (
    <div>
      {darkMode ? (
          <img src={darkMoon} alt="moon" className='w-[20px] xs-[26px]' />
        ) : (
          <img src={moon} alt="moon"  className='w-[20px] xs-[26px]'/>
        )}
    </div>
  )
}

export default ThemeIcon
