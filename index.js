const newPage = document.createElement("p");
const textWritten = document.createTextNode("If you want more information on me, click here.")
newPage.appendChild(textWritten);

document.getElementByID("myfooter").appendChild(newPage);
