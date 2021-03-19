"use strict";




function setWeekHours(arg){

  const subtables = arg ?? document.getElementsByClassName('subtable')
 

    for (let i = 0; i < subtables.length; i++) {
    
    let [subtable, label] = [subtables[i], getPreviousSibling(subtables[i], 2)]

  

    const total = sumChildren(subtable, "dataset", "mins"  )
    
    const [hours, mins] = minsToHrs(total)

        
if(!isNaN(hours)){

 label.textContent = `${hours}`

}
    
   
       } 
    
    
    }



