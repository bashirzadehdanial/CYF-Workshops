function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
// dfegfgsd
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  const header = document.createElement("header");
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p class='increment'>A simple counter. Press increment to increase the count by one.</p>
        <p class='decrement'>A simple counter. Press decrement to decrease the count by one.</p>
    `;
  body.appendChild(header);

  const decrementButton = document.createElement("button");
  decrementButton.id = "decrement";
  decrementButton.textContent = "Decrement";
  header.appendChild(decrementButton);

  const main = document.createElement("main");
  main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        
    `;
  body.appendChild(main);

  const buttonIncrement = body.querySelector("#increment");
  const buttonDecrement = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");

  buttonIncrement.addEventListener("click", () => {
    increment(counter);
  });

  buttonDecrement.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
