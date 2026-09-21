// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelectorAll("h1")

// console.log(h1)

// let p = document.querySelector("p")
// p.textContent="hi I am Diwkar"
// console.log(p)

// p.setAttribute("style","background-color: pink")
// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled","true")
// btn.textContent = "Remove"

// p.classList .add("randon")

// p.style.backgroundColor="red" //style object

// p.dataset.helloDosto = "hoii"



// let product =[
//     {
//         name: "Iphone 59",
//         price: 93487
//     },

//     {
//         name: "radimi",
//         price: 93487
//     },
    
//     {
//         name: "OOpo",
//         price: 93487
//     },
    
//     {
//         name: "MI",
//         price: 93487
//     },
    
    
// ]

// let div = document.createElement("div")

// div.textContent ="hello"
// let body = document.querySelector("body")
// body.appendChild(div)
// // console.log("div")

// body.append(div) //insert into last
// body.prepend()//insert into start

let product =[
    {
        name: "Iphone 59",
        price: 93487
    },

    {
        name: "radimi",
        price: 93487
    },
    
    {
        name: "OOpo",
        price: 93487
    },
    
    {
        name: "MI",
        price: 93487
    },
    
    
]
let productlist= document.querySelector("product-list")

product.forEach((product) => {
    // console.log (product)
    // const card =document.createElement("p")
    // card.textContent= `${product.name} -${product.price}`
    // productlist.append(card)

    card.innerHTML =`<div>
    <img src =${product.imgurl} alt ="">
    </div>
    <div class ="productDetail">
    <p>${product.name}</p>
    <p>${product.price}</p>
    </div>

    `
    productlist.append(card)
})