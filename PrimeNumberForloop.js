for (let index = 2; index < 100; index++) {


    let isprime = true;


    for (let i = 2; i<Math.sqrt(index); i++) {


        if (index%i ==0) 
         {

            isprime = false;
         }
    }
    

    if (isprime) {

        console.log(index, "is a prime number")


    }

    else {

        console.log(index, "Is not a prime number")
    }
}