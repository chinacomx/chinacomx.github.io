---
layout: default
title: Contact
permalink: /contact/
---

If you have any questions, suggestions or inquiries, feel free to reach out to us using the form below -- or write us an email directly [here](mailto:chinacomx.erc@gmail.com):


<!-- modify this form HTML and place wherever you want your form -->
<form id="my-form" action="https://formspree.io/f/mleqyzyy" method="POST">
  <label>Name:</label>
  <input type="name" name="name" />
  <label>Surname:</label>
  <input type="surname" name="surname" />
  <label>Affiliation (leave empty if none):</label>
  <input type="affiliation" name="affiliation" />
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <textarea name="message"></textarea>
  <button id="my-form-button">Submit</button>
  <p id="my-form-status"></p>
</form>

<!-- Place this script at the end of the body tag -->
<script>
  var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)
</script>