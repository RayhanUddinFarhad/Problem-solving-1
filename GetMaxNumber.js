//Get Maximum Number from array

function MaxArray (arr) {

    let Largest =  arr[0]

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(element>Largest) {

            Largest = element;
        }




        
    }

    return Largest;




}


let arrayNumber= [50, 80, 88, 99]

const resultArr = MaxArray(arrayNumber)
console.log("The Largest Number Is" , resultArr)











//Get Maximum and Minimum number from String



function MaxString (number1, number2, number3) {


    const Maximum_Number = Math.max(number1, number2, number3);



    console.log("Maximum Number Is",  Maximum_Number)

    const Minimum_Number = Math.min(number1, number2, number3)
    console.log("The Minimum Number Is", Minimum_Number)



    
}

MaxString(30, 70, 80)