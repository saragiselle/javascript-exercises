const sumAll = function(a,b) {

    let suma = 0;

    if(typeof a != "number" || typeof b != "number" ){

        return "ERROR"

    } else if(a < 0 || b < 0){

        return "ERROR"

    } else if(a < b){

        for(i = arguments[0] ; i <= arguments[1] ; i ++){
            suma+=i;
        }
        return suma;

    } else if (a > b ){
        for(i = arguments[1] ; i <= arguments[0] ; i ++){
            suma+=i;
        }
        return suma;
    }

    
};

// Do not edit below this line
module.exports = sumAll;
