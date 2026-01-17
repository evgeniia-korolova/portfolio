"use strict";

const ajaxSend = async (formData) => {
  
  const fetchResp = await fetch("telegram.php", {
    
    method: "POST", 
    body: formData, 
  });
  if (!fetchResp.ok) {
    
    throw new Error(`Error at: telegram.php, status ${fetchResp.status}`); 
  }
  return await fetchResp.text(); 
};

const forms = document.querySelectorAll("form"); 
forms.forEach((form) => {
  
  form.addEventListener("submit", function (e) {
    
    e.preventDefault(); 
    const formData = new FormData(this); 
    console.log(formData);

    ajaxSend(formData) 
      .then((response) => {
        
        this.innerHTML = "Thank you,<br> for your message!"; 
        form.reset(); 
      })
      .catch((err) => console.error(err)); 
  });
});
