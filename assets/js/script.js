const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function zeroToLeft(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}
let initTimer;
let sec = 0;
let min = 0;
let hora = 0;

iniciar.addEventListener("click", () => {
  clearInterval(initTimer);
  initTimer = setInterval(() => {
    sec++;
    relogio.innerHTML = `${zeroToLeft(hora)}:${zeroToLeft(min)}:${zeroToLeft(
      sec
    )}`;

    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hora++;
    }
  }, 1000);
  relogio.classList.add("preto");
  iniciar.disabled = true;
});

pausar.addEventListener("click", () => {
  clearInterval(initTimer);
  relogio.classList.add("vermelho");
  relogio.classList.remove("preto");
  iniciar.disabled = false;
});

zerar.addEventListener("click", () => {
  sec = 0;
  min = 0;
  hora = 0;
  relogio.innerHTML = `${zeroToLeft(hora)}:${zeroToLeft(min)}:${zeroToLeft(
    sec
  )}`;
  relogio.classList.add("preto");
  clearInterval(initTimer);
});
