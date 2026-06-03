let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// ADD FUNCTIONALITY
btn.addEventListener("click", function () {
  let li = document.createElement("li");
  if (input.value === "") {
    alert("Please enter a task");
    return;
    
  }



  else {
    li.textContent = input.value;
    li.classList.add("list-item");
    // CREATE DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    // APPEND DELETE BUTTON TO LI
   
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    // DELETE FUNCTIONALITY
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
    input.value = "";
  }
});
