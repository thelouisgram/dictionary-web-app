import searchIcon from "../../assets/search.svg";

const SubmitButton = () => {
  return (
      <button
          title="Submit Search Word"
          className="flex items-center outline:none"
      >
          <img src={searchIcon} alt="search icon" />
      </button>
  )
}

export default SubmitButton
