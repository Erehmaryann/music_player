const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const sound = document.querySelector("audio");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const playBtn = document.querySelector("#play");

// Songs
const songs = [
  {
    name: "The A Team",
    artist: "Ed Sheeran",
    image: "img/Ed-Sheeran-team.jpg",
    audio: "music/Ed-Sheeran-team.mp3",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    image: "img/shape-of-you.jpeg",
    audio: "music/shape-of-you.mp3",
  },
  {
    name: "Perfect",
    artist: "Ed Sheeran",
    image: "img/perfect.jpg",
    audio: "music/perfect.mp3",
  },
  {
    name: "Galway Girl",
    artist: "Ed Sheeran",
    image: "img/galway.png",
    audio: "music/galway.mp3",
  },
];

// Check if song is playing
let isPlaying = false;

// Play
const playSong = () => {
  isPlaying = true;
  sound.play();
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
};

// Pause
const pauseSong = () => {
  isPlaying = false;
  sound.pause();
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
};

// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
