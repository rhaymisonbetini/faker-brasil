'use strict'

class RandomArrayElement{

    /**
     * return a rando element from array
     * @param {array} array 
     * @returns any
     */
    randomElement(array){
        return array[Math.floor(Math.random()*array.length)];
    }

    /**
     * return a random number between 2 and 5
     * @param {number} array 
     * @returns int
     */
    randoNumber(){
       return Math.random() * (5 - 2) + 2;
    }


}

module.exports = RandomArrayElement