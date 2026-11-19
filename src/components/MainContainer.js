import { useSelector } from "react-redux";
import VideoPreview from "./VideoPreview";
import MainContainerTitle from "./MainContainerTitle";

const MainContainer = () => {
  const nowPlaying = useSelector((store) => store.nowPlaying);
  const preview = nowPlaying?.nowPlaying?.results.length
    ? nowPlaying?.nowPlaying?.results[0]
    : null;
  if (!preview) return;
  return (
    <div>
      <MainContainerTitle preview={preview}/>
      <VideoPreview movieId={preview?.id}/>
    </div>
  );
};

export default MainContainer;
