let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let child = document.querySelector(".child");

// ADD FUNCTIONALITY
btn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = input.value;
  li.classList.add("list-item");
  li.prepend(span);
  // CREATE DELETE BUTTON

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  let got = document.createElement("button");
  got.textContent = "Got";
  got.classList.add("got");
  let div = document.createElement("div");
  div.classList.add("btn-box");
  li.append(div);

  // APPEND DELETE BUTTON TO LI
  div.appendChild(got);
  div.appendChild(deleteBtn);

  ul.appendChild(li);

  // DELETE FUNCTIONALITY

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  got.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
    span.style.color = "grey";
  });

  input.value = "";
});
