"use strict";

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const payload = {
    name: formData.get("client_name"),
    email: formData.get("client_email"),
    message: formData.get("client_message"),
  };

  try {
    const response = await fetch("/.netlify/functions/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.ok) {
      this.innerHTML = "✅ Thank you! Your massage has been sent!";
    } else {
      console.error(result.error);
      alert("Failed sending message: " + result.error);
    }
  } catch (err) {
    console.error(err);
    alert("Network or server error.");
  }
});


