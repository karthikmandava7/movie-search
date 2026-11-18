import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/serviceConstants";

const VideoPreview = ({ movieId }) => {
  const [previewMve, setPreviewMve] = useState(null);
  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch now-playing movies");
      }
      const json = await response.json();
      const trailerData = json?.results
        ? json?.results.filter((item) => item?.type === "Trailer")
        : null;

      const finalObj = trailerData.length
        ? trailerData[trailerData.length - 1]
        : null;
      setPreviewMve(finalObj);
    } catch (error) {}
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  if (!previewMve?.key) return null;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/JFQcDFhNh4o?si=${previewMve?.key}&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPreview;
