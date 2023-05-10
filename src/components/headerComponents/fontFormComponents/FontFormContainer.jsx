import DropDown from "./DropDown";
import { useRef, useEffect } from "react";
import { toggleDropDown } from "../../../store/stateSlice";
import { useDispatch } from "react-redux";
import FontForm from "./FontForm";

const FontFormContainer = () => {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  // function to handle clicks outside of dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      dispatch(toggleDropDown(false));
    }
  };
  useEffect(() => {
    // add event listener for clicks outside of dropdown
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // remove event listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div
      ref={dropdownRef}
      className="flex w-[110px] justify-center xs:w-[150px] flex-col"
    >
      {/* Font Form */}
      <FontForm />
      {/* Font Selection DropDown Menu */}
      <DropDown />
    </div>
  );
};

export default FontFormContainer;
