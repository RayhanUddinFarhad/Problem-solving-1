//Grade Calculator


let result = [


    {Name : "Tom", Marks: 80 },
    {Name : "Jhon", Marks: 66 },
    {Name : "MyScore", Marks: 85 },
    {Name : "Peter", Marks: 46 },
    {Name : "Jene", Marks: 6 },

]


function marksCalculator (array) {




    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element.Marks >=80) {

            console.log(element.Name, "Got A+")
        }

        else if (element.Marks >=70) {

            console.log(element.Name, "Got A")
        }

        else if (element.Marks >=60) {

            console.log(element.Name, "Got A-")
        }

        else if (element.Marks >=50) {

            console.log(element.Name, "Got B")
        }

        else if (element.Marks >=33) {

            console.log(element.Name, "Got D")
        }

        else {


            console.log (element.Name, "You Are Failed")
        }
        
    }



}

marksCalculator(result)

