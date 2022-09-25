const sections = document.querySelectorAll('section');//for 24.6
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.borderRadius = '10px';
    section.style.marginBottom = '5px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'grey'

}

// const tableOfFood = document.getElementById('khawadawa');//for 24.6
// tableOfFood.style.backgroundColor = 'white';

const tableOfFood = document.getElementById('khawadawa');
tableOfFood.classList.add('text-center');
tableOfFood.classList.remove('large-text')//24.6


