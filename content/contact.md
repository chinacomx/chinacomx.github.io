---
title: "Contact"
type: "page"
layout: "simple"
showDate: false
showReadingTime: false
showWordCount: false
showAuthor: false
---

{{< lead >}}
If you have any questions, suggestions or inquiries, feel free to reach out to us using the form below — or write us an email directly [here](mailto:chinacomx.erc@gmail.com):
{{< /lead >}}

<form id="my-form" action="https://formspree.io/f/mleqyzyy" method="POST" class="flex flex-col gap-5 mt-8 w-full">
<div class="flex flex-col md:flex-row gap-5 w-full">
<div class="flex flex-col flex-1">
<label class="font-semibold mb-1 text-sm">Name:</label>
<input type="text" name="name" class="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors" required />
</div>
<div class="flex flex-col flex-1">
<label class="font-semibold mb-1 text-sm">Surname:</label>
<input type="text" name="surname" class="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors" required />
</div>
</div>
<div class="flex flex-col w-full">
<label class="font-semibold mb-1 text-sm">Affiliation (leave empty if none):</label>
<input type="text" name="affiliation" class="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors" />
</div>
<div class="flex flex-col w-full">
<label class="font-semibold mb-1 text-sm">Email:</label>
<input type="email" name="email" class="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors" required />
</div>
<div class="flex flex-col w-full">
<label class="font-semibold mb-1 text-sm">Message:</label>
<textarea name="message" rows="5" class="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors" required></textarea>
</div>
<button id="my-form-button" type="submit" class="px-6 py-2 mt-2 font-bold text-white rounded-md bg-primary-600 hover:bg-primary-700 w-fit transition-colors">Submit</button>
<p id="my-form-status" class="font-bold text-green-600 dark:text-green-400 mt-2"></p>
</form>

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
form.reset();
} else {
response.json().then(data => {
if (Object.hasOwn(data, 'errors')) {
status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
} else {
status.innerHTML = "Oops! There was a problem submitting your form.";
}
})
}
}).catch(error => {
status.innerHTML = "Oops! There was a problem submitting your form.";
});
}
form.addEventListener("submit", handleSubmit);
</script>