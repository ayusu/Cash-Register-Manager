const billamount = document.querySelector("#Bill-amount")
const cashGiven = document.querySelector("#cash-given")

const btn = document.querySelector("#calculate")
btn.addEventListener('click', ()=> {
    let outp = cashGiven.value-billamount.value
    console.log(outp)
})
