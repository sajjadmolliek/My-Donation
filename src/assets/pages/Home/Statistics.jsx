import { useEffect, useState } from "react";
import Chart from "../../Chart/Chart";

const Statistics = () => {

    const [getCard, setGetCard] = useState([]);

    useEffect(() => {
        const getCardItems = JSON.parse(localStorage.getItem("card"));
        setGetCard(getCardItems);
    }, []);

    if (getCard === null) {
        return (
            <h1 className="text-center mt-56 text-2xl font-bold">Yet You Have not Donate in Any Category</h1>
        )
    }
    else {
        return (
            <div className="flex justify-center">
                <Chart getCard={getCard}></Chart>
            </div>
        );
    }
};

export default Statistics;