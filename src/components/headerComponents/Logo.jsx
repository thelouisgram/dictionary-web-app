import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
      <div className="h-[30px] xs:h-[36px] sm:h-[40px]">
          <img
              src={logo}
              alt="Logo"
              className="h-full w-full"
          />
      </div>
  )
}

export default Logo
