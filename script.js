
//TASK ONE

/* 
    A function named "convertFahrToCelsius" 
    that takes a single parameter 
    and converts it to a celsius value
    the function should meet these criterias
    -   celcius value returned must be corrected to 4 decimal places 
    -    if the parameter passed is not a valid number or number in a string
        return a string with the format below:
        `<value> is not a valid number but a/an <value.type>.`
 */

const convertFarhToCelcius = (deg) => {

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

/*
 
Write a function named "checkYuGiOh" that 
    - takes argument n
    - create array from 1 to n
    - replace factor of 2 with "yu"
    - replace factor of 3 with  "gi"
    - replace factor of 5 with "oh"
    - replace multiple factors with their corresponding string and seperate with hyphen
    - check that parameter is a valid number
    - return `invalid parameter: ${parameter}` for invalid parameter
    - log resulting array to console
    - return resulting array
 */

const checkYuGiOh = (n) =>{
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    arr.forEach((num, index, array) =>{

        

     if(num % 2 === 0 && num % 3 === 0  && num % 5 === 0){

             array[index] = 'yu-gi-oh';

        }else if(num % 2 === 0 && num % 3 === 0 ){

             array[index] = 'yu-gi';

        }else if(num % 2 === 0 && num % 5 === 0 ){

             array[index] = 'yu-oh';

        }else if(num % 3 === 0 && num % 5 === 0 ){

             array[index] = 'gi-oh';

        }else if(num % 2 === 0){

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
