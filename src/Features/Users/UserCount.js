import {getRegisteredUserCount} from "../../Services/DataAccess/Users/User";

export default () => {
    let {data, dataError, dataLoaded} = getRegisteredUserCount();

    const getCount = () =>
        dataError
            ? dataError.message
            : !dataLoaded
                ? "Loading..."
                : data.result.toLocaleString()

    return (
        <div className="text-light entitiesSections">
            Total User Count: {getCount()}
        </div>
    )
}