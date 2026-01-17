"use strict";

const TOKEN = "ТВОЙ_ТОКЕН_БОТА"; 
const CHAT_ID = "ТВОЙ_CHAT_ID"; 
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.querySelector(".feedback-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const message = `
<b>Client:</b> ${formData.get("client_name")}
<b>Email:</b> ${formData.get("client_email")}
<b>Message:</b> ${formData.get("client_message")}
  `;

  fetch(URI_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "html"
    })
  })
  .then(res => res.json())
  .then(res => {
    this.innerHTML = "✅ Thank you for your message!";
  })
  .catch(err => {
    console.error(err);
    alert("Failed to send message!");
  });
});

