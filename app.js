const billamount = document.querySelector("#Bill-amount")
const cashGiven = document.querySelector("#cash-given")
const message = document.querySelector("#Error-message")
const noOfNotes = document.querySelectorAll(".No-of-notes")
const next = document.querySelector("#enter-cash")
const cashContainer = document.querySelector("#cash-container")
const showAmount = document.querySelector("#show-amount")

const typeOfNotes = [2000,500,200,100,50,10,1]

next.addEventListener("click", function showCashContainer(){
   cashContainer.style.display = "flex";
    next.style.display = "none";
})


const btn = document.querySelector("#calculate")
btn.addEventListener('click', ()=> {
    message.style.display = "none"
    if (billamount.value > 0 ){
        if (cashGiven.value >= billamount.value)  {
            const cashToBeReturned = cashGiven.value - billamount.value
            calculate(cashToBeReturned)
        }else{
            showmessage("Cash Given should be atleast equal to Bill amount")
        }
    }else{
        showmessage("Invalid Entry")
    }
})

function calculate(cashToBeReturned) {
    showAmount.style.display = "block"
    for (let i=0;i <=typeOfNotes.length;i++) {
        const numberOfNotes = Math.trunc(cashToBeReturned / typeOfNotes[i])
        cashToBeReturned %= typeOfNotes[i]
        noOfNotes[i].innerText = numberOfNotes
    }

}

function showmessage(msg) {
    message.style.display = "block"
    message.innerText = msg
}