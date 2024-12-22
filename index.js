let icon = document.querySelector(".icon")
let ul = document.querySelector("ul")


icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className= "fa-solid fa-bars";
    }
})


let shop = document.getElementById("shops")
let review = document.getElementById("reviews")
let blog = document.getElementById("blogs")
let contact = document.getElementById("contacts")

shop.addEventListener("click", ()=>{
    shop.style.color = "rgb(248, 71, 107)"
    review.style.color = "whitesmoke"
    blog.style.color = "whitesmoke"
    contact.style.color = "whitesmoke"
})

review.addEventListener("click", ()=>{
    review.style.color = "rgb(248, 71, 107)"
    shop.style.color = "whitesmoke"
    blog.style.color = "whitesmoke"
    contact.style.color = "whitesmoke"
})

blog.addEventListener("click", ()=>{
    blog.style.color = "rgb(248, 71, 107)"
    shop.style.color = "whitesmoke"
    review.style.color = "whitesmoke"
    contact.style.color = "whitesmoke"
})

contact.addEventListener("click", ()=>{
    contact.style.color = "rgb(248, 71, 107)"
    shop.style.color = "whitesmoke"
    review.style.color = "whitesmoke"
    blog.style.color = "whitesmoke"
})


// card js

let crd = document.querySelectorAll(".crd")
let itemPage = document.querySelector(".itempage")
let header = document.querySelector(".header")
let itemImg = document.getElementById("itemImg")
let buyBtn = document.getElementById("buyBtn")
console.log(crd)


crd.forEach((curValue)=>{
    curValue.addEventListener("click", ()=>{
        itemPage.style.display= "flex"
        header.style.display= "none"

        let imgSrc = curValue.firstElementChild.src
        itemImg.src = imgSrc


        let buyText = document.querySelector(".buyText")
        buyBtn.addEventListener("click",()=>{
            document.querySelector(".buyPage").style.display= "Block"
            buyText.innerHTML=
            `<h3>Enter Your Details :</h3>
            <input type="text" placeholder="Enter Your Name" id="name"> <br>
            <input type="text" placeholder="Enter Your Address" id="address"> <br>
            <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
            <h3>Payment Option :</h3>
            <select>
                <option value="Google-Pay">Google Pay</option>
                <option value="Phone-Pay">Phone Pay</option>
                <option value="Bharat-Pay">Bharat Pay</option>
                <option value="Cash-On-Delivery">Cash-On-Delivery</option>
            </select> <br>
           
            `

            let button = document.createElement("button")
            button.innerText="Submit"
            buyText.appendChild(button)

            button.addEventListener("click", ()=>{
               let name = document.getElementById("name") 

               if(name.value == "" && address.value == "" && num.value == ""){
                alert("Please Enter Your Details")
               }else{
                alert("Your Response Recorded")
                 document.querySelector(".buyPage").style.display= "none"
               }
            })



            let cross = document.querySelector(".cross")
            cross.addEventListener("click", ()=>{
                document.querySelector(".buyPage").style.display= "none"
            })
        })
    })
})



function connect(){
    let name = document.getElementById("names")
    let number = document.getElementById("number")

    if(name.value == "" && number.value == ""){
        alert("Fill Your Details")
    }else{
        alert("Thank You For Connecting! We Will connecting back To You in 24 Hours")
    }
}