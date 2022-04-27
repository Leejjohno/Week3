
// const myHeading = document.getElementById("heading")
// const myInput = document.getElementById("input")
// const myButton = document.getElementById("button")
// const list = document.getElementsByTagName("li")

// ----------------------------------------------------

// myHeading.addEventListener("click", () => {
//     myHeading.style.color = "red"
// })



// const notOrange = document.getElementsByClassName("not-orange")

// list.length;
// list[0];
// list[3];
// list[0].style.color="red";

// for (i = 0; i < list.length; i++) {
//     list[i].style.color = 'orange'
// }
// for (i = 0; i < notOrange.length; i++) {
//     notOrange[i].style.color = 'red'
//}

// console.log(list)
// console.log(list.length)

// --------------------------------------------------

// myButton.addEventListener("click", () => {
//     myHeading.style.color = input.value
// })

// const listItems = document.querySelectorAll("li:nth-child(even)")
// console.log(listItems)
// console.log(listItems.length)

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'lightgreen'
// }

// --------------------------------------------------------

// const placeholder = document.getElementById("placeholder")
// const input = document.getElementById("input")
// const submit = document.getElementById("submit")
// const list = document.getElementById("list")

// submit.addEventListener("click", () => {
//     placeholder.style.color = "goldenrod"
//     placeholder.textContent = `I like ${input.value}`

//     list.innerHTML = `<li>${input.value}</li>`
// })

// -----------------------------------------------------

// const image = document.getElementById("image")
// // const input = document.getElementById("input")
// const submit = document.getElementById("submit")

// // console.log(image)

// submit.addEventListener("submit", () => {
//     // image.src = input.value
//     if(image.style.display == "none") {
//         image.style.display = "block"
//         submit.textContent = "hide"
//     } else {
//         image.style.display = "none"
//         submit.textContent = "show"
//     }
// })

// const input = document.getElementById("input")
// const button = document.getElementById("submit")
// const list = document.getElementById("list")
// const showHide = document.getElementById("showhide")
// const remove = document.getElementById("remove")
// const listItems = document.getElementsByTagName("li")

// button.addEventListener("click", () => {
//     let listItem = document.createElement("li")
//     listItem.textContent = input.value
//     list.appendChild(listItem)
//     // console.log(listItem)
//     input.value = ''
// })

// showHide.addEventListener("click", () => {
//     if (list.style.display == "none") {
//         list.style.display = "block"
//         showHide.textContent ="hide"
//     } else {
//         list.style.display = "none"
//         showHide.textContent = "show"
//     }
// })

// remove.addEventListener("click", () => {
//     let lastItem = document.querySelector("li:last-child")
//     list.removeChild(lastItem)
// })

// window.setTimeout((something) => {
//     console.log(something)
// }, 5000, "Hello")

// for(let listItem of listItems) {
//     listItem.addEventListener("mouseover", () => {
//         listItem.textContent = listItem.textContent.toUpperCase()
//     })
//     listItem.addEventListener("mouseout", () => {
//         listItem.textContent = listItem.textContent.toLowerCase()
//     })
// }

// list.addEventListener("mouseover", (event) => {
//     event.target.textContent = event.target.textContent.toUpperCase()
// })
// list.addEventListener("mouseout", (event) => {
//     event.target.textContent = event.target.textContent.toLowerCase()
// })

document.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.target)
// })

// let paragraph = document.getElementById("para1")
// let parent = paragraph.parentNode

// parent.removeChild(paragraph)

// list.addEventListener("click", (event) =>{
//     const li = event.target
//     const ul = li.parantNode
//     ul.removeChild(li)
// })

// ----------------------KeyCode attempt-------------------------


// const eventKey = input.getElementById(KeyboardEvent)
// const input = KeyboardEvent.getElementById("input")

// button.addEventListener("click", () => {
//     let listItem = document.createElement("li")
//     listItem.textContent = input.value
//     list.appendChild(listItem)
//     // console.log(listItem)
//     input.value = ''
// })

document.addEventListener('keydown', (event) => {
    let numDisplay = document.getElementById('numDisplay')
    let numCode = document.getElementById('codeDisplay')
    let numKey = document.getElementById('keyDisplay')
    let numWhich = document.getElementById('whichDisplay')

    let keyDown = event.key

    let keyCode = event.code

    let keyWhich = event.which


    numDisplay.textContent = keyDown
    numCode.textContent = keyCode
    numKey.textContent = keyDown
    numWhich.textContent = keyWhich

})

    // let keyDown = event.key

    // let keyCode = event.code

    // let keyWhich = event.which

    // numDisplay.innerHTML = `<p class="pressedBtn"> ${keyDown} was pressed</p>`

    // numCode.innerHTML = `<p class="pressedBtn"> ${numCode} was pressed</p>`

    // numKey.innerHTML = `<p class="pressedBtn"> ${numKey} was pressed</p>`

    // numWhich.innerHTML = `<p class="pressedBtn"> ${numWhich} was pressed</p>`


//     keyName = event.key;
//     KeyCode = event.code;
//     keyWhich = event.which;



// alert(`Key pressed: ${keyName} \nkey code: ${KeyCode} \nof which ${keyWhich}`)
// })

