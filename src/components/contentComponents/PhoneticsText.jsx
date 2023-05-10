import usePhoneticsText from "./phoneticsComponents/usePhoneticsText";

const PhoneticsText = () => {
  const phoneticsText = usePhoneticsText()

  return (
    // Render PhoneticsTexts
    <p className={`text-purple text-[18px] sm:text-[24px] mb-8 sm:mb-10`}>{phoneticsText}</p>
  );
};

export default PhoneticsText;
