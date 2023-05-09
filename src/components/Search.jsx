import { useDispatch, useSelector } from "react-redux";
import theme from "../style";
import searchIcon from "../assets/search.svg";
import { useState } from "react";
import { setSearchWord, setFormWord, reset } from "../store/stateSlice";

const Search = () => {
  // Destructured global state
  const { darkMode, formWord } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  const dispatch = useDispatch();
  // Local form focus state
  const [isFocused, setIsFocused] = useState(false);
  // Local State to check if form is empty or not when submitted
  const [isForm, setIsForm] = useState(true);
  // Form Focus function
  const handleFocus = () => {
    setIsFocused(true);
  };
  // Form Blur function
  const handleBlur = () => {
    if (!formWord) {
      setIsFocused(true);
    } else{
      setIsFocused(false);
    }
  };
  // Function handling change of input and setting it to the global state "formWord"
  const handleInputChange = (e) => {
    dispatch(setFormWord(e.target.value));
    setIsForm(true);
  };
  // Submit Form Function, and setting formWord to searchWord
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(setSearchWord(formWord));
    // Reset and display error message if form is empty
    if (!formWord) {
      setIsForm(false);
      dispatch(reset());
      setIsFocused(true);
    }
  };

  return (
    <div className="mb-6 sm:mb-10 flex flex-col gap-3">
      {/* Form */}
      <form
        // Submit eventListener
        onSubmit={submitForm}
        // Form focus eventListener
        onFocus={handleFocus}
        // Form blur eventListener
        onBlur={handleBlur}
        className={`w-full  px-4 xs:px-6 rounded-[10px] sm:rounded-[15px] ${
          mode.input
        } border-[1px] transition
        flex justify-between items-center ${!isForm && "border-strawBerry"} 
        ${isFocused ? "border-purple " : "border-transparent"}`}
      >
        {/* Input */}
        <input
          className={`outline-none bg-transparent py-3 xs:py-4 w-full font-bold text-[14px] xs:text-[20px] ${mode.textMain}
             ${mode.inputPlaceholder}`}
          placeholder="Search for any word..."
          // setting form value to global state "formWord"
          value={formWord}
          onChange={handleInputChange}
          type="text"
        />
        {/* Submit button */}
        <button
          title="Submit Search Word"
          className="flex items-center outline:none"
        >
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
      {/* Display error if form is submitted when empty */}
      {!isForm && (
        <p className="text-strawBerry text-[12px] xs:text-[16px] sm:text-[20px]">
          This form is required!
        </p>
      )}
    </div>
  );
};

export default Search;
