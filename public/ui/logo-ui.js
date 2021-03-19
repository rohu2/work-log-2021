


function createDataButton() {

    let [el1, el2, el3] = createElements('div', 3)

    let txt = document.createTextNode('ADD DATA');

    let attrs1 = {

        'id': 'add-data',
        'title': 'Add data',

    }

    let attrs2 = {

        'id': 'add-data-subtitle',


    }

    let attrs3 = {

        'id': 'add-data-container',


    }



   setAttributes([el1,el2,el3],  [attrs1,attrs2,attrs3])

 

    el2.appendChild(txt)

    el3.append(el1, el2)

const logoContainer = document.getElementById('logo-container')

logoContainer.appendChild(el3)

}




