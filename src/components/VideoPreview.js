import { useSelector } from "react-redux";
import usePreviewMovie from "../hooks/usePreviewMovie";

const VideoPreview = ({ movieId }) => {
  usePreviewMovie(movieId);
  const previewMve = useSelector((store) => store?.nowPlaying?.previewMovie);
  if (!previewMve?.key) return null;
  //`https://www.youtube.com/embed/JFQcDFhNh4o?si=${previewMve?.key}&autoplay=1&mute=1`}
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${previewMve?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPreview;
