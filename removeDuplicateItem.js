let arrayy = [21, "Rayhan", 21, "Oni" , 13, "Farhad" , "Rayhan", 5, 7, 5]

function removeDuplicate (arr) {

    let duplicate = []

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];


        if (duplicate.includes(element) == false) {

            duplicate.push(element)
        }
        
    }

    return duplicate;



}


const result = removeDuplicate(arrayy)

console.log(result)