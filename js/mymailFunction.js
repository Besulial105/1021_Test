const btn = document.getElementById('btn2')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
  Email.send({
    SecureToken: "8a407fea-78c2-4af5-859e-86a210b38221",
    To: "info@theschmidfamily.ch",
    From: inputs.elements["email"].value,
    Subject: "eine neue Newsletter Anmeldung",
    Body: "bitte in die Adressliste aufnehmen"
   }).then(msg=>alert("Wir haben die Anmeldung für den Newsletter erhalten"))

 
})