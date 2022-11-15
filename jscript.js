function remove(){
    const email = document.getElementById('email');

        if (email.textContent === ' Email Address ') {
        email.textContent='';
         }

    const parent = document.getElementById('left-bottom');
    const child1 = document.getElementById('para');
    const child2 = document.getElementById('falsepara');
    const child3 = document.getElementById('falseimg');
        if (parent.contains(child2) === true) {
            parent.removeChild(child2);
            parent.removeChild(child3);
            document.getElementById('type-div').style.borderColor = 'hsl(0, 80%, 86%)';
        } else if (parent.contains(child1) === true) {
            parent.removeChild(child1);
        }
}

function emailCheck() {

    const email = document.getElementById('email');
    const regex = new RegExp('^.+@.+\..+$');
    const isValid = regex.test (email.textContent);

    const parent = document.getElementById('left-bottom');
    const child1 = document.getElementById('para');
    const child2 = document.getElementById('falsepara');
    const child3 = document.getElementById('falseimg');

    if (parent.contains(child1) !== true && isValid === true) {
        const para = document.createElement('p');
        para.textContent = 'Email is valid';
        para.id= 'para'
        para.style.color = 'green';
        parent.appendChild(para);
        }

    if (parent.contains(child2) !== true && isValid !== true) {
        const falsePara = document.createElement('p');
        falsePara.textContent = 'Please provide a valid email';
        falsePara.id= 'falsepara'
        falsePara.style.color = 'hsl(0, 93%, 68%)';

        const falseImg = document.createElement('img');
        falseImg.src='./images/icon-error.svg';
        falseImg.id='falseimg'

        document.getElementById('type-div').style.borderColor = 'red';
        parent.appendChild(falsePara);
        parent.appendChild(falseImg);
        }
}


