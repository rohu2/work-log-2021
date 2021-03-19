

// Listen for enter key
window.addEventListener("keydown", (event) => {


let arr = getElementsById(['input2','input3','input1','input4','input5'])

for (const i of arr) {
  
  if (event.key === "Enter" && i === document.activeElement){
    
    postData()

  }


}

    

    
    }) ; 
    
    
    
    
    
    // RIGHT
    document.addEventListener("keydown", (event) => {
    
        const workInput = document.getElementById('input2');
        const nonworkInput = document.getElementById('input3');

      if (event.key === "ArrowRight" && workInput === document.activeElement && workInput.selectionEnd === workInput.value.length ) { 
      
    
        nonworkInput.focus();
    
    
      }
    

      }) ; 
    
    
      
     
    
    
    
    
    // LEFT
    document.addEventListener("keydown", (event) => {
    
        const workInput = document.getElementById('input2');
        const nonworkInput = document.getElementById('input3');

  


      if (event.key === "ArrowLeft" && nonworkInput === document.activeElement && nonworkInput.selectionEnd === 0) { 
      



        workInput.focus();

        setTimeout(()=>{

          //Chrome has an odd quirk where the focus event fires before the cursor is moved into the field; which screws my simple solution up. To fix this:
          
          //You can add a timeout of 0 ms (to defer the operation until the stack is clear)
          
  
          // const val = workInput.value; 
          // workInput.value = '';
          // workInput.value = val; 
  
  
          workInput.selectionStart = workInput.selectionEnd = workInput.value.length;
  
  
        },0)

        


      }
    

  
   
         })  ; 
    








window.addEventListener("keydown", (event) => {


    
let button = document.getElementById('post-button')


    if (event.key === "Backspace" && button.classList.value === 'delete-mode'){
      
     deleteThese()
  
    }
  

      
      }) ; 