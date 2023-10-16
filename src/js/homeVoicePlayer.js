const voicePlayerContainers = document.querySelectorAll(
  ".voice-player-container"
);

const voices = [
  "../assets/voices/04 Memories of a Sound.mp3",
  "../assets/voices/04 Memories of a Sound.mp3",
  "../assets/voices/04 Memories of a Sound.mp3",
];

voices.forEach((voice, index) => {
  let playerBtn = document.createElement("button");
  let playerBtnIcon = document.createElement("img");

  playerBtnIcon.setAttribute("src", "../assets/icons/Play.svg");
  playerBtnIcon.setAttribute("alt", "play");

  playerBtn.classList.add(`play-btn-${index + 1}`);
  playerBtn.appendChild(playerBtnIcon);

  voicePlayerContainers[index].appendChild(playerBtn);

  const voicePlayer = WaveSurfer.create({
    container: `.voice-${index + 1}`,
    waveColor: "#fff",
    progressColor: "#D2AC67",
    barRadius: 3,
    height: 50,
    barWidth: 5,
    responsive: true,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: true,
  });
  voicePlayer.load(voice);

  playerBtn.addEventListener("click", function () {
    voicePlayer.playPause();
  });
});
