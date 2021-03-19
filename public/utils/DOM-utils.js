"use strict";













function getHeight(a){


const style = window.getComputedStyle(a)

const border = (numericize(style.border)[0]) * 2

const padding = (numericize(style.padding)[0]) * 2

const margin = (numericize(style.margin)[0]) * 2

const height = numericize(style.height)[0]




return (height + border + padding + margin)


}







        
        
        
        
        
        
        
        function addPX(number) {
        
        
            return String(number) + "px"
        
        }
        
        
        
        
        
        function removePX(height) {
        
            return Math.floor(Number(height.replace("px", "")))
        
        }
        
        
        
        
        
        
        function adjustPX(height, adjustmentValue) {
        
            let adjustment = String((Math.floor(Number(height.replace("px", ""))) + adjustmentValue) + "px")
        
            return adjustment
        
        }
        
        
        
        