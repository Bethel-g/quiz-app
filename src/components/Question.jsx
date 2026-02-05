import { useEffect } from "react";
import icons from "../icons/icons"; // adjust path if needed


function Question({ data, selected, onSelect }) {
  const amharicLetters = ["ሀ", "ለ", "ሐ", "መ"];


useEffect(() => {
  const exitFs = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  document.addEventListener("fullscreenchange", exitFs);
  return () => document.removeEventListener("fullscreenchange", exitFs);
}, []);


  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px"
      }}
    >
      {/* VIDEO SECTION */}
{data.type === "video" && (
  <div
    style={{
      background: "#000",
      borderRadius: "16px",
      overflow: "hidden",
      marginBottom: "25px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    }}
  >
{/* <video
  key={data.video}
  width="100%"
  controls
  autoPlay

  playsInline
  controlsList="nofullscreen nodownload noremoteplayback novolume"
  disablePictureInPicture
> */}
  

<video
  key={data.video}
  width="100%"
  controls
  muted
  playsInline
  disablePictureInPicture
  controlsList="novolume nofullscreen nodownload noremoteplayback"
  volume={0}
  onVolumeChange={e => {
    e.target.muted = true;
    e.target.volume = 0;
  }}
    onPlay={e => {
    e.target.muted = true;
    e.target.volume = 0;
  }}
>


      <source src={data.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)}


      {/* QUESTION CARD */}
      
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
        }}
      >
      <h2
  style={{
    marginBottom: "25px",
    color: "#1e3c72",
    lineHeight: "1.4",
    fontSize: "26px"
  }}
>
  {data.number}
  {data.question}
</h2>

{data.type === "image" && (
  <img
    src={icons[data.icon]} // use the icons object with the key
    alt="question"
    style={{
      width: "100%",
      borderRadius: "12px",
      marginBottom: "20px"
    }}
    loading="lazy"
  />
)}


        {/* OPTIONS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "15px"
          }}
        >
          {data.options.map((opt, index) => {
            const isSelected = selected === index;

            return (
              <button
                key={index}
                onClick={() => onSelect(index)}
                style={{
                  padding: "18px 22px",
                  fontSize: "20px",
                  textAlign: "left",
                  borderRadius: "12px",
                  border: isSelected ? "3px solid #1e3c72" : "2px solid #ddd",
                  backgroundColor: isSelected ? "#e6f0ff" : "#f9f9f9",
                  color: "#333",
                  cursor: "pointer",
                  transition: "0.25s",
                  fontWeight: isSelected ? "700" : "normal",
                  display: "flex",
                  alignItems: "center"
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundColor = "#eef4ff";
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundColor = isSelected
                    ? "#e6f0ff"
                    : "#f9f9f9";
                }}
              >
                {/* AMHARIC LABEL */}
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginRight: "16px",
                    color: "#1e3c72",
                    minWidth: "40px"
                  }}
                >
                  {amharicLetters[index]}.
                </span>

                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;
