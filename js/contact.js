function kontakt(event){
event.preventDefault()
let emri = document.getElementById("emri").value
let mbiemri = document.getElementById("mbiemri").value
let email = document.getElementById("email").value
let komenti = document.getElementById("komenti").value
let sms =document.getElementById("sms")

if(emri==="" || mbiemri=== "" || email==="" || komenti==="") {
    sms.textContent = `Ploteso te gjitha  fushat`
sms.style.display="block"
sms.classList.add("alert-danger")
return
}
if(!/^[a-zA-Z]/.test(emri) || !/^[a-zA-Z]/.test(mbiemri)){
    sms.textContent =`emri dhe mbiemri duhet te kete vetem shkronja`
    sms.style.display="block"
sms.classList.add("alert-danger")
return
}
sms.textContent= `Faleminderit ${emri} ${mbiemri}`
sms.style.display="block"
sms.classList.add("alert-success")
sms.classList.add("alert-danger")
return
}