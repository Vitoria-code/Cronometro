let hh = 0;
let mm = 0;
let ss = 0;

let cron;

function iniciar() {
  cron = setInterval(() => {
    tempo();
  }, 1000);
}

function pausar() {
  clearInterval(cron);
}

function parar() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

  document.getElementById("contagem").innerText = "00:00:00";
}

function tempo() {
  ss++;
  if (ss == 60) {
    ss = 0;
    mm++;
  }
  if (mm == 60) {
    mm = 0;
    hh++;
  }

  let formato =
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss);
  document.getElementById("contagem").innerText = formato;
}
