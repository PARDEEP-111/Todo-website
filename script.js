
let completeTaskCon = document.querySelector(".complete-task-bar")
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


        // making complete btn
        let comBtn = document.createElement("button")
        comBtn.classList.add("comBtn")
        li.appendChild(comBtn)
        li.appendChild(delBtn)
        comBtn.textContent = "Complete"
        comBtn.addEventListener("click", () => {
            completArr.push(arr[index])
            console.log(completArr);
            arr.splice(index, 1)
            rerender()
            comTask()

        })


        // making delete btn
        delBtn.classList.add("delbtn")
        delBtn.textContent = "Delete"
        delBtn.addEventListener("click", () => {
            arr.splice(index, 1)
            rerender()
        })



    });

}
// prevents on empty list
btn.addEventListener("click", () => {
    // input = arr[i]
    if (input.value.trim() === "") return
    arr.push(input.value.trim())
    input.value = ""
    rerender()
})
 function comTask(){
completeTaskCon.innerHTML=""
completArr.forEach((element,index)=>{
    let li = document.createElement("li")
    li.textContent=element
    completeTaskCon.appendChild(li)
li.classList.add("comTask")
li.classList.add("tasks")

})
 }
comTask()


// dark them btn
let darkTheme= document.querySelector("#cyber-toggle")
let them=  document.getElementsByTagName("body")[0]
darkTheme.addEventListener("click", ()=>{
   them.classList.toggle("darkThem")
   console.log("hellow");
   
})