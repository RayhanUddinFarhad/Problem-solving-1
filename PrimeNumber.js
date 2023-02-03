//prime number calculator


function ISThisPrime (number) {

    if(number<2) {

        return false;
    }

    else {

        for (let i = 2 ; i>Math.sqrt(number); i++) {

            return false;
        }

    }

return true;

}



const input =73;

const result = ISThisPrime(input)
if (result == true) {

    console.log (input , "Is a prime number")
}

else {

    console.log(input, "is not a prime number")
}




