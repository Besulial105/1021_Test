const btn = document.getElementById('btn2')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "b1d1f07194fb89",
    Password: "e627e01a9be20d",
    To: "info@theschmidfamily.ch",
    From: inputs.elements["email"].value,
    Subject: "eine neue Newsletter Anmeldung",
    Body: "bitte in die Adressliste aufnehmen"
   }).then(msg=>alert("Wir haben die Anmeldung für den Newsletter erhalten"))

 
})