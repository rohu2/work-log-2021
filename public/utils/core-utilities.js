"use strict";


const { ['log']: c } = console;



function setAttributes(array, objs) {


    const arr = (!!array.length) ? array : [array];

    for (let i = 0; i < arr.length; i++) {

        const obj = objs[i] ?? objs;



        for (const key in obj) {


            arr[i].setAttribute(key, obj[key])

        }


    }

    if (arr.length > 1) {
        return arr
    }
    else {
        return arr[0]
    }

}




function createElements(type, amount) {

    let arr = [];

    for (let i = 0; i < amount; i++) {


        arr.push(document.createElement(`${type}`))

    }


    return arr

}







function getElementsById(ids) {

    let array = [];


    for (let i = 0; i < ids.length; i++) {

        const id = ids[i]


        array.push(document.getElementById(`${id}`))

    }


    return array

}





function numericize(input) {

    let a;

    if (typeof input == "string") {


        a = input.match(/\d+/g)



    }

    else if (typeof input == "array") {


        a = input


    }

    else if (typeof input == "object") {



        (isArrayStrings(input)) ? a = numericizeStringArray(input) : a = input;



    }



    const array = [];

    for (let i = 0; i < a.length; i++) {

        let index = a[i];
        array.push(Number(index))


    }

    return array
}







function appendChain(array) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (array[i + 1]) {



            array[i + 1].appendChild(array[i])


        }

    }



}













