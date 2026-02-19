import clickSound from "../assets/click.mp3";

const audio = new Audio(clickSound);

audio.volume = 0.5;

export function playClick() {
  audio.currentTime = 0;
  audio.play();
}