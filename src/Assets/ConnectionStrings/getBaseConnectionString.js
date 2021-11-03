import apiStrings from "./ApiStrings";

export default (apiName) => {
    let result = apiStrings.find(apiString => apiString.name === apiName);
    let currentUrl = window.location.href;

    return currentUrl.includes("localhost")
        ? result.development
        : currentUrl.includes("test.sartainstudios.com")
            ? result.test
            : result.production
}