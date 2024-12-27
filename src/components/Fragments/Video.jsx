import { useState } from "react";

const Video = (props) => {
  const { videoId, getGenre, deleteSrc } = props;
  const [dataSrc, setDataSrc] = useState(videoId);

  

  // const handleBack = () => {
  //   setDataSrc(""); // Kosongkan nilai src untuk menghentikan video
  // };
  
  // progres sampe sini

  const src = 'https://www.youtube.com/embed/';
let removeUrl = videoId

  return (
    <iframe
      className="video-content"
      title="YouTube Video"
      src={`https://www.youtube.com/embed/${removeUrl}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      
    />
  );
};

export default Video;
