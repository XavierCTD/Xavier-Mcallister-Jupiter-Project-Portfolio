/*This is a multi-line comment that I will explain to you in detail from the following file. 
  Index.js: This is the entire document that will be functioning within this JavaScript file. I've done this by using the DOMContentLoaded to the addEventListener call. This will make sure
  that the file is operating smoothly.
  
  Within this document contains the date year, copyright, skills list that connects from the skills section on the HTML File, the message form that handles the messages (The message form uses
  multiple ID selectors from the HTML file, then it adds an event listener that will ensure that the submit and remove buttons operates. The remove button targets the parent/main element from the
  current call it contains) and the fetching sequence that acts similar to a <a> element from an HTML file. The main difference between the fetch and <a> element is that the <a> element does not 
  retrieve the properties and modifiy the content. It only uses the HTTP link. Within the fetching sequence contains the HTTPS link, Json (Node) response that retrieves and calls the data. Since 
  there are multiple repositories, it was nessesary to use the forEach method (that acts like an array of objects) to create a list of repositories via through an html_url(link) and the name of the
  repository. The fetching sequence finally uses the catch method that uses the error callback function. This callback function will describe the error by using the console.error method. Overall, 
  the JavaScript file was the most challenging and difficult file I've done so far, but I finally figured out the pattern of coding. It was simply connecting one code to another.*/


document.addEventListener("DOMContentLoaded", () => {
  /* Inserting copyright information in the footer. */
  const footerText = document.getElementById("footer-text");
  const currentYear = new Date().getFullYear();
  footerText.innerHTML = `&copy; ${currentYear} Xavier Mcallister`;
  

  /* Populating skills list */


  // Array of skills.
  const skills = ["HTML", "CSS", "GitHub"];
  const skillsList = document.getElementById("skills-list");

  // Creating a list for each skills.
  skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
  });

  /* Handling the form submission. */


  // Manipulating the DOM to get the ID of the message form and list.
  const messageForm = document.getElementById("message-form");
  const messagesList = document.getElementById("messages-list");

  
  // Adding a submit button by implementing a addEventListener through the message form.
  messageForm.addEventListener("submit", (event) => {
      event.preventDefault();

 // Getting the ID's of each form of the value.   
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

 // Creating a list element and using innerHTML from the list element that was created. (innerHTML converts and connects the HTML file from the JavaScript file)    
      const messageName = document.createElement("li");
      messageName.innerHTML = `<strong><a href="mailto:${email}">${name}</a></strong>: ${message} <button class="remove">Remove</button>`;
      
      messagesList.appendChild(messageName);
      
      messageForm.reset();
  });


// Adding a remove button using the parentElement and addEventlistener.
  messagesList.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove")) {
          event.target.parentElement.remove();
      }
  });

  // Fetching GitHub repositories.

  const usernameAPI = "XavierCTD"
  fetch(`https://api.github.com/users/${usernameAPI}/repos`)
      .then(response => response.json())
      .then(data => {
          const projectsList = document.getElementById("projects-list");
          data.forEach(repo => {
              const messageName = document.createElement("li");
              messageName.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
              projectsList.appendChild(messageName);
          });
      })
      .catch(error => console.error("Error fetching repositories:", error));
});
