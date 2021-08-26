// Select all the elements in the HTML page
// and assign them to a variable
const image = document.querySelector(".img-container img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const sound = document.querySelector("audio");
const progressContainer = document.querySelector("#progress-container");
const progress = document.querySelector("#progress");
const currentTimeEl = document.querySelector("#current-time");
const durationEl = document.querySelector("#duration");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const playBtn = document.querySelector("#play");
const volume_slider = document.querySelector(".volume_slider");

const playlistIcon = document.querySelector(".playlist-icon");
const musicList = document.querySelector(".list-border");
const playlistImage = document.querySelector("#list-img");
const playlistTitle = document.querySelector("#first-paragraph");
const playlistDesc = document.querySelector("#second-paragraph");

// Check if song is playing
let isPlaying = false;

// Current Song
let songIndex = 0;

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

// Update Progress Bar and Time
const updateProgressBar = (e) => {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    // If seconds are less than 10, add a zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    // Delay switching duration to avoid flicker and NaN
    if (seconds) {
      durationEl.textContent = `${minutes}:${seconds}`;
    }
    // Calculate display for current time
    const minutes2 = Math.floor(currentTime / 60);
    let seconds2 = Math.floor(currentTime % 60);
    // add leading zero if seconds < 10
    if (seconds2 < 10) {
      seconds2 = `0${seconds2}`;
    }
    // Delay switching current time to avoid flicker and NaN
    if (seconds2) {
      currentTimeEl.textContent = `${minutes2}:${seconds2}`;
    }
  }
};

// Set progress bar and time
const setProgressBar = (e) => {
  const width = e.srcElement.clientWidth;
  const clickX = e.offsetX;
  const { duration } = sound || {};
  sound.currentTime = (clickX / width) * duration;
};

//Set volume
const setVolume = () => {
  // Set the volume according to the
  // percentage of the volume slider set
  sound.volume = volume_slider.value / 100;
};

// loop through songs array
songs.map((song) => {
  console.log(song);
});

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
// to move to the next song
sound.addEventListener("ended", nextSong);
// to update the progress bar
sound.addEventListener("timeupdate", updateProgressBar);
// to set the progress bar on click
progressContainer.addEventListener("click", setProgressBar);
// to set the volume on click
volume_slider.addEventListener("change", setVolume);
// Play, loop or Pause keyboard event
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    isPlaying ? pauseSong() : playSong();
  } else if (e.keyCode === 39) {
    nextSong();
  } else if (e.keyCode === 37) {
    prevSong();
  }
});

playlistIcon.addEventListener("click", () => {
  // show and hide musiclist
  if (musicList.style.display === "none") {
    musicList.style.display = "block";
  } else {
    musicList.style.display = "none";
  }
});
