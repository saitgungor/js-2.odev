// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var task = document.createTextNode(inputValue);
  var space = false;
  li.appendChild(task);
  if (inputValue.trim().length < 1) {
    $('#errorToast').toast('show');
  } else {
    document.getElementById("list").appendChild(li);
    $('#successToast').toast('show');
  }
  document.getElementById("task").value = "";
  save(li)
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(event) {
      event.target.parentElement.remove()
      remove(event.target.parentElement)
}
  }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle("checked");
  }
});

let liList = []
function save(item) {
  liList.push(item.innerText)
  localStorage.setItem("liList", JSON.stringify(liList))
}
