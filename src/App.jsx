import { useDispatch, useSelector } from "react-redux";
import theme from "./style";
import Search from "./components/Search";
import Content from "./components/Content";
import { useEffect } from "react";
import { searchByWord } from "./store/stateAction";
import Header from "./components/Header";

const App = () => {
  // Destructured global state
  const { darkMode, font, searchWord } = useSelector((state) => state.app);
  //  Theme ternary
  const mode = darkMode ? theme.dark : theme.light; const dispatch = useDispatch();
   
  // Calling the API & re-rendering only when theres a change in searchWord
  useEffect(() => {
    if (searchWord) {
      dispatch(searchByWord(searchWord));
      // Return screen to the top on re-render
      window.scrollTo(0, 0);
    }
  }, [dispatch, searchWord]);

  // Call API and render "welcome" onload
  useEffect(()=>{
    dispatch(searchByWord("welcome"))
  },[dispatch])

  return (
    // Entire page
    <section
      className={`w-full h-[100dvh] transition ${font.type} ${mode.background} outline-none`}
    >
      {/* Container to hold automatic height outside the sm:fixed width */}
      <div className={`w-full h-auto transition pb-14 sm:pb-24 ${mode.background}`}>
        {/* Content Container; holding fixed width for large screens */}
        <div className={`w-full px-4 xs:px-6 sm:px-12 md:px-0 md:w-[737px] h-auto mx-auto `}>
          {/* Header Component */}
          <Header />
          {/* Search Bar Component */}
          <Search />
          {/* Content Component */}
          <Content />
        </div>
      </div>
    </section>
  );
};

export default App;