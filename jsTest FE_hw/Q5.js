const ul = document.querySelector("ul");

const input = document.querySelector("input");
function addItem() {
  const li = document.createElement("li");

  li.innerText = input.value;

  ul.appendChild(li);
}
