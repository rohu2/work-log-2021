"use strict";




function printObjects(db) {

  

    const firstProperty = db[Object.keys(db)[0]]

    const database = (typeof firstProperty == "object") ? db : { db };

const isdb = (typeof firstProperty == "object") ? true : false

 

    for (let i in database) {


        let [id, tr] = id_tr(database[i])

       

        createContainer(id,isdb)

        createTable(id)

        createSubTable(id, isdb)


        appendTR(id, tr)


    

    }


  

  

}

















function dynamicInsert(el, parent, prop, callback) {



    const insert = callback(el[prop])



    const siblings = parent.children


    if ((/\b(0)\b/).test(siblings.length)) {

        parent.append(el)

        return
    }




    for (let i = 0; i < siblings.length; i++) {

        const sibling = siblings[i];
        const comparer = callback(sibling[prop])



        if (insert > comparer) {

            parent.insertBefore(el, sibling)
            return

        }

        else if (siblings[i + 1] == undefined) {

            parent.append(el)
            return

        }

    }

}



function appendTR(id, tr) {


    const subtable = document.getElementById(`week[${id[3]},${id[1]},${id[2]}]`)





    dynamicInsert(tr, subtable, "id", getId)



}


function getId(x) {


    if (x !== undefined) {




        return x.match(/\d+/g).map(x => Number(x))[0]

    }
}







function createContainer([date, month, year], bool) {



    if (document.getElementById(`container${month}(${year})`)=== null) {


        let [dataDisplay, container] = [document.getElementById('data-display'), document.createElement("div")]



        setAttributes(container, {
            "class": "month",
            'id': `container${month}(${year})`,

        })


        styleElement(container, { 'animation': "fadeIn 2s" })




        dynamicInsert(container, dataDisplay, 'id', encodeYearMonth)


        if(bool === false){

         
            closeMonths(getClassmate(container, 1))
        
        }


    }

};





function createTable([date, month, year]) {



    if (document.getElementById(`month${month}(${year})`)=== null ) {


        const container = document.getElementById(`container${month}(${year})`)
        let [h3, table] = createElements_DIFFERENT(["h3", "table"])




        setAttributes(table, {
            "class": "table",
            'id': `month${month}(${year})`,

        })


        setAttributes(h3, { "class": "toggle-container", })


        h3.textContent = `${getMonthName(month)}  ${year}`;




        container.append(h3, table);


    }
}


//how to get the subtable that is beneath this newly created one??
// DOM traversal - nodelist, match ids then just get the index that is 1 less .. ?
// more abstractly this is 'How do I use an id to get an elements classmates and then find the classmate sitting behind / infront of it







function createSubTable([date, month, year, week],bool) {

    const subtable = document.getElementById(`week[${week},${month},${year}]`);

   

    if (subtable === null) {


        const table = document.getElementById(`month${month}(${year})`)

        let [row, td, div, label, button, subtable] = createElements_DIFFERENT(["tr", "td", "div", "div", "div", "table"])


        let header = createHeader()




        setAttributes(div, {
            "class": "nested-div",
            'id': `div[${week},${month},${year}]`,

        })




        setAttributes(subtable, {
            "class": 'subtable',
            "id": `week[${week},${month},${year}]`,

        })



        setAttributes(row, {

            "id": `row[${week},${month},${year}]`,

        })



        setAttributes(label, { "class": "week-label" })


    


        div.append(label, header, subtable)

        appendChain([div, td, row])

        dynamicInsert(row, table, "id", getId)

        setHeaders([subtable])

if(bool === false){

    closeNestedDiv(getClassmate(div, 1))

}

       // getClassmate(div, 1)
        //closeNestedDiv(getClassmate(div, 1))
        //closePriorWeek(id)
     
    }




}





function closeNestedDiv(div){

    if(div !== undefined){
        

   const label = createLabel()
   const header = div.children[0]
   const subtable = div.children[1]
   
   
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
     
     //styleElement(container, { 'height' : 'auto' })
   
   
   
 setWeekHours([subtable])
   
   
   
   }
   
   
   
   
   
   }
   





   function getClassmate(el, dir){

   
  
    const els = document.getElementsByClassName(el.className)
   


    for (let i = 0; i < els.length; i++) {
    

        
        const neighbour = els[i+dir]
        
  
       //&& neighbour !== undefined
        if( el.isSameNode(els[i])   ){  
            
          
        
        return neighbour
        
        
        }
                
        }


}



















