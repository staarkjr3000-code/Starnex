import bgVideo from "../assets/bg.mp4";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="video-bg"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}