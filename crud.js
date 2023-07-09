// const input = document.querySelector('input')
// const addBtn = document.querySelector('.add-btn')
// const removeBtn = document.querySelector('.remove-btn')
// const ul = document.querySelector('ul')
//
// localStorage.setItem('test' , JSON.stringify([{title : 'go to school' , id : 1} ,
//     {title: 'go to office' , id : 2}]))
//


function view () {
    let task = JSON.parse(localStorage.getItem('test')) || []
    let allList = ''
    task.map(el =>{
        allList += `<li class="list-group-item">${el.title}</li>`
    })
    ul.innerHTML = allList
}

addBtn.addEventListener('click' , (e) =>{
    let task = JSON.parse(localStorage.getItem('test')) || []
    let newList = {
        title : input.value
    }
    task = [...task , newList]
    localStorage.setItem('test' , JSON.stringify(task))
    view()

})


view()


removeBtn.addEventListener('click' ,() =>{
    view()
    localStorage.removeItem('test')
})


addBtn.addEventListener('click' , () =>{
    getList()
})
removeBtn.addEventListener('click' , () =>{
    ul.innerHTML = ''
})
input.addEventListener('keydown' , (e) =>{
    if (e.key === 'Enter') getList()
})

function getList() {
    if (input.value.length !== 0){
        ul.innerHTML += `<li class = "list-group-item">${input.value}</li>`
    }
    input.value = ""
}









// Promise

//Promise может находиться в трёх состояниях:
//
// ожидание (pending): начальное состояние, не исполнен и не отклонён.
// исполнено (fulfilled): операция завершена успешно.
// отклонено (rejected): операция завершена с ошибкой.


// pending
// resolve
// reject

// const promise = new Promise( (resolve , reject) =>{
//     console.log('start...')
//     setTimeout(() =>{
//         console.log('fulfilled')
//         resolve({status:200})
//         reject('Error...')
//     }, 3000)
// })
// promise.then((data) =>{
//     console.log(data)
// })






// const div = document.querySelector(".row")
//
//
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(data => data.json())
//     .then(res => {
//         console.log(res)
//         res.map(el =>(
//             div.innerHTML += `<div>
// <h1>${el.username}</h1>
// <p>${el.name}</p>
// <p>${el.address}</p>
// <p>${el.address.city}</p>
// </div>`
//         ))
//     })














// fotos


// const div = document.querySelector(".row")


// fetch(`https://jsonplaceholder.typicode.com/photos`)
//     .then(data => data.json())
//     .then(res => {
//         console.log(res)
//         res.map(el =>(
//             div.innerHTML += `<div>
// <p>${el.id}</p>
// <h2>${el.title}</h2>
// <h1>${el.url}</h1>
// </div>`
//         ))
//     })
































// setTimeout(() =>{
//     console.log('Hello')
// } , 3000)
//
//
// setInterval(() =>{
//     console.log('loading....')
// } , 2000)














