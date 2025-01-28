// Adding Footer
const contentFooter = document.querySelector('#content');
const footerElement = document.createElement('footer');
footerElement.innerHTML = "<fieldset><label class='bio'>Message Here.<textarea id='bio' name='bio' rows='5' cols='30'></textarea></label></fieldset>";
footerElement.style.color = "darkblue";
footerElement.style.textAlign = "center";
footerElement.style.fontSize = "4rem";
if (contentFooter) contentFooter.appendChild(footerElement);

// Adding Date
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.getElementById('timing');
if (footer) {
  const copyright = document.createElement('p');
  copyright.textContent = `Xavier Mcallister ${thisYear}.`;
  footer.appendChild(copyright);
}

// Adding Skills
const skills = ["JavaScript", "HTML", "CSS", "Very good with video games"];
const skillsSection = document.getElementById('skills-list');
const skillsList = document.querySelector('#skills-list ul');
if (skillsList) {
  skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
  });
}

// Adding a Message Form
const messageForm = document.forms["leave_message"];
if (messageForm) {
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = this.usersName.value;
    const usersEmail = this.usersEmail.value;
    const usersMessage = this.usersMessage.value;

    console.log("User's Name:", usersName);
    console.log("User's Email:", usersEmail);
    console.log("User's Message:", usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection?.querySelector('ul');
    if (messageList) {
      const newMessage = document.createElement('li');
      newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
      <span>${usersMessage}</span>`;

      const removeButton = document.createElement('button');
      removeButton.innerText = 'remove';
      removeButton.type = 'button';
      removeButton.addEventListener("click", function () {
        newMessage.remove();
      });

      newMessage.appendChild(removeButton);
      messageList.appendChild(newMessage);
    }

    this.reset();
  });
}

// Creating Fetch API
const githubUsername =  'XavierCTD';
fetch(`https://api.github.com/users/${githubUsername}/repos`)
.then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    return response.json();
  })
  .then(repositories => {
    console.log(repositories); 

    const projectSection = document.getElementById('Projects');
    const projectList = projectSection.querySelector('ul')

    repositories.forEach(repo => {
      const project = document.createElement('li');
      project.innerText = repo.name;
      projectList.appendChild(project);
    });
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
    const projectSection = document.getElementById('Projects');
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Could not load repositories.';
    projectSection.appendChild(errorMessage);
  });
