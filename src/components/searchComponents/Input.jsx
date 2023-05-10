import { useDispatch, useSelector } from "react-redux";
import theme from "../../style";
import { setFormWord } from "../../store/stateSlice";

const Input = () => {
  // Destructured global state
  const { darkMode, formWord } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light;
  const dispatch = useDispatch();
  // Function handling change of input and setting it to the global state "formWord"
  const handleInputChange = (e) => {
    dispatch(setFormWord(e.target.value));
  };

  return (
    <>
      <input
        className={`outline-none bg-transparent py-3 xs:py-4 w-full font-bold text-[14px] xs:text-[20px] ${mode.textMain}
             ${mode.inputPlaceholder}`}
        placeholder="Search for any word..."
        // setting form value to global state "formWord"
        value={formWord}
        onChange={handleInputChange}
        type="text"
      />
    </>
  );
};

export default Input;
