const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
  empty.addEventListener("dragenter", dragEnter);
}

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function dragEnd() {
  fill.classList.remove("enter");
  fill.classList.remove("leave");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add("enter");
}

function dragLeave(e) {
  e.target.classList.remove("enter");
  fill.classList.add("leave")
}

function dragDrop(e) {

  if (e.target.id !== "hola") {
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  empties.forEach( element => {
    element.classList.remove("enter");
  })

}