const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const sound = document.querySelector("audio");
const progressContainer = document.querySelector("#progress-container");
const progress = document.querySelector("#progress");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const playBtn = document.querySelector("#play");

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

// Previous Song
const prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};

// Next Song
const nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
sound.addEventListener("timeupdate", updateProgressBar);
