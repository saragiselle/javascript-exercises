const reverseString = function(text) {

 const reverse = text.split("");

 text = "";

 for(i = reverse.length ; i > 0 ; i--) {
    text +=reverse[i-1];
 }

 return text;

};

// Do not edit below this line
module.exports = reverseString;