import { useSelector } from "react-redux";
import PhoneticsText from "./contentComponents/PhoneticsText";
import Word from "./contentComponents/Word";
import AudioButton from "./contentComponents/AudioButton";
import Meanings from "./contentComponents/Meanings";
import Source from "./contentComponents/Source";
import Error from "./contentComponents/Error";
import Loading from './contentComponents/Loading'
import { AnimatePresence, motion } from "framer-motion";

const Content = () => {
  // Destructured global state
  const { success, loading, error } = useSelector((state) => state.app);

  return (
    // Content Container
    <section className="w-full h-auto">
      {/* Conditional rendering of loading, content and error when true */}
      {loading ? <Loading /> : (
        success ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}>
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
            </motion.div>
          </AnimatePresence>
        ) : (error && <Error />)
      )}
    </section>
  );
};

export default Content;
