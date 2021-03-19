"use strict";


document.addEventListener("mousedown", (e) => {

    const name = e.target.className;  


    if (/^(month|month selected)$/i.test(name)) {



    setSelected_OnClick(e)

    }

})






function setSelected([date, month, year, week]){
  
document.getElementById(`container${month}(${year})`).classList.add('selected')

}













function setSelected_OnClick(e){

    

    let months = document.getElementsByClassName("month");
    let tables = document.getElementsByClassName("table");
    

 if(( /^(table|month|toggle-container)$/i.test(e.target.className) )) {

let [name, list] = [e.target.className,e.target.classList ]


const id = document.getElementById(e.target.id).getElementsByClassName('tr')[0].id.match(/\d+/g)



        for (let i of months) {

            i.classList.remove("selected")

        }

       

 ;(isMonthEnd(id)) ? pingMonth(id) : setDay(id) ;
       
       
;(name === "month") ?  list.add("selected")  : list.parentElement.classList.add("selected");
     

}}




function setSelected_Top(){

   
    const container = document.querySelector(".month");
    
    if (container !== undefined){
    
    hintDay_INPUT()
    
    container.classList.add("selected")
    
    
    const id = getTopDate();
    
    
    ;(isMonthEnd(id)) ? pingMonth(id) : setDay(id) ;
    
    
        }
        
     
    }
    














function setSelected_Input(){

  
   // let month = document.getElementById("input4").value 
  
   const month = getNumericMonth_INPUT()


    let year = document.getElementById("input5").value 


//find the month and table with the corresponding month value and year value
if(document.getElementById(`month${month}(${year})`) !== null){


const assign = document.getElementById(`month${month}(${year})`).parentElement.classList.add("selected")

}


}








function resetSelected(){

    const months = document.getElementsByClassName("month")

   

    for (let i = 0; i < months.length; i++) {

        let month = months[i];
        
        if (month.className == "month selected") {

            month.classList.remove("selected")

           
        }




    }


}
















function isPageEmpty(){

if(document.getElementsByClassName("month").length == 0  ){

return true

}


}





function findCurrentList() {
    //month
    for (let i = 0; i < month.length; i++) {

        let item = month[i];

        if (item.id == "currentList") {

            

            return i
        }




    }
}





























function removeCurrentList(i) {
    //month
    let item = month[i]

    item.removeAttribute("id")


}















