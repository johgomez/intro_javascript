const inputColor = document.querySelector("#color");
const btnCambiarColor = document.querySelector("#cambiar_color");

let x = 1;
let z = 10;
console.log(x + z);

btnCambiarColor.addEventListener("click", () => {
  let color = inputColor.value;

  if (color === "") {
    alert("Debes escribir un valor para el color");
  } else {
    cambiarColorFondo(color);
  }
});

function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color;
}