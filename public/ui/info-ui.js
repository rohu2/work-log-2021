"use strict";

window.addEventListener("load", ()=>{


  const canvas = document.getElementById("canvas")
  const context = canvas.getContext("2d")
  
  
   canvas.height = 22
   canvas.width = 22
  
   canvas.height = 25
   canvas.width = 25
  
  
  
  context.beginPath()
  
  context.moveTo(12.5,1)
  
  context.lineTo(23,20)
  context.stroke()
  context.strokeStyle = 'yellow';
  context.lineWidth = 2
  
  context.lineTo(1,20)
  context.stroke()
  context.strokeStyle = 'yellow';
  context.lineWidth = 2
  
  
  context.closePath()
  context.stroke()
  context.strokeStyle = 'yellow';
  context.lineWidth = 2
  
  
  
  })




function toggleSubtitleContainer(bool){



const subtitleContainer = document.querySelectorAll('.subtitle-container')


for (let i = 0; i < subtitleContainer.length; i++) {

  const element = subtitleContainer[i];

  if(bool == true){


  element.style.opacity = '0'
  
}

else if(bool == false){

setTimeout(()=>{ 


  element.style.opacity = '1'

},2000)

  

}

}



}









function toggleInformation(bool){




let [logo,subtitle, container] = getElementsById(["canvas", "info-subtitle", 'info-container'])

    
    
    if(bool == true){
   
   

let [backdrop, display, displayContainer] = createElements("div", 3)
let [img] = createElements('img', 1 )
let [link] = createElements('a', 1 )

link.setAttribute('href','https://github.com/rohu2/')
img.setAttribute('src', '../img/github-logo.png')

setAttributes([display,displayContainer,backdrop, logo],[
    
    {"id":"information-display"},
    {"id":"info-display-container"},
    {"id":"backdrop"},
    {"onclick" : `toggleInformation(${!bool})`}])     


  // setInnerText([subtitle,display],['',text])

  setInnerText([display],[myText.text])

 

  styleElement(container, {'zIndex':'3'})
 

  

  styleElement(backdrop, {'height': document.body.clientHeight + "px" })

  link.append(img)
displayContainer.append(link)

  appendChain([display,displayContainer, backdrop, document.body])
    



   fadeIn([display,backdrop], 1)

   toggleSubtitleContainer(bool)
   
  


    }
    


    else if(bool == false){
       
    let [backdrop, display] = getElementsById(["backdrop","information-display"])

    styleElement(container, {'zIndex':'0'})
   

    setAttributes(logo,{"onclick" : `toggleInformation(${!bool})`})  
   
     fadeOut([display,backdrop], 1)

     toggleSubtitleContainer(bool)

    }
    
    }
    
    







