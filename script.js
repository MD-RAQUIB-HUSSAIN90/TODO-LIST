let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


// ADD FUNCTIONALITY
btn.addEventListener("click", function () {
  let li = document.createElement("li");
  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }
  else{
  li.textContent = input.value;
  li.classList.add("list-item");
  // CREATE DELETE BUTTON
  let deleteBtn = document.createElement("button");
      let clearBtn = document.createElement("button")
  deleteBtn.textContent = "Delete";
    clearBtn.textContent = "clear";
    
  deleteBtn.classList.add("delete");
  // APPEND DELETE BUTTON TO LI
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  // DELETE FUNCTIONALITY
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
    clearBtn.addEventListener("click", function () {
    li.style.textDecoration="line-through();
  });
  input.value = "";
}
});
