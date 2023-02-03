//Suppose you've gone to rent a hotel in Thailand. The menager said , If you stay here fore 1-10 days then you've to pay 500 BDT. As well as if you want to stay there for next 20 days You have to pay 300BTD/day. On the other hand, If you want to stay there for next 30 days from 20 days. Then You have to pay 100 BDT/day. So, If you want to stay there for 25 days, what will be rent?


function rent(days) {

    if (days<=10) {

        let TotalForFirst10Days = days*500;

        console.log(TotalForFirst10Days)
    }

    else if (days<=20) {

        const TotalForFirst20Days = days * 300;
        const Remain = TotalForFirst20Days - 10 * 500;
        console.log(Remain);


    }

    else if (days<50) {

        const TotalForFirst30Days = days*100;

        const Remain11 = TotalForFirst30Days-20*300;
        console.log(Remain11)



    }



}

rent  (17)