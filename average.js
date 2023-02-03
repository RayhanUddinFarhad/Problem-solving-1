//Get Average Number From aarray

function AverageNumber (number) {

    let sum = 0;

    for (let index = 0; index < number.length; index++) {
        const element = number[index];

        sum += element;
        
        
        
    }

    console.log( "Total sum is", sum)


    return sum/number.length;




}


 let numbers=  [80, 70, 98, 99]

 const average = AverageNumber(numbers)

 console.log( "Average number is" , average)
