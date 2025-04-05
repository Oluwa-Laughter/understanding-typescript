let age;
const btn = document.querySelector("button")!;

function add(a: number, b: number) {
  if (a + b > 0) return a + b;
  return;
}

function clickHandler(message: string) {
  let num = 0;
  console.log("clicked " + message);
}

// comment
if (btn) {
  btn.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
