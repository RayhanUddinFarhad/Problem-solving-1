function GradeCalculator (marks ) {

    if (marks>=80) {

        console.log (marks, "You got A(+)")
    }


   else if (marks>=70) {

        console.log (marks, "You got A(-)")
    }


    else if (marks>=60) {

        console.log (marks, "You got B")
    }



    else if (marks>=50) {

        console.log (marks, "You got C")
    }



    else if (marks>=33) {

        console.log (marks, "You got D")
    }

    else {


        console.log(marks , "You are Failed")
    }
}

GradeCalculator(43);