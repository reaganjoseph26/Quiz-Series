actionBtn = document.querySelector(".actionBtn");
actionUl = document.querySelector(".actionUl");
actionOptions = [
  "Fast & Furious Saga",
  "Harry Potter",
  "The Lord of The Rings Trilogy",
  "The Hobbit Trilogy",
];

comedyBtn = document.querySelector(".comedyBtn");
comedyUl = document.querySelector(".comedyUl");
comedyOptions = ["Norbit", "White Chicks", "Mean Girls"];

thrillerBtn = document.querySelector(".thrillerBtn");
thrillerUl = document.querySelector(".thrillerUl");
thrillerOptions = ["The Gray Man"];

//When a theme is clicked on, t displayed the list accoring to array of options
spanList = (arr, selector) => {
  let ul = selector;

  if (ul.children.length === 0) {
    for (var i = 0; i < arr.length; i++) {
      let li = document.createElement("li");
      li.textContent = arr[i];
      li.style.fontSize = '26px'
      ul.append(li);
    }
  }

  if (ul.style.display === "block") {
    ul.style.display = "none";
    ul.classList === "";
  } else {
    ul.style.display = "block";
  }
};

actionBtn.addEventListener("click", function () {
  spanList(actionOptions, actionUl);
});
comedyBtn.addEventListener("click", function () {
  spanList(comedyOptions, comedyUl);
});
thrillerBtn.addEventListener("click", function () {
  spanList(thrillerOptions, thrillerUl);
});
