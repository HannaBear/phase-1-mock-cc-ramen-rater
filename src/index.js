// X append ramen images to the DOM by appending to the div with the id. of ramen-menu for each ramen
//  X grab the div with the id of ramen-menu and make that a variable
// X first I need to make a fetch request to get the data
// X  when creating the img, add an event listener to the img
// grab the 'insert comment here' and 'insert rating here' fields as variables
// display the ramen info in the insert comment here and insert rating here fields
// create a new ramen after submit event on the new ramen form (doesn't need to be a post request)

const ramenMenu = document.getElementById("ramen-menu")

const ramenDetail = document.getElementById("ramen-detail")

let newRamenForm = document.getElementById("new-ramen")


let nameInput = document.getElementById("new-name")
let resInput = document.getElementById("new-restaurant")
let imgInput = document.getElementById("new-image")
let ratingInput = document.getElementById("new-rating")
let commentInput = document.getElementById("new-comment")

let bigPic = document.getElementsByClassName("detail-image")[0]
let bigName = document.getElementsByClassName("name")[0]
let bigRes = document.getElementsByClassName("restaurant")[0]
let bigRate = document.getElementById("rating-display")
let bigComment = document.getElementById("comment-display")











document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM content has been loaded!")
    fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => {

    let ramenList = data
    console.log("ramenList", ramenList)
    console.log(ramenList[0].image)

    bigPic.src = ramenList[0].image
    bigName.textContent = ramenList[0].name
    bigRes.textContent = ramenList[0].restaurant
    bigRate.textContent = ramenList[0].rating
    bigComment.textContent = ramenList[0].comment



    ramenList.forEach((ramen) => {
        let ramenImgSrc = ramen.image
        let ramenName = ramen.name
        let ramenRating = ramen.rating
        let ramenRes = ramen.restaurant
        let ramenCom = ramen.comment
        

        let ramenPic = document.createElement('img')
        ramenPic.src = ramenImgSrc
        ramenPic.addEventListener("click", (e) =>
        {
        

           bigPic.src = ramenImgSrc
             bigName.textContent = ramenName
             bigRes.textContent = ramenRes
             bigRate.textContent = ramenRating
            bigComment.textContent = ramenCom
            

        })

        ramenMenu.append(ramenPic)
    

    })

    
    // add event listener to form
    // prevent default
    // grab values from the form

    newRamenForm.addEventListener("submit", (e) =>{
        e.preventDefault()

        

        let newRamenObj = {
            comment: commentInput.value,
            image: imgInput.value,
            name: nameInput.value,
            rating: ratingInput.value,
            restaurant: resInput.value

            }
            let newRamenImg = document.createElement('img')
            newRamenImg.src = imgInput.value
    
            
            ramenMenu.append(newRamenImg)

            newRamenImg.addEventListener("click", (e) =>
            {
            
    
               bigPic.src = imgInput.value
               console.log("Bigpic source", bigPic.src)
                 bigName.textContent = newRamenObj.name
                 console.log("Bigname text", bigName.textContent)
                 bigRes.textContent = newRamenObj.restaurant
                 console.log("Big restaurant text", newRamenObj.textContent)
                 bigRate.textContent = newRamenObj.rating
                 console.log("Big Rating text", bigRate.textContent)
                bigComment.textContent = newRamenObj.comment
                console.log("bigComment text", bigComment.textContent)
                
    
            })

           return newRamenObj

        }
    
        )

    }) }) 

