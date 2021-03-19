"use strict";




function sumChildren(parent, property, subproperty){


    const children = parent.children
    
        let acc = 0
    
        for (let i = 0; i < children.length; i++) {
        
            const child = children[i];
         
    ;(subproperty == undefined) ? acc += Number(child[property]) : acc += Number(child[property][subproperty]);
    
    
        }
    
      
    
       return acc
    
     
    }

    


    function getChildrenHeights(parent){


        const children = parent.children
    
        let total = 0
    
    
    
        for (let i = 0; i < children.length; i++) {
    
            const child = children[i];
    
           
    
            total += getHeight(child)
    
    
        }
    
    
    
    return total
    
    }
    
    



    

function styleChildren(parent, styles){


    const children = parent.children



    for (let i = 0; i < children.length; i++) {

    const child = children[i];

for (const style in styles) {
  
child.style[style] = styles[style]


}
    
    }

}


function styleElement(element, styles){


for (const style in styles) {
  
element.style[style] = styles[style]


}
    
    

}



function styleThisClass(CSSclass, styles){




const elements = (typeof CSSclass == 'string') ? document.getElementsByClassName(CSSclass) : CSSclass;


//    if(typeof CSSclass == 'string'){

//     const elements = document.getElementsByClassName(CSSclass)

//    }
   
//    else{

//     const elements = CSSclass

//    }
    
    
    
        for (let i = 0; i < elements.length; i++) {
       
           const element = elements[i]
    
           for(let style in styles){
    
            element.style[style] = styles[style]
    
       }
    
     }
    
    }




    function getInlineStyles(array, properties){

        let acc = 0
        
        
        for (let i = 0; i < array.length; i++) {
           
            const el = array[i];
           let count = 0
        
        for (const key in properties) {
        
        
        
  
        
        count += removePX(el.style[properties[key]]) 
        
         acc += removePX(el.style[properties[key]]) 
                
            }
        
      
        
        }
            return acc
        
        }
        
        
        
        




        
        function getComputedStyles(array, properties){
        
            let acc = 0;
        
        for (let i = 0; i < array.length; i++) {
            
            const el = array[i];
        
            const style = window.getComputedStyle(el)
        
        for (const key in properties) {
           
            
          acc += removePX(style[properties[key]] )
          
        
        
        }
        
        
        }
        
        return acc
        
        }