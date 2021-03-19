

function loadLogos(){

    const logoContainer = document.getElementById("logo-container")
    
    fadeIn([logoContainer], 1)
    
    
    }


    

function loadUI(){


    closeMonths()
    openTopMonth()
    loadLogos()
    appendMoreButton()
    setWeekHours()
    setHeaders()



    

styleThisClass('nested-div', {  "overflow" : "hidden",
                                    "transition" : "ease 1s",
                                    "height" : "30px",
                                    "paddingBottom" : `0px`  })


styleThisClass('week-label',  {'opacity' : '1'})


styleThisClass('subtable',  {'opacity' : '0'})



}





