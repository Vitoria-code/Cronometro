let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

inputValor = () => input.value.length;

criarTarefa = () => {
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  alterarFundo = () => {
    li.classList.toggle("done");
  };

  li.addEventListener("click", alterarFundo);

  let dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);

  deleteListItem = () => {
    li.classList.add("delete");
  };
  dBtn.addEventListener("click", deleteListItem);
};

addTarefaMouse = () => {
  if (inputValor() > 0) {
    criarTarefa();
  }
};
button.addEventListener("click", addTarefaMouse);

addTarefaTeclado = () => {
  if (inputValor() > 0 && event.which === 13) {
    criarTarefa();
  }
};
input.addEventListener("keypress", addTarefaTeclado);
