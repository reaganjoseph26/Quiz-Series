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
  let showUl = ul.classList;
  showUl.toggle("on");
  if (ul.classList.contains("off")) {
    console.log('here')
    console.log(showUl)
    ul.style.display = "none"
    showUl.remove("off");
  } else {
    showUl.toggle("off");
    for (var i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        ul.append(li);
      }
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
