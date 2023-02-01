function ProfitCalculator (profit) {

    if ( profit>=1000) {

        const Totalprofit = profit*0.015;
        console.log( "Your Total profit is", Totalprofit, "TK")
    }

    else if (profit>=5000) {

        const Totalprofit = profit*0.020;
        console.log( "Your Total profit is", Totalprofit, "TK")
    }

    else if (profit>=15000) {

        const Totalprofit = profit*0.030;
        console.log( "Your Total profit is", Totalprofit, "TK")
    }

    else if (profit>=150000) {

        const Totalprofit = profit*0.030;
        console.log( "Your Total profit is", Totalprofit, "TK")
    }

    else 

     {

        console.log("You're not eligeble to get profit")
    }







}


ProfitCalculator(100)