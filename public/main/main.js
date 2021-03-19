"use strict";














window.onload = async ()=>{

    const database = await getData()
    
    const print = printObjects(database)

    const UI = loadUI()

   
}


async function getData(callback) {



    let stream = await fetch("/most-recent");

    let database = stream.json();

    return database

}







async function postData(){


   const object = await sendData()

   clearInputs()
  
  

    printObjects(object)

    const id = objectId(object)
   
    //matchHeight(id)

    openMonth(id)

    openSubtable(id)
    resetSelected()
    setSelected(id)


       

    
    ;(isMonthEnd(id)) ? pingMonth(id) : pingDay() ;

    

    document.getElementById('input2').focus();

}













function deleteAll(){



    fetch("/deleteAll").then((res) => {



    })
    
    document.getElementById('data-display').innerHTML = "";


}







async function deleteThese() {


    const deletes = getDeleteables()




    const options = {


        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ deletes })


    }




    const response = await fetch("/deleteThese", options)

    const json = await response.json()

    const update = await updateDOM(deletes)

}





















async function getData_MONTH() {
   


    const month = getNumericMonth_INPUT()
    const year = document.getElementById("input5").value;



    const options = {


        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ "month": Number(month), "year": Number(year) })


    }


    let response = await fetch("/updatePanel", options)
    let data = await response.json()





    return data;


}




















function sendData() {

    let object = processInformation()



    const options = {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(object)



    }

    



    if (document.getElementsByClassName("month selected").length !== 0) {

    

    }



    fetch("/post", options).then((res) => {



        if (document.getElementsByClassName("month selected").length !== 0) {



            

        }




    });


    

return object

}












