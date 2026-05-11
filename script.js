function revealMessage() {
  const message = document.getElementById('message');
  const btn = document.querySelector('.reveal-btn');
  const next = document.getElementById('next');

  message.style.display = 'block';
  btn.style.display = 'none';

  if (next) {
    next.style.display = 'inline-block';
  }
}

const audio = document.getElementById('audio');

if (audio) {
  const playBtn = document.getElementById('play-btn');
  const progress = document.getElementById('progress');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + String(secs).padStart(2, '0');
  }

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  function seek(e) {
    const bar = e.currentTarget;
    const clickX = e.offsetX;
    const width = bar.offsetWidth;
    audio.currentTime = (clickX / width) * audio.duration;
  }
};