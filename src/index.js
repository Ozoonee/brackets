module.exports = function check(str, bracketsConfig) {
    charArr = str.split("");
    console.log(charArr);
    let stack = [];
    for (let i=0; i <str.length; i++) {                           
        for (let q = 0; q < bracketsConfig.length; q++) {         
         for (let j = 0; j < 1; j++) {
            if (bracketsConfig[q].includes(charArr[0]) 
            && stack[stack.length-1]==bracketsConfig[q][0]){
             stack.pop()
             charArr.shift()
     } 
            else if (charArr[0]==bracketsConfig[q][0]) {            
                stack.push(charArr.shift())                         
            }
            else if (charArr[0]==bracketsConfig[q][1]) {                  
                return false 
        }}}
}
return stack.length == 0 && charArr.length == 0 ? true : false
}