//Reverse a String//

const String_S  = "abc"

function ReverseString(str) {
   return  str.split("").reverse().join("");
}

const String_new = ReverseString(String_S);
console.log(String_new);