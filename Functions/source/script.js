let endsWith = (str,compareLetter) => {
    if(str.charAt(str.length-1)===compareLetter)
    console.log('true');
    else
    console.log('false');
}
endsWith("swaroop","p");

let multiplyNumbers=(numberOne,numberTwo)=> console.log(`${numberOne*numberTwo}`);

multiplyNumbers(4,5);

let sliceArray = (array, start, end) => {
    var arr = [];
    for (let i = start; i < end; i++) {
        arr.push(array[i]);
    }
    console.log(arr);
}
var array = [1, 2, 3, 4, 5];
sliceArray(array, 3, 5);

let foreach = array => {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]); 
    }
}
foreach(array);

let lowerCase = (str) => {
    console.log(str.toLowerCase());
}
lowerCase("SWAROOP");

