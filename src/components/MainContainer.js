import { useSelector } from "react-redux";
import VideoPreview from "./VideoPreview";

const MainContainer = () => {
  const nowPlaying = useSelector((store) => store.nowPlaying);
  const preview = nowPlaying?.nowPlaying?.results.length
    ? nowPlaying?.nowPlaying?.results[0]
    : null;
  if (!preview) return;
  return (
    <div>
      <h1 className="text-xl font-bold">{preview?.title}</h1>
      <p className="w-1/4 font-light">{preview?.overview}</p>
      <VideoPreview movieId={preview?.id}/>
    </div>
  );
};

export default MainContainer;
