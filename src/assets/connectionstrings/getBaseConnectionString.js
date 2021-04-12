import apiStrings from "./apiStrings";

const getBaseConnectionString = (apiName) => {
    let result = apiStrings.find(apiString => apiString.name === apiName);

    return window.location.href.includes("localhost")
        ? result.development
        : window.location.href.includes("test.sartainstudios.com")
            ? result.test
            : result.production
}

export default getBaseConnectionString;