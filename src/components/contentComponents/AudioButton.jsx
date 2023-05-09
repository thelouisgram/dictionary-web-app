import { useSelector } from "react-redux";
import useAudioPlayer from "./useAudioPlayer";

const AudioButton = () => {
  // Destructured global state
  const { wordData } = useSelector((state) => state.app);
  // Selecting interested Object from API response Array
  const word = wordData[0];
  // Destructured useAudioPlayer()
  const { isPlaying, handleOnPlaying, handleOnPause } = useAudioPlayer();
  // Mapping and storing all audios into an array and setting empty audio to ""
  const audios = word.phonetics.map((item) => item.audio || "");
  // Filtering through the audios and removing ""
  const filterAudios = audios.filter((item) => item !== "");
  // Selecting the first audio
  const firstAudio = filterAudios.find((item) => item);
  // Play Audio Function
  const playAudio = () => {
    const audio = new Audio(firstAudio);
    // Play audio
    audio.play();
    // Audio eventListeners
    audio.addEventListener("playing", handleOnPlaying);
    audio.addEventListener("pause", handleOnPause);
  };

  return (
    // Audio Button container
    <div className="flex items-center w-[100px] sm:w-auto justify-end">
      {/* Audio Button */}
      {firstAudio ? (
        <button
          title="Play Audio Button"
          onClick={playAudio}
          className={`flex items-center p-[12px] flex-shrink-0 sm:p-4 rounded-full bg-purpleBg text-purple transition hover:bg-purple hover:text-white`}
        >
          {/* ternary to render audio icon based on isPlaying */}
          {isPlaying ? (
            <span className="material-symbols-outlined transition text-[20px] sm:text-[40px] ">
              volume_up
            </span>
          ) : (
            <span
              className="material-symbols-outlined
               transition text-[20px] sm:text-[40px] "
            >
              play_arrow
            </span>
          )}
        </button>
      ) : (
        // !firstAudio and this renders
        <h2 className="text-purple text-[16px] flex-shrink-0">No Audio</h2>
      )}
    </div>
  );
};

export default AudioButton;
