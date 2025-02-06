document.addEventListener("DOMContentLoaded", () => {
  // Inserting copyright information in the footer.
  
  const footerText = document.getElementById("footer-text");
  const currentYear = new Date().getFullYear();
  footerText.innerHTML = `&copy; ${currentYear} Xavier Mcallister`;

  // Populating skills list

  const skills = ["HTML", "CSS", "GitHub"];
  const skillsList = document.getElementById("skills-list");
  skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
  });

  // Handling the form submission.

  const messageForm = document.getElementById("message-form");
  const messagesList = document.getElementById("messages-list");
  
  messageForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      
      const messageName = document.createElement("li");
      messageName.innerHTML = `<strong><a href="mailto:${email}">${name}</a></strong>: ${message} <button class="remove">Remove</button>`;
      
      messagesList.appendChild(messageName);
      
      messageForm.reset();
  });
  
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
