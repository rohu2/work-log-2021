"use strict";


function onHover(el,cb1, cb2){

    el.addEventListener("mouseover", e => {
       
    
        cb1(e)


      });
      
     el.addEventListener("mouseout", e => {
    
     
        cb2(e)


      });


  }








function fadeOut(elements, time){

 

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    

  element.style.transition = `${time}s`
        element.style.opacity = "0"
    
        setTimeout(()=>{

            element.remove()
        
        },(time * 1000))



}

      
 }






 function squeezeOut(elements, time){



for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    

  element.style.transition = `${time}s`
  element.style.animation = `squeezeOut ${time}s`
        element.style.opacity = "0"
    
        setTimeout(()=>{

            element.remove()
        
        },(time * 1000))



}

      
 }

















 function fadeIn(elements, time){

if(isArray(elements)){
    for (let i = 0; i < elements.length; i++) {
        
        const element = elements[i];

        

        element.style.animation = `fadeIn ${time}s`
       
        setTimeout(()=>{
       
       
           element.style.opacity = "1"
           
           },(time * 1000))



    }

}


if(!isArray(elements)){ 

    const element = elements;

    element.style.animation = `fadeIn ${time}s`
   
    setTimeout(()=>{
   
   
       element.style.opacity = "1"
       
       },(time * 1000))



}




 }


    
 
 function transition(element,time){

    element.style.transition = `${time}s`
    
setTimeout(()=>{ element.style.transition = ""     },1000)




}

