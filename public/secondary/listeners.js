




function setHeaders(arg){

let subtables = arg ?? document.querySelectorAll('.subtable')


for (let i = 0; i < subtables.length; i++) {
  
  const subtable = subtables[i];
  
  const container = getParent(subtable,5)

  const div = subtable.parentElement

let header = div.children[1]
    





    onHover(
    
             div, 
            
            (e)=>{
              
             
              if(e.target.getBoundingClientRect().height > 40){

                header.style.opacity = '1';
                header.style.transition = '1s' ;
                header.style.height = '5px'; 

              }
              
                  
                                                }, 
            
            (e)=>{header.style.opacity = '0';
                 header.style.transition = '1s';
                 header.style.height = '0px'     } 
    
            )
        
    
    

          }


} 













    







