const ratingELs = document.querySelectorAll(".rating");
let SelectorRating = "";
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container")

ratingELs.forEach((ratingELs) => {
    ratingELs.addEventListener("click", (event) => {
       removeActive();
       SelectorRating = 
        event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", () =>{
    if(SelectorRating !== ""){
        containerEl.innerHTML =` <strong> Thank you!</strong> 
        <br>
        <br>
        <strong>Feedaback: ${SelectorRating}</strong> 
        <p>We'll use your feedback to imrove our customer suppor.</p>
        `;
    }
})

function removeActive() {
    ratingELs.forEach((ratingELs) => {
        ratingELs.classList.remove("active");
    });
}