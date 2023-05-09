import { useSelector } from "react-redux";
import SubMeaning from "./meaningsComponents/SubMeaning";
import MainMeaning from "./meaningsComponents/MainMeaning";

const Meanings = () => {
  // Destructured global state
  const { wordData } = useSelector((state) => state.app);
  // Selecting interested Object from API response Array
  const word = wordData[0];
  // Mapping through meanings, setting meanings to an array and setting empty meanings to ""
  const meanings = word.meanings.map((item) => (item.partOfSpeech ? item : ""));
  // Removing empty meanings from array
  const newMeanings = meanings.filter((item) => item !== "");
  // Mapping through meanings
  const meaning = newMeanings.map((item, index) => {
    // Mapping through each meaning
    const subMeaning = item.definitions.map((item, index) => {
      // Returning subMeaning
      return <SubMeaning key={index} item={item} />;
    });
    // Returning meaning
    return <MainMeaning key={index} item={item} subMeaning={subMeaning} />;
  });

  // Render Meaning
  return <div className="flex flex-col gap-5 xs:gap-8 sm:gap-12 mb-12">{meaning}</div>
};

export default Meanings;
