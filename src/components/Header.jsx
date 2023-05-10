import ThemeButton from "./headerComponents/ThemeButton";
import Logo from "./headerComponents/Logo";
import ThemeIcon from "./headerComponents/ThemeIcon";
import FontFormContainer from "./headerComponents/fontFormComponents/FontFormContainer";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  return (
    // Header Container
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ ease: "easeInOut", duration: 2.4 }}
      >
        <header className="flex w-full py-6 xs:py-8 relative sm:py-14 justify-between items-center">
          {/* Right Container & Logo */}
          <Logo />
          {/* Left Container */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Font form and selection Dropdown menu container */}
            <FontFormContainer />
            {/* Barricade Div */}
            <div className={`h-[30px] w-[1px] bg-[#e9e9e9]`} />
            {/* Toggle Theme Container */}
            <ThemeButton />
            {/* Theme icon */}
            <ThemeIcon />
          </div>
        </header>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
