
//TASK ONE

const convertFarhToCelcius = (deg) => {

    if (arguments.length > 1) {
        return "invalid number of arguments";
      }

    let changeToInt;

    changeToInt = parseInt(deg);

    if (isNaN(changeToInt)) {

        return `${JSON.stringify(deg)} is not a number but a/an ${Array.isArray(deg) ? "array" : typeof deg}`;

    }

    let celcius = ((deg - 32) * 5) / 9;

        return celcius.toFixed(4);
}


console.log(convertFarhToCelcius(0));



//TASK TWO

const checkYuGiOh = (n) =>{
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    arr.forEach((num, index, array) =>{

        if (num % 2 === 0) {

            array[index] = 'yu';

        }else if(num % 3 === 0){

            array[index] = 'gi';

        }else if(num % 5 === 0){

            array[index] = 'oh';

        }

    })

    if (isNaN(n)) {
        return `Invalid Parameter: ${JSON.stringify(n)}`;
    }
    
    return arr;
}

console.log(checkYuGiOh(10));