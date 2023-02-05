//Get total amount for all participants. For 1-100- per person will give 5000 taka. For 100-200 per person will give 4000tk. For 200+ per person will give 3000 tk. Get total amount for specific participants








function PicnicBudget (participent) {


    const For100 = 5000 ;
    const For200 = 4000 ;
    const For300 = 3000 ;


    if(participent<=100) {

        const First100 = participent*For100;
        return First100;


        
    }

    else if(participent<=200)  {


        const First100 = 100*For100;
        const nextp = participent-100;
        const Second100 = nextp*For200;
        const total = First100+Second100;

        return total;

    }


    else {

        const First100 = 100*For100;
        const Fisrt200 = 100*For200;
        const nextp = participent-200;
        const rest = nextp*For300;
        const total = First100+Fisrt200+rest;

        return total;
    }

        
    }






const total = PicnicBudget(220)
console.log(total, "Taka")