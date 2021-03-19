'use strict';



function clearInputs(){


    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    
    }



function makeButton() {
 
   

    createDataButton()

    document.getElementById('add-data').addEventListener('click',firstClick)
    


}



function firstClick(){



    createControls()
    createControlsDashboard()

    addDragFunctionality()
    

    document.getElementById('add-data').removeEventListener('click',firstClick) 
    document.getElementById('add-data').setAttribute('onclick',  'toggle(false)')

    setSelected_Top()
    document.getElementById('input2').focus()
}



// THIS IS A BAD NAME, A BAD FUNCTION, A PIECE OF CRAP 
const toggle = (bool) => {


let display = ['0%', '100%']
    


    const button = document.getElementById('add-data')
    
        const controls = document.getElementById('controls');
    
      


transition(controls,1)

    
    controls.style.opacity = `${display[+bool]}`;
  
    (bool === true ) ? button.style.zIndex = '3' :  button.style.zIndex = '1' ;
    (bool === true ) ? controls.style.pointerEvents = 'auto' :  controls.style.pointerEvents = 'none' ;    
    (bool === true ) ?  document.getElementById('input2').focus() : ''
    
    
        document.getElementById('add-data').setAttribute('onclick', `toggle(${!bool})`)
    
       
       
    
    }





    

























function createControlsDashboard() {


    const controls = document.getElementById('controls')

    let [deletion, buttonCore, button, day, container1, container2, container3] = createElements('div', 7)

    let [work, nonwork, date, month, year] = makeInputs()

    let [circle1, circle2] = makeCircles()

    container1.setAttribute('id', 'circle-container')
    container2.setAttribute('id', 'input-container')
    container3.setAttribute('id', 'post-button-container')


    day.setAttribute('id', 'day')




    setAttributes(button, {

        'onclick': 'postData()',
        'id': 'post-button',
        'class' : 'add-mode',


    })


  
    buttonCore.setAttribute('id', 'post-button-core')

    buttonCore.textContent = 'ADD'


deletion.setAttribute('id', 'delete-button')
deletion.setAttribute('onclick', 'toDeleteMode(true)')


// buttonCore.setAttribute('onmouseenter', 'postButtonOnHover(true)')
// buttonCore.setAttribute('onmouseleave', 'postButtonOnHover(false)')

    button.append(buttonCore)




    circle1.append(work)
    circle2.append(nonwork)

    container1.append(circle1, circle2)
    container2.append(day, date, month, year)
    container3.append(button)

    controls.append(container1)
    controls.append(container2)
    controls.appendChild(container3)
    controls.appendChild(deletion)

   


}







function createBackdrop(){


    let backdrop = document.createElement('div')
    
    backdrop.setAttribute('id','backdrop')

    document.body.append(backdrop)

    styleElement(backdrop, {'height': document.body.clientHeight + "px" })
  
    
    fadeIn(backdrop, 1)

   

}












function postButtonOnHover(bool) {


    const buttonCore = document.getElementById('post-button-core');

    ;(bool == true) ? buttonCore.style.opacity = '1' : buttonCore.style.opacity = '0' ;


}




















function createDataButton() {

    const logoContainer = document.getElementById('logo-container')

    let [el1, el2, el3, el4, el5] = createElements('div', 5)

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

    const attrs4 = {

        'class': 'logo-wrapper',

    }


   setAttributes([el1,el2,el3,el4],  [attrs1,attrs2,attrs3,attrs4])

 

    el2.appendChild(txt)

    el5.append(el1)

    el3.append(el5,el2)

    el4.append(el3)



logoContainer.appendChild(el4)

}
























function createControls() {


    let div = document.createElement('div')


    document.body.appendChild(setAttributes(div, {

        'id': 'controls',
        'class' : 'control',
       


    }))


}












function makeCircles() {


    let [div1, div2] = createElements('span', 2)

    return  setAttributes([div1, div2],{ 'class' : 'circle' })


}


























function makeInputs() {

    let [inp1, inp2, inp3, inp4, inp5] = createElements('input', 6)

    let attrs1 = {

        'placeholder': 'work' ,
        'value': '',
        'id': 'input2',
        'class': 'input',

    }

    let attrs2 = {


        'placeholder': 'other' ,
        'value': '',
        'id': 'input3',
        'class': 'input',

    }

    let attrs3 = {

        'placeholder': 'date' ,
        'value': '',
        'id': 'input1',
        'oninput': 'hintDay_INPUT()',

    }


    let attrs4 = {

        'placeholder': 'month' ,
        'value': '',
        'id': 'input4',
        'onblur': 'hintDay_INPUT()',
        'onfocusout': 'getAlphabeticMonth_INPUT()',
        'onfocusin': 'numericizeMonth()',

    }

    let attrs5 = {

        'placeholder':  'year' ,
        'value': '',
        'id': 'input5',
        'oninput': 'hintDay_INPUT()',

    }


return setAttributes([inp1, inp2, inp3, inp4, inp5], [attrs1,attrs2,attrs3,attrs4,attrs5])
    


}



























































































































































































































































































