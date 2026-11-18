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
      <p className="w-1/4 font-light text-left m-2">{preview?.overview}</p>
      <div>
        <button className="m-2 py-1 px-6 bg-slate-300 rounded text-sm">{"▶ Play"}</button>
        <button className="m-2 py-1 px-6 bg-slate-300 rounded text-sm">{"ℹ More"}</button>
      </div>
      {/* <VideoPreview movieId={preview?.id}/> */}
    </div>
  );
};

export default MainContainer;
