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
