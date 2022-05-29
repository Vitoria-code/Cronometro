let hh = 0;
let mm = 0;
let ss = 0;

let cron;

iniciar = () => {
  cron = setInterval(() => {
    tempo();
  }, 1000);
};

pausar = () => {
  clearInterval(cron);
};

parar = () => {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

  document.getElementById("contagem").innerHTML = "00:00:00";
};

tempo = () => {
  ss++;

  if (ss == 60) {
    ss = 0;
    mm++;
  }
  if (mm == 60) {
    mm = 0;
    hh++;
  }

  let format =
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss);

  document.getElementById("contagem").innerHTML = format;
};
