//****Where to add *** */

const placesList = document.getElementById('places-list');

//*****what to be added */
const li = document.createElement('li');
li.innerText = 'pahartoli';

//****add the child */

placesList.appendChild(li);



//****1. where to add ***

const mainContainer = document.getElementById('main-container');//24.8

//***what to be added */
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani khabo'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani khabo'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'pani khabo'
ul.appendChild(li3);

section.appendChild(ul);


mainContainer.appendChild(section)


//***set innerHtml Directly */

const sectionDress = document.createElement('section');//24.8
sectionDress.innerHTML = `
<h1>my dress section</h1>
<ul>
<li>t shirt</li>
<li> shirt</li>
<li>pant</li>
<li>punjabi</li>

</ul>
`

mainContainer.appendChild(sectionDress);

