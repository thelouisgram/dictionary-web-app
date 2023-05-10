import { useSelector } from "react-redux";
import PhoneticsText from "./contentComponents/PhoneticsText";
import Word from "./contentComponents/Word";
import AudioButton from "./contentComponents/AudioButton";
import Meanings from "./contentComponents/Meanings";
import Source from "./contentComponents/Source";
import Error from "./contentComponents/Error";
import Loading from './contentComponents/Loading'

const Content = () => {
  // Destructured global state
  const { success, loading, error } = useSelector((state) => state.app);

  return (
    // Content Container
    <section className="w-full h-auto">
      {/* Conditional rendering of loading, content and error when true */}
      {loading ? <Loading /> : (
        success ? (
          <div>
            <div className="flex justify-between items-center">
              {/* Searched Word */}
              <Word />
              {/* Play Audio Button */}
              <AudioButton />
            </div>
            {/* Phonetics of word */}
            <PhoneticsText />
            {/* Meanings of word */}
            <Meanings />
            {/* Source of information */}
            <Source />
          </div>
        ) : (error && <Error />)
      )}
    </section>
  );
};

export default Content;
