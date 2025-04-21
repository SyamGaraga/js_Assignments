let count = 0;

function increment() {
  let h1 = document.getElementById("counter");
  count += 1;
  h1.innerText = count;
}
function reset() {
  let h1 = document.getElementById("counter");
  count = 0;
  h1.innerText = count;
}

function decrement() {
  let h1 = document.getElementById("counter");
  count -= 1;
  h1.innerText = count;
}