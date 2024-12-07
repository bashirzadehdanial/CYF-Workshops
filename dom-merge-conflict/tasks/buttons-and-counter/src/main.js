export default function() {
  const main = document.createElement("main");
  main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
    `;

  const button = main.querySelector("#increment");
  const buttonDecrement = main.querySelector("#decrement");
  const counter = main.querySelector("#counter");
  buttonDecrement.addEventListener("click", () => {
    decrement(counter);
  });
  button.addEventListener("click", () => {
    increment(counter);
  });
  

   function decrement(node) {
    
    let current = node.textContent;
    
    node.textContent = Number(current) -1 ;
    
  }

  function increment(node) {
    
    let current = node.textContent;
    
    node.textContent = Number(current) + 1;
    
  }

    return main;
}
