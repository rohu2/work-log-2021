"use strict";

function closeMonths(arg) {



    let months = arg === undefined ? [...document.querySelectorAll('.month')].slice(-3) : [arg];


    for (let i = 0; i < months.length; i++) {



        const container = months[i];
        const table = container.querySelector('.table')

        const weekLabels = container.querySelectorAll('.week-label')
        const subtables = container.querySelectorAll('.subtable')
        const nestedDivs = container.querySelectorAll('.nested-div')


        styleElement(container, {

            "transition": "all 1s 0.5s",
            "maxHeight": "40px",
            'overflow': "hidden"
        })



        styleElement(table, {
            'transition': `1s`,
            'opacity': `0`
        })


        styleThisClass(nestedDivs, {
            "overflow": "hidden",
            "transition": "ease 1s",
            "height": "30px",
            "paddingBottom": `0px`
        })


        styleThisClass(weekLabels, { 'opacity': '1' })


        styleThisClass(subtables, { 'opacity': '0' })



    }

}



function openMonth([date,month,year,week]){


    const container = document.getElementById(`container${month}(${year})`)

    const table = container.querySelector('.table')


    styleElement(container, {

        'maxHeight': '2000px',
        "overflow": "hidden"
    })




    fadeIn(table, 1)





}




function openTopMonth() {

    const container = document.querySelector('.month')

    const table = container.querySelector('.table')


    styleElement(container, {

        'maxHeight': '2000px',
        "overflow": "hidden"
    })




    fadeIn(table, 1)


}










document.addEventListener("click", (e) => {

    const target = e.target;
    const name = e.target.className;

    let container;
    let table;
  
    //table = container.querySelector('.table');



   
    if (/^(toggle-container|month|month selected)$/i.test(name)) {

        switch (name) {

            case 'toggle-container':

                container = target.parentElement;
               
                table = container.querySelector('.table');
                
                break;

            case 'month':

                container = target;
                table = container.querySelector('.table');
               
                break;

            case 'month selected':

                    container = target;
                    table = container.querySelector('.table');
                   
                    break;



            default:
                console.log('c%This switch function has fallen back to its default', 'color:red;');


        }


        const bool = getHeight(container) > 70


        if (bool == true) {

            styleElement(container, {
                    
                "transition": "1s",
                "maxHeight": "40px",
                'overflow': "hidden",

            })



            styleElement(table, {
                'transition': `1s`,
                'opacity': `0`,
            })





        }



        else if (bool == false) {



            styleElement(container, {
                
                "transition": "all 2s",
                'maxHeight': '2000px',
                "overflow": "hidden"

            })


            fadeIn(table, 1)




        }



    }

})




























