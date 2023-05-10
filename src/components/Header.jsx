import ThemeButton from "./headerComponents/ThemeButton";
import FontForm from "./headerComponents/FontForm";
import Logo from "./headerComponents/Logo";
import ThemeIcon from "./headerComponents/ThemeIcon";
import DropDown from "./headerComponents/DropDown";

const Header = () => {
  
  return (
    // Header Container
    <header className="flex w-full py-6 xs:py-8 relative sm:py-14 justify-between items-center">
      {/* Right Container & Logo */}
      <Logo />
      {/* Left Container */}
      <div className="flex items-center gap-2 sm:gap-5">
        <div className="flex w-[110px] justify-center xs:w-[150px] flex-col">
          <FontForm />
          {/* Font Selection DropDown Menu */}
          <DropDown />
        </div>
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
