"use strict";

function getPreviousSibling(el, n){


    for (let i = 0; i < n; i++) {
    
    el = el.previousElementSibling
      
    }
    
    return el
    
    }



 





    function numericizeStringArray(array){



        let ARRAY_OF_NUMBERS = [];
        
        
        for (let i = 0; i < array.length; i++) {
        
            const element = array[i];
        
            const noLetters = element.replace(/\D+/g, '');
        
            ARRAY_OF_NUMBERS.push(Number(noLetters))
        }
        
        
        return ARRAY_OF_NUMBERS
        
        }
        



        function isArrayStrings(array){



            if(array == null){
            
            
            return
            
            
            }
            
            
            
            let bool = false
            
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                
            
            
            if(typeof element == "string"){
            
            bool = true
            
            }
            
            
            }
            
            
                return bool
            
            }
            














function setInnerText(els,texts){

    for (let i = 0; i < els.length; i++) {
    
 
        els[i].innerText = texts[i]
 
        
    }
 
             }
 






function objectId(object){

    return  [object.date , object.month, object.year, object.week]
      
  }





function getParent(el, iteration){

    let target = el
    
    
    for (let i = 0; i < iteration; i++) {
        
        
    target = target.parentElement
      
    
    }
    
    
    return target
    
    }
    




function isArray(sample){

    if(sample instanceof Array == true){
    
    
    return true
    
    }
    
    else {
    
    return false
    
    }
    
    }
    
    
    
    function isObject(sample){
    
    
        
        if(sample instanceof Object && sample instanceof Array == false){
    
           return true
        
        
        }
    
        else{
    
    return false
    
        }
    
    
    }
    







function createElements_DIFFERENT(array) {


    let arr = [];

    for (let i = 0; i < array.length; i++) {

    
        arr.push(document.createElement(`${array[i]}`))

    }

  
    return arr

}
















function findSet(array) {

    let set = [... new Set(array)]


    return set

}




function clear() {

    document.getElementById("deletion").value = ""


}






// adjust this for all months on any year

































function detectDuplicates(){

    let arr = []
    
    const object = {
    
    1 : "",
    4: "", 
    5: ""
    
    
    }

 
    
        for ( i in object) {
    
         arr.push(document.getElementById(`input${i}`).value)
    
    
        }
    
    let [date, month, year] = arr;
    
    
     const duplicate = document.getElementById(`[${date},${month},${year}]`)
    
    
        if (duplicate == null){
    
    return false
    
    
        }
    
        else{
    
    return true
    
        }
    
    }









    
    
    
    

    
    
    