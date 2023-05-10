import ThemeButton from "./headerComponents/ThemeButton";
import Logo from "./headerComponents/Logo";
import ThemeIcon from "./headerComponents/ThemeIcon";
import FontFormContainer from "./headerComponents/fontFormComponents/FontFormContainer";

const Header = () => {
  return (
    // Header Container
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
  );
};

export default Header;
