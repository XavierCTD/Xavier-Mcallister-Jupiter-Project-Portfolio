const contentFooter = document.querySelector('#content');
const useFooter = document.createElement('footer');
useFooter.innerHTML = "<fieldset><label class='bio'>Message Here.<textarea id='bio' name='bio' rows='5' col='30'></textarea></label></fieldset>";
useFooter.style.color = "darkblue";
useFooter.style.textAlign = "center";
useFooter.style.fontSize = "4rem";
contentFooter.appendChild(useFooter);

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = `Xavier Mcallister ${thisYear}.`;
footer.appendChild(copyright);