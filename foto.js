// animasi scroll

function anime() {
  var animes = document.querySelectorAll(".anime");

  for (var i = 0; i < animes.length; i++) {
    var elementTop = animes[i].getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      animes[i].classList.add("active");
    } else {
      animes[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", anime);

const rootElement = document.querySelector(":root");
const audioIcon = document.querySelector(".audio-icon");
const song = document.querySelector("#song");
const audio = document.querySelector(".audio-icon i");
let isPlay = false;

function disableScrol() {
  scrolTop = window.pageYOffset || document.documentElement.scrollTop;
  scrolleft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrolTop, scrolleft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScrol() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("opened", "true");
  playAudio();
}

function playAudio() {
  song.volume = 0.3;
  audioIcon.style.display = "flex";
  song.play();
  isPlay = true;
}

audioIcon.onclick = function () {
  if (isPlay) {
    song.pause();
    audio.classList.remove("bi-disc");
    audio.classList.add("bi-pause-circle");
  } else {
    song.play();
    audio.classList.add("bi-disc");
    audio.classList.remove("bi-pause-circle");
  }

  isPlay = !isPlay;
};

// if (!localStorage.getItem("opened")) {
// }
disableScrol();
