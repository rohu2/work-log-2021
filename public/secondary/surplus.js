"use strict";

function matchHeight([date, month, year, week]){

    
        const subtable = document.getElementById(`week[${week},${month},${year}]`)
        const nestedDiv = document.getElementById(`div[${week},${month},${year}]`)
    
    
        const rect = subtable.getBoundingClientRect()
        nestedDiv.style.height = rect.height + 'px'
     
    
        }
    
    