function createHeader() {

    let [th1, th2, th3, th4, th5] = createElements('span', 5)

    let [header, thContainer] = createElements('div', 2)

    setTextContent({

        //\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 

        1: [th1, ''],
        2: [th2, `work`],
        3: [th3, `other`],
        4: [th4, `total`],
        5: [th5, `efficiency`],

    })

    setAttributes([th1, th2, th3, th4, th5], { 'class': 'header' })
    th5.classList.add('spaced')

    setAttributes(thContainer, { 'class': 'sub-header-container' })


    setAttributes(header, { 'class': 'header-container' })

    thContainer.append(th2, th3, th4)
    header.append(thContainer, th5)

    return header

}









function setTextContent(arr) {

    let array = []


    for (const key in arr) {


        array.push(arr[key][0].textContent = arr[key][1])


    }




    return array


}



















function encodeYearMonth(x) {





    if (x !== undefined) {



        return Number(x.match(/\d+/g)[1]) + Number(x.match(/\d+/g)[0] * 0.01)



    }


}






















function id_tr(variable) {


    let id = [variable.date, variable.month, variable.year, variable.week];

    const shells = makeShells()

    assignValues(shells, variable)


    const tr = createRow(shells, id)


    setAttributes(tr, { 'data-mins': `${variable.work}` })

    return [id, tr]


}








function makeShells() {

    const obj = {}

    let [td1, td2, td3, td4, td5] = createElements('td', 5)


    const storage = {

        date: td1,
        work: td2,
        nonwork: td3,
        total: td4,
        efficiency: td5


    }

    return storage

}



function assignValues(storage, database_entry) {


    for (let i in storage) {


        let shell = storage[i];
        let name = i
        let value = database_entry[i]
        let date = database_entry.date;
        let month = database_entry.month;
        let year = database_entry.year;



        switch (name) {


            case 'work':
                shell.innerText = fractionalHours(value);
                break;

            case 'nonwork':
                shell.innerText = fractionalHours(value);
                break;

            case 'total':
                shell.innerText = fractionalHours(value);
                break;

            case 'date':
                shell.textContent = `${findDay(date, month, year, [2, 1, 2, 1, 2, 1, 2])} ${date}`;
                break;

            case 'efficiency':
                shell.textContent = !!value == true ? value + '%' : '·';
                break;

                default:
                    console.log('c%This has fallen back to its default','color:red;')
                    
        }

    }


}




function createRow(storage, id) {

    let [date, month, year, week] = id

    const tr = document.createElement("tr");




    setAttributes(tr, {
        'class': "tr",
        'id': `[${date},${month},${year},${week}]`
    })


    tr.append(storage.date, storage.work, storage.nonwork, storage.total, storage.efficiency);

    return tr


}


function addDateID(i, date, shell, database_entry) {


    if (i == "date") {

        shell.setAttribute("id", `[${database_entry.date},${database_entry.month},${database_entry.year}]`)






    }

}










































function setWeekID(date, month, year) {



    const length = monthLength(month, year)

    const first = firstMonday(month, year)



    const all = allMondays(first, length)



    const id = weekID(date, all, length)

    return id


}




function weekID(date, mondays, length) {



    for (let i = 0; i < mondays.length; i++) {


        if (date < mondays[i]) {

            return 0


        }


        else if (date >= mondays[i] && date < mondays[i + 1]) {


            return i + 1

        }


        else if (mondays[i + 1] == undefined && mondays[i] <= length) {


            return i + 1

        }


    }

}










function monthLength(month, year) {


    const length = new Date(year, month, 0).getDate()

    return length

}











// this ost        
function firstMonday(month, year) {


    const FIRST = 1

    for (let i = FIRST; i < 8; i++) {

        const day = new Date(year, month - 1, i)



        if (day.getDay() === 1) {


            return i


        }
    }
}


function allMondays(first, length) {

    let [second, third, fourth, fifth] = [first + 7, first + 14, first + 21, first + 28]


    if (fifth < length) {


        return [first, second, third, fourth, fifth]
    }


    else {

        return [first, second, third, fourth]
    }


}



