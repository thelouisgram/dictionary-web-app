import { motion, AnimatePresence } from "framer-motion";
import theme from "../style";
import { useState, useEffect } from "react";
import { setFont, toggleDropDown } from "../store/stateSlice";
import { useDispatch, useSelector } from "react-redux";

const FontForm = () => {
  const dispatch = useDispatch();
  // Destructured global state
  const { darkMode, dropDown } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  // Fonts Array
  const fontArray = [
    { name: "Sans Serif", type: "font-SansSerif" },
    { name: "Serif", type: "font-Serif" },
    { name: "Mono", type: "font-Mono" },
  ];
  // Local font state
  const [fontFamily, setFontFamily] = useState({
    name: "Sans Serif",
    type: "font-SansSerif",
  });
  // Toggle Drop Down Function
  const handleDropDown = () => {
    dispatch(toggleDropDown(dropDown ? false : true));
  };

  // Re-render on change of font and update global font state
  useEffect(() => {
    dispatch(setFont(fontFamily));
  }, [dispatch, fontFamily]);


  return (
    <div
      title="Select Font Dropdown"
      onClick={handleDropDown}
      className="w-auto flex justify-end items-center  relative cursor-pointer"
    >
      <div
        className={`font-[700] text-[14px] xs:text-[16px] sm:text-[18px] mr-2 xs:mr-3 sm:mr-5
            ${mode.textMain}`}
      >
        {fontFamily.name}
      </div>
      {/* Expand more button */}
      <span className="material-symbols-outlined text-[16px] xs:text-[20px] text-purple">
        expand_more
      </span>
      {/* Font Selection Dropdown Conditional render*/}
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{ opacity: 0, x: 50}}
            animate={{ opacity: 1, x: 20}}
            exit={{ opacity: 0, x: 50}}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <div
              className={`${
                darkMode ? "dark-shadow" : "light-shadow"
              } absolute w-[150px] p-5 gap-3 h-auto rounded-[5px] flex flex-col justify-center
                  items-start top-5 right-[-10px] xs:right-0`}
            >
              {/* Mapping through the font array, displaying all font options */}
              {fontArray.map((item, index) => {
                return (
                  <p
                    className={` ${mode.textMain} w-full ${
                      fontFamily.type === item.type ? "text-purple" : ""
                    } cursor-pointer ${item.type} 
                  hover:text-purple font-[700] text-[14px] xs:text-[18px]`}
                    onClick={() => setFontFamily(item)}
                    key={index}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FontForm;
