var outputStr='';
var numberLength=8;
function generateNumber(number){
        outputStr+=Math.floor(Math.random()*10);
        if(outputStr.length<number){
            generateNumber(8)
        }   
}
generateNumber(numberLength);
console.log(`The Random number is ${outputStr}`);