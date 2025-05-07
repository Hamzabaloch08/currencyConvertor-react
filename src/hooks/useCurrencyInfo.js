import { useEffect, useState } from "react";

let useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
            const responseJSON = await response.json();
            setData(responseJSON[currency]);
            console.log(responseJSON[currency]);
        };

        fetchData();
    }, [currency]);

    console.log(data)
    return data;
}

export default useCurrencyInfo;