// Adding Footer

const contentFooter = document.querySelector('#content');
const useFooter = document.createElement('footer');
useFooter.innerHTML = "<fieldset><label class='bio'>Message Here.<textarea id='bio' name='bio' rows='5' col='30'></textarea></label></fieldset>";
useFooter.style.color = "darkblue";
useFooter.style.textAlign = "center";
useFooter.style.fontSize = "4rem";
contentFooter.appendChild(useFooter);


// Adding Date

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = `Xavier Mcallister ${thisYear}.`;
footer.appendChild(copyright);


// Adding Skills

const useSkills = ["JavaScript", "HTML", "CSS", "Very good with video games"];
const skillsSection = document.getElementById('skills-list');
const skillsList = document.querySelector('ul');

for(let i = 0; i < useSkills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = useSkills[i];
  skillsList.appendChild(skill);
}


// Adding a Message Form

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log("User's Name:", usersName);
  console.log("User's Email:", usersEmail);
  console.log("User's Message:", usersMessage);

  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  
  newMessage.innerHTML = `<a href="mailto:${usersName}"> ${usersEmail}</a>
  <span>${usersMessage}</span>`

  messageList.appendChild(newMessage);

  messageForm.reset();

  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener("click", function (event) {
    const entry = removeButton.parentNode;
    entry.remove();
  })

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  event.target.reset();
});


// Github Repositories API

const GithubUsername = 'XavierCTD';
const urlToUsername = `https://api.github.com/users/${GithubUsername}/repos`

fetch(urlToUsername)
  .then((response) => {
    if (!response.ok) {
      throw new error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((repositories) => {
    console.log(repositories);
    
    const projectSection = document.getElementById('Projects');
    const projectList = projectSection.querySelector('ul');

    repositories.forEach((repos) => {
    const project = document.createElement('li');
     project.innerText = repos.name;
     projectList.appendChild(project);
   })
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);

    const projectSection = document.getElementById("Projects");
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Could not load projects. Please try again later.";
    projectSection.appendChild(errorMessage);
  });

