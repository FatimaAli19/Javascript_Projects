const InputText = document.getElementById("input");
const container = document.getElementById("list-container");
function addItem() {
    if (InputText.value === '') {
        alert("Please enter some text");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = InputText.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputText.value = '';
    saveList();
}

container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveList();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveList();
    }
}, false);

function saveList() {
    localStorage.setItem("data", container.innerHTML);
}
function showData() {
    container.innerHTML = localStorage.getItem("data");
}
showData();