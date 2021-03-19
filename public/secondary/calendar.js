"use strict";








function pingDay() {


    let [input1, input4, input5] = getElementsById(['input1', 'input4', 'input5'])
    


        input1.value = +input1.value + 1

       input4.value = input4.value


       input5.value = input5.value


    
        hintDay_INPUT()
        
        }
    
    
    


function setDay(id){



    let [input1, input4, input5] = getElementsById(['input1', 'input4', 'input5'])
    

        input1.value = +id[0] + 1

       input4.value =  alphabeticMonth(id[1])


       input5.value = id[2]


    
        hintDay_INPUT()






     
        }










    
    
    
    
    
    
    
    function getTopDate(){
    
    const string = document.querySelector(".month").querySelector(".table").querySelector(".tr").id.match(/\d+/g);
    
    return numericize(string)
    
    
    }
    
    
    
    











function pingMonth([date, month, year]){
    
// let [date, month, year] = [+id[0],+id[1],+id[2]]

const last_day = new Date(year, month, 0).getDate()





let [input1, input4, input5] = getElementsById(["input1","input4","input5" ])


    if (date == last_day) {

   

        // ;(month == 12) ? setValue([input1, input4, input5] , [1,1, +input5.value + 1 ] ) : setValue([input1, input4] , [1 , alphabeticMonth(+month+ 1)] );


        if (month == 12) {

setValue([input1, input4, input5] , [1,1, +input5.value + 1 ] )

     
        }

        else {


setValue([input1, input4] , [1 , alphabeticMonth(+month+ 1)] )

  
        }
    }


    hintDay_INPUT()

}






function setValue(els, values){

for(let i in els){

const el = els[i]

els[i].value = values[i]


}



}






















function invertMonthAlphanumeric(){



}







function getMonth_CONTAINER(){






}





function numericMonth(month){

    let month_value;

    ( isNaN((Number(month)+1)) == true ) ? month_value = getMonthNumber(month) : month_value = month;

   return Number(month_value);

}
  


function alphabeticMonth(month_number){

    if(month_number > 0 && month_number <= 12){
    
        const alphabetic = getMonthName(month_number)
        return alphabetic
    }

  }


  
  function getNumericMonth_INPUT(){

   const month = document.getElementById("input4").value;

  const  numeric_month = numericMonth(month)

return numeric_month

  }
  
  
  


  function getAlphabeticMonth_INPUT(){

    const month_number = document.getElementById("input4").value
    
    
    
    if(month_number > 0 && month_number <= 12){
    
    const name = getMonthName(month_number)
    
    document.getElementById("input4").value = name
    
    
    
    }
    
    
    }
    




    








  

function hintDay_INPUT(){

let [date, year, day] = getElementsById(["input1", "input5", "day"]);

const month = getNumericMonth_INPUT()


const dayName = findDay(date.value, month, year.value)


day.textContent = dayName


}






function hintDay_CLICK(date, year, day){

    //let [date, year, day] = getElementsById(["input1", "input5", "day"]);
    
    const month = numericMonth()
    
    
    const dayName = findDay(date.value, month, year.value)
    
    
    day.textContent = dayName
    
    
    }











function isMonthEnd([date, month, year]){


    let last_day = new Date(year, month, 0).getDate()
    
    
    if (date == last_day) {
    
        if (month === 12) {
    
            return true
    
        }
    
        else {
    
            return true
    
        }
    
    
    }
    
    else{
    
    return false
    
    }
    
    }
    

    
    















    function formatYear(year) {



        const string = [...String(year)];
    
        if (string.length == 2) {
    
            return Number(20 + "" + year)
    
        }
    
        else if (year == undefined) {
    
            let year = new Date().getFullYear()
            return year
    
        }
    
        return year
    
    }
    
    
    
    function formatMonth(month) {
    
      
        if (month == undefined) {
    
    
            let month_selected = document.getElementsByClassName("month selected")[0].getElementsByTagName("table")[0].id;
    
    
    
            return numericize(month_selected.match(/\d+/g))
    
        }
    
    
    }








    
    
    




  
  function getMonthName(number){

    const MONTH_NAME = [0, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
 
 return MONTH_NAME[number]
 
 }




 function getMonthNumber(string){


    const MONTH_NAME = [0, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 

for (let i = 0; i < MONTH_NAME.length; i++) {
    const element = MONTH_NAME[i];
    

if(MONTH_NAME[i] == string){
 
 return i


}


}


 
 }


// [2,1,2,1,2,1,2]

// subStr(str[i])

 function findDay(date, month, year, str ) {



    let day = new Date(year, month - 1, date).getDay();


    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
if(str !== undefined){ return weekdays[day].substring(0,str[day]);}

else{ return weekdays[day] }

}








function numericizeMonth(){

    let month_name = document.getElementById("input4").value


    if(month_name !== "undefined" && month_name !== 0){

    let number = getMonthNumber(month_name)
    
    document.getElementById("input4").value = number
    
    }
    }

