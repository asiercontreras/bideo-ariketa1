let bideo = document.getElementById("vid");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let capture = document.getElementById("capture");
let lienzo = document.getElementById("izq");
let buffer = lienzo.getContext("2d");
let erlojua;
play.onclick = function () {
  bideo.play();
};

pause.onclick = () => {
  bideo.pause();
};

bideo.addEventListener("play", function () {
  erlojua = setInterval(function () {
    buffer.drawImage(bideo, 0, 0, 100, 50);
  }, 0);
});

bideo.addEventListener("pause", function () {
  clearInterval(erlojua);
});
bideo.addEventListener("endend", function () {
  clearInterval(erlojua);
});

capture.onclick = function () {
  // buffer.drawImage(bideo, 0, 0, 100, 50);
};
