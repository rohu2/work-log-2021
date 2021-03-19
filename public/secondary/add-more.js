"use strict";
 
 // how do I syntacially sweeten this ? I want to await an anonymous function that handles the promise





 async function loadMore(){

 

  requestMore().then((res)=>{



    if(hasContents(res)){

   
 
      const remove =  document.getElementById("more-button").remove()
      
          printObjects(res);
      
         

          closeMonths()

          setWeekHours()

          appendMoreButton() 


       


  }


  else{


    const moreButton = document.getElementById("more-button")
 
 moreButton.textContent = "NO MORE"
       
 moreButton.style.animation = "redPulse 2s"
 
 
 setTimeout(()=>{
 
 
   moreButton.style.animation = ""
 
 },2000)
 
 
         }
 

})

}






  async function requestMore(){


    const ensemble = getOnScreenTables();    

    
    let object = {
    
    0 : ensemble
    
    }
    
    
    
            const options = {
        
                method: "POST",
        
                headers: { "Content-Type": "application/json" },
        
                body: JSON.stringify(object)
        
        
        
            }
     
            

       
           



           const response = await fetch("/loadMore", options);
    

     

       return response.json()

      
        
        

    }








function removeMoreButton(){

document.getElementById("more-button").remove()

}








function appendMoreButton(){
 
    const display = document.getElementById("display-container")
    const button = document.createElement("div")
    
    
    const attributes = {
    
    "id" : "more-button",
    "onclick" : "loadMore()"
    
    }
    
    setAttributes(button, {
    
      "id" : "more-button",
      "onclick" : "loadMore()",
      
      })



    button.textContent = "MORE"
     //button.style.visibility = "hidden"
    display.append(button)


setTimeout(()=>{

  button.style.opacity = 1 ;
  button.style.animation = "fadeIn 1s"

}, 1000)

    }







    
    
    
    





    function getOnScreenTables(){
    
  let tables = document.querySelectorAll(".table")

  let array = []
  
  for (let i = 0; i < tables.length; i++) {
  
    const table = tables[i];
    
  
  
  array.push(numericize(table.id))
  
  
  }
  

  return array
  
  }
  
    



   
    
    
    
    
    
    
    
    
    
    
    function hasContents(load){
    
    
    if(typeof load[0] == "undefined"){
    
      return false
    
    
    }
    
    return true
    
    }
    
    
    
    
    
    


            