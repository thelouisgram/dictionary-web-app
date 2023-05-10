import theme from "../../../style";
import { toggleDropDown } from "../../../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";

const FontForm = () => {
  const dispatch = useDispatch();
  // Destructured global state
  const { darkMode, dropDown, font } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  // Toggle Drop Down Function
  const handleDropDown = () => {
    dispatch(toggleDropDown(dropDown ? false : true));
  };

  return (
    <div
      title="Select Font Dropdown"
      onClick={handleDropDown}
      className={`w-auto flex justify-end items-center cursor-pointer `}
    >
      <div
        className={`font-[700] text-[14px] xs:text-[16px] sm:text-[18px] mr-2 xs:mr-3 sm:mr-4
            ${mode.textMain}`}
      >
        {font.name}
      </div>
      {/* Expand more button */}
      <span
        className={`material-symbols-outlined text-[18px] xs:text-[20px] text-purple transition
      ${dropDown ? "rotate-180" : "rotate-0"}`}
      >
        expand_more
      </span>
      {/* Font Selection Dropdown Conditional render*/}
    </div>
  );
};

export default FontForm;
