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
  {
    name: "Electric Chill Machine",
    artist: "Jacinto",
    image: "img/ryanne-1.jpg",
    audio: "music/ryanne-1.mp3",
  },
  {
    name: "Seven Nation Army (Remix)",
    artist: "Jacinto",
    image: "img/ryanne-2.jpg",
    audio: "music/ryanne-2.mp3",
  },
  {
    name: "Goodnight,Disco Queen",
    artist: "Jacinto",
    image: "img/ryanne-3.jpg",
    audio: "music/ryanne-3.mp3",
  },
  {
    name: "Front Row(Remix)",
    artist: "Metric/Jacinto",
    image: "img/metric-1.jpg",
    audio: "music/metric-1.mp3",
  },
  {
    name: "Beauty Sings",
    artist: "Tatiana Manaois",
    image: "img/tatiana-2.jpg",
    audio: "music/beauty-sings.mp3",
  },
  {
    name: "Like you",
    artist: "Tatiana Manaois",
    image: "img/like-you.jpg",
    audio: "music/like-you.mp3",
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

// Current Song
let songIndex = 0;

// Update DOM
const loadSong = (song) => {
  title.textContent = song.name;
  artist.textContent = song.artist;
  image.setAttribute("src", song.image);
  sound.setAttribute("src", song.audio);
};

// On load -Select First Song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
