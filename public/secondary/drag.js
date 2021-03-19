"use strict";

function addDragFunctionality(){


const el = document.getElementById('controls')



el.addEventListener('mousedown' , mousedown)


} 







function mousedown(e){



const el = document.getElementById(this.id)



window.addEventListener('mousemove', mousemove)
window.addEventListener('mouseup', mouseup)


let preClientX = e.clientX
let preClientY = e.clientY



function mousemove(e){



const rect = el.getBoundingClientRect()



let deltaX = preClientX - e.clientX;
let deltaY = preClientY - e.clientY;




el.style.left = rect.left - deltaX + 'px'
el.style.top = rect.top - deltaY + 'px'


preClientX = e.clientX
preClientY = e.clientY


}

function mouseup(){

    window.removeEventListener('mousemove', mousemove)
    window.removeEventListener('mouseup', mouseup)


}

}

