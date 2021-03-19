"use strict";




function compress_hours_into_minutes(hours_minutes) {

    let split;
    
    
    (typeof hours_minutes === "string") ? split = hours_minutes.match(/\d+/g) : split = hours_minutes;
    
    
    
        if(split == null){
    
    
    console.log("this is a bug that needs fixing")
        }
    
        else if (split !== undefined && split.length == 2) {
    
            let [hours, minutes] = split;
    
            return (Number(hours) * 60) + Number(minutes)
    
        }
    
      
       
        else {
    
            let hours = split;
            return (Number(hours) * 60)
    
        }
    
    
    }






function format_Hours_Minutes(name, value, shell) {

    let work, nonwork;


    if (name == "work") {
        work = value
        shell.innerText = fractionalHours(value)


    }

    else if (name == "nonwork") {
        nonwork = value
        shell.innerText  = fractionalHours(value);

    }


    else if (name == "total") {
 

        shell.innerText = fractionalHours(value);
            }

    //return [work, nonwork]

}



function minsToHrs(a) {

    let h = a / 60;
    let m = Math.ceil((h - Math.trunc(h)) * 60);

    return [ Math.trunc(h), m]

}






function fractionalHours(a) {

    let [h,m] = minsToHrs(a)

if(m === 0 && h === 0){


return  ' · '




}


   else if(m === 0){


 return `${Math.trunc(h)}`


    }


    else if(h===0){

        return `${toFraction(m, 60)}`
       
    }



    else{



 return `${Math.trunc(h)}   ${toFraction(m, 60)} `
    }
   

}





function toFraction(num, denom){

  
  
    let p = Math.floor(num / denom * 100)
     
  if(p < 21  ){  return '' }
  
  if(p >= 21 && p <= 43 ){  return '¼'}
  
  else if (p >= 44 && p <= 70){  return '½' }
  
  else if (p >= 71 && p <= 86){  return '¾' }
  
  else if (p >= 87 ){ return ''  }
  
    
    
        }









