"use strict";




document.addEventListener("click",(e)=>{

const target = e.target
const name = e.target.className


if ( /^(week-label|nested-div)$/i.test(name)){

    
    let container;
    let table;
    let div;
    let label;
    let subtable;
    let header;

    


   
switch(name){

    case "week-label":
       
        container = getParent(target,  5);
        table = getParent(target,  4)
        div = target.parentElement;
        label = target;
        subtable = target.nextSibling.nextSibling;
        header = target.nextSibling
        break;

    case "nested-div":
       
      
       container = getParent(target, 4);
       table = getParent(target,  3);
       div = target;
       label = createLabel()
       subtable = target.children[1];
       header = target.children[0];
       break;

       default:
        container = 'unknown';
        table = 'unknown';
        div = 'unknown';
        label = 'unknown';
        subtable = 'unknown';

}




const bool = getHeight(div) > 100




if(bool == false){
 


styleElement(header, {
'transition': '1s', 
'opacity': '1', 
'height': '5px', 

                                                  })




    styleElement(div, { "transition" : "ease 1s", 
                         "height" : `${getChildrenHeights(div)-30}px`,
                  
                         "paddingTop" : '30px',
                         'paddingBottom' : '30px',
                         'margin' : '10px'
                                                                            })

   

    
    label.remove()
   
    

    styleElement(subtable, {
                            "transition" : "1s",
                            "opacity" : "1"})
}



  styleElement(container, { 'height' : 'auto' })



if(bool == true){




  styleElement(div, { "overflow" : "hidden",
                      "transition" : "ease 1s", 
                      "height" : "30px",
                      "paddingTop" : '0px',
                      'paddingBottom' : '0px' ,
                      'margin' : '10px'})


styleElement(header, {'opacity' : '0',
                        'transition' : '1s',
                      'height' : '0px'     } )
 

  div.insertBefore(label, header)



fadeIn(label, 2.5)



  styleElement(subtable, {"opacity" : "0"})
  
  styleElement(container, { 'height' : 'auto' })



setWeekHours([subtable])

   }





}})



function createLabel(){

   let label = document.createElement('div')
    label.setAttribute('class', 'week-label')

    setAttributes(label ,{'class': 'week-label', })

styleElement(label, { 
        
  "opacity" : "0",
  'transition' : '0.7s'   } )
   

    return label

}











function openSubtable([date,month,year,week]){


    const div = document.getElementById(`div[${week},${month},${year}]`)
    
    const container = getParent(div,  4);

    const label = div.children[0]
    const subtable = div.children[2]

    
  
  
   

    if(label.className === 'week-label'){


        styleElement(div, { "transition" : "ease 1s", 
        "height" : `${getChildrenHeights(div)-30}px`,
        "paddingTop" : '30px',
        'paddingBottom' : '30px',
        'margin' : '10px'
                                                           })




     label.remove()



    styleElement(subtable, {
         "transition" : "1s",
        "opacity" : "1"})


        styleChildren(subtable, {'opacity':'1'},)


    styleElement(container, { 'height' : 'auto' })
    

}







}







































