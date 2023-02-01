let Odd = []

function IsOdd (number) {


    for (let i= 0; i<number.length; i++) {


        let element = number[i]

        if (element%2!=0) {

            Odd.push(element)
        }





    }





}

let arr = [5, 17 , 26, 18 ,3, 9, 15, 20]

IsOdd(arr)
console.log(Odd)
