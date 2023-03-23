console.log("läuft");

// Level 1_3

const unten = document.querySelector('.unten');
const myList = document.querySelector('#myList');
const li = document.querySelectorAll('li');
const button = document.querySelectorAll('button');
const output = document.querySelector('output');


button[0].addEventListener('click', (event) => {
    console.log(event);
    output.innerHTML = myList.firstElementChild.innerHTML;
})

button[1].addEventListener('click', (event) => {
    console.log(event);
    output.innerHTML = myList.lastElementChild.innerHTML;
})

button[2].addEventListener('click', (event) => {
    console.log(event);
    output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML;
})

button[3].addEventListener('click', (event) => {
    console.log(event);
    output.innerHTML = myList.lastElementChild.previousElementSibling.innerHTML;
})








// Level 1_9

const buttons = document.querySelector('#button');
const selectElement = document.querySelector('#farbeAuswahlen');

buttons.addEventListener('click', (event) => {
    event.preventDefault();
    const index = selectElement.selectedIndex;
    // console.log(index);


    switch (index) {
        case 0:
            selectElement[0].remove();
            break;
        case 1:
            selectElement[1].remove();
            break;
        case 2:
            selectElement[2].remove();
            break;
        case 3:
            selectElement[3].remove();
            break;
        case 4:
            selectElement[4].remove();
            break;
        case 5:
            selectElement[5].remove();
            break;
        case 6:
            selectElement[6].remove();
            break;
        case 7:
            selectElement[7].remove();
            break;
        case 8:
            selectElement[8].remove();
            break;
        case 9:
            selectElement[9].remove();
            break;
        default:
            selectElement[10].remove();
            break;

    }
})


// Level 2_7 

const umwickeln = document.querySelector('#umwickeln');
let counter = 0;
const button2 = document.querySelector('#button2')

button2.addEventListener('click', (event) => {
    event.preventDefault();
    let reihen = document.createElement('div');
    console.log(reihen);
    umwickeln.appendChild(reihen);

    if (counter % 10 == 0) {
        reihen.classList.add('weiss');
    } else {
        reihen.classList.add('rechteck');
    }
    reihen.textContent = counter++;

})
