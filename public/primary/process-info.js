'use strict'



function processInformation(){

    const NUMBER_OF_INPUT_BOXES_PLUS_1 = 6;
    const FIRST_INPUT_BOX_NUMBER = 1;

    let object = {};






    for (let i = FIRST_INPUT_BOX_NUMBER; i < NUMBER_OF_INPUT_BOXES_PLUS_1; i++) {

const input = document.getElementById(`input${i}`).value



if(input !== ""){

        object['input' + i] = document.getElementById(`input${i}`).value.match(/\d+/g);

}

else if(input == ""){


    object['input' + i] = 0

}

        
if(i == 4){

const month = document.getElementById(`input${i}`).value

let number;

( isNaN((Number(month)+1)) == true ) ? number = getMonthNumber(month) : number = month;


object['input' + i] = number



}


    }



    object.input2 = compress_hours_into_minutes(object.input2)
    object.input3 = compress_hours_into_minutes(object.input3)

    object.input6 = object.input2 + object.input3;
    object.input7 = Math.trunc((object.input2 / object.input6) * 100);



    const INPUTS_AND_OTHER_INFO_PLUS_ONE = 8;

    for (let i = 1; i < INPUTS_AND_OTHER_INFO_PLUS_ONE; i++) {

        object['input' + i] = Number(object['input' + i])


    }





    object = {

        date: object.input1,
        month: object.input4,
        year: object.input5,
        week: setWeekID(object.input1, object.input4, object.input5),
        work: object.input2,
        nonwork: object.input3,
        total: object.input6,
        efficiency: object.input7

    }

  


    return object



}
