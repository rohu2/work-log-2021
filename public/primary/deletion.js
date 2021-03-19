"use strict";




function invertAddButton(bool) {


    let [postButton, postButtonCore] = getElementsById(['post-button', 'post-button-core'])



    if (bool == true) {



        setAttributes(postButton, {
            'onclick': 'deleteThese()',
            'class': 'delete-mode',
        })

        styleElement(postButtonCore, { 'color': 'red' })

        styleThisClass('subtable', {'pointerEvents' : 'auto'})


        postButtonCore.textContent = 'DELETE'

    }



    else if (bool == false) {

        setAttributes(postButton, {
            'class': 'add-mode',
            'onclick': 'postData()',
        })



        styleElement(postButtonCore, { 'color': 'white' })

        styleThisClass('subtable', {'pointerEvents' : 'none'})

        postButtonCore.textContent = 'ADD'




    }






}












function postButtonOnHover(bool) {


    const buttonCore = document.getElementById("post-button-core");

    ; (bool == true) ? buttonCore.style.opacity = "1" : buttonCore.style.opacity = "0";


}



function toDeleteMode(bool) {

    const button = document.getElementById("delete-button")



    if (bool == true) {



        button.style.background = "red"
        document.addEventListener("click", markTR)
        invertAddButton(bool)


    }


    else if (bool == false) {


        button.style.background = "none"

        document.removeEventListener("click", markTR)

        invertAddButton(bool)

        unmarkTRs()

    }


    setAttributes(button, {"onclick" : `toDeleteMode(${!bool})`} )
    
}






function definitions_markTR() {


    return [window.event, window.event.target, window.event.target.parentNode, window.event.target.nodeName]

}




function markTR() {


    let [tr, name] = [window.event.target.parentNode, window.event.target.nodeName]


    if (name == "TD") {

        ; (containsDelete(tr)) ? tr.classList.remove("delete-me") : tr.classList.add("delete-me");


    }

}




function unmarkTRs() {


    const deletables = document.querySelectorAll(".delete-me")


    for (let i = 0; i < deletables.length; i++) {


        const tr = deletables[i];

        tr.classList.remove("delete-me")



    }



}








function containsDelete(tr) {



    const items = document.querySelectorAll(".delete-me");

    for (let i = 0; i < items.length; i++) {
        const element = items[i];

       


        if (element.isSameNode(tr)) {

            return true


        }


    }

    return false


}













function updateDOM(deletes) {



    for (let i = 0; i < deletes.length; i++) {

        const id = deletes[i];
        const subtable = document.getElementById(`week[${id[3]},${id[1]},${id[2]}]`)
        const table = getParent(subtable, 4)
        const row = getParent(subtable, 3)
        const td = getParent(subtable, 2)
        const div = subtable.parentElement
        const container = getParent(subtable, 5)
        const tr = document.getElementById(`[${id}]`)
        const H3 = container.children[0]



















        if (isCount(subtable, 1) && isCount(table, 1)) {

            tr.remove()
   
        container.removeAttribute('class')
        H3.innerHTML = ''



            styleElement(container,{ 'style' : " '' " ,
                                    'transition' : '1s' ,
                                    'opacity' : '0',
                                    'maxHeight' : '1000px',
                                    'maxHeight' : '0px'   })

            setAttributes([H3,div,td,row,subtable], {  'class' : " '' ",
                                                        'opacity':  '0',
                                                        'transition' :   '0',  })

        setTimeout(()=>{


            container.remove()

        },2000)

           
      

        }

else if(isCount(subtable, 1)){

    setAttributes([div,td,row,subtable], {'class': " '' " })

    removeHeight(subtable,div,td,row)
        
   
   
           setTimeout(() => {
   
               row.remove()
   
           }, 2000)
   
           tr.remove()
}



else{
    tr.remove()  
}

       

        //matchHeight(id)






    }




}




function removeHeight(...rest){

for (const i in rest) {
  
   styleElement(rest[i], {
      
        'height': '0px',
        'margin': '0px',
        'padding': '0px',
        'border': '',
    
      
    })


}








}


// fade out table if it is empty





function isCount(check, count) {

    const childs = check.children
    let arr = 0


    for (const i of childs) {

        arr += 1

    }


   
    return arr === count


}


























function getDeleteables() {


    const items = document.querySelectorAll(".delete-me");



    let array = []

    for (let i = 0; i < items.length; i++) {


        const element = items[i];



        array.push(numericize(element.id))



    }





    return array




}

























function isDeletable() {



    const deletables = document.querySelectorAll('.delete-me')


    let array = []

    for (let i = 0; i < deletables.length; i++) {

        const tr = deletables[i];


        array.push()

    }






    return array


}





