let taskContainer = document.querySelector(".task-bar")
let input = document.querySelector("#myInput")
let btn = document.querySelector(".add-btn")
let completArr = []
let arr = []


//                      for rerendering the list an
function rerender() {
    taskContainer.innerHTML = ""
    arr.forEach((element, index) => {
        let li = document.createElement("li")
        let delBtn = document.createElement("button")
        li.textContent = element
        taskContainer.appendChild(li)
        li.classList.add("tasks")
        li.appendChild(delBtn)
        delBtn.classList.add("delbtn")
        delBtn.textContent = "Delete"
        delBtn.addEventListener("click", () => {
            arr.splice(index, 1)
            rerender()
        })



    });

}

btn.addEventListener("click", () => {
    // input = arr[i]
    if (input.value.trim() === "") return
    arr.push(input.value.trim())
    input.value = ""
    rerender()
})

