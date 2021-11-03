import {useEffect, useState} from "react";
import {getData} from "./FetchCalls";
import getBaseConnectionString from "../../Assets/ConnectionStrings/getBaseConnectionString";

export function Get(apiName, endPoint) {
    let storedValue = localStorage.getItem(getBaseConnectionString(apiName) + endPoint);
    let doesGoodDataExist = storedValue != null && storedValue.length > 0;

    const [data, setData] = useState(doesGoodDataExist ? JSON.parse(storedValue) : {});
    const [dataLoaded, setDataLoaded] = useState(doesGoodDataExist);
    const [dataError, setDataError] = useState(false);

    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, []);

    const getItems = () => {
        let httpRequestInformationSetters = {
            setData: setData,
            setError: setDataError,
            setLoaded: setDataLoaded
        };

        getData(apiName, endPoint, httpRequestInformationSetters);
    }

    return {data, dataError, dataLoaded};
}