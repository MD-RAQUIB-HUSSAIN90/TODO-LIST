let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let dltBtn = document.querySelector("#deleteAll");

// ADD FUNCTIONALITY
btn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter a task before adding !!");
    return;
  }

  // CREATE LIST ITEMS
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = input.value;
  li.classList.add("list-item");
  li.prepend(span);

  // CREATE DELETE BUTTON
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");

  // CREATE "GOT" BUTTON
  let done = document.createElement("button");
  done.textContent = "Done";
  done.classList.add("Done");
  let div = document.createElement("div");
  div.classList.add("btn-box");
  li.append(div);

  // APPEND DELETE BUTTON TO LI
  div.appendChild(don);
  div.appendChild(deleteBtn);
  ul.appendChild(li);

  // DELETE FUNCTIONALITY
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // GOT ITEMS
  got.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
    span.style.color = "grey";
  });

  input.value = "";
  // CLEAR ALL ITEMS
  dltBtn.addEventListener("click", () => {
    span.remove();
    div.remove();
    li.remove();
  });
});
