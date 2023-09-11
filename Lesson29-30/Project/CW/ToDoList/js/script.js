const newTask = document.getElementById("new-task")
const button = document.getElementById("button")
const todoContainer = document.querySelector(".todo-container")

button.addEventListener("click", () => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.textContent = newTask.value
    span.textContent = "\tX"
    li.append(span)
    todoContainer.append(li)
    newTask.value = ""
})

todoContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("done")
    }
    else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove
    }
})