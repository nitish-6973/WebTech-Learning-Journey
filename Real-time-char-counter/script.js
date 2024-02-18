const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const textRemainingEl = document.getElementById("remaining-container")

textareaEl.addEventListener("keyup" ,() =>{
    updateCounter();
});

function updateCounter(){
    totalCounterEl.innerText= textareaEl.value.length;
    textRemainingEl.innerText=textareaEl.getAttribute("maxLength") - textareaEl.value.length;
    
}