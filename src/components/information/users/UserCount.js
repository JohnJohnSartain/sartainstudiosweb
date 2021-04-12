import {useEffect, useState} from "react";
import {getData} from "../../../adapters/FetchCalls";

const UserCount = () => {
    const [userQuantity, setUserQuantity] = useState(0);
    const [userQuantityError, setUserQuantityError] = useState(null);
    const [userQuantityLoaded, setUserQuantityLoaded] = useState(false);

    useEffect(() => {
        getUserQuantity();
    }, []);

    const getUserQuantity = () => {
        let httpRequestInformationSetters = {
            setData: setUserQuantity,
            setError: setUserQuantityError,
            setLoaded: setUserQuantityLoaded
        };
        getData("UsersApi", `/User/Count`, httpRequestInformationSetters);
    }

    const getUserQuantityFormatted = (userQuantity) => {
        try {
            return userQuantity.toLocaleString();
        } catch (exception) {
            setUserQuantityError({message: "Failed to get"});
        }
    }

    const DisplayCount = () =>
        <>
            {userQuantityError
                ? userQuantityError.message
                : !userQuantityLoaded ? "Loading..."
                    : getUserQuantityFormatted(userQuantity.result)}
        </>

    return (
        <div className="text-light entitiesSections">
            Total User
            Count: <DisplayCount/>
        </div>
    )
}

export default UserCount;