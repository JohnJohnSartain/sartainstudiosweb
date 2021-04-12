import getBaseConnectionString from "../assets/connectionstrings/getBaseConnectionString";
import makeFetchRequest from "./makeFetchRequest";

export const getData = (apiName, endPoint, httpRequestInformationSetters) =>
    makeFetchRequest(createOptions(httpVerbs.get), createUri(apiName, endPoint), httpRequestInformationSetters);

export const putData = (apiName, endPoint, dataToSend, httpRequestInformationSetters) =>
    makeFetchRequest(createOptions(httpVerbs.put, dataToSend), createUri(apiName, endPoint), httpRequestInformationSetters);

export const patchData = (apiName, endPoint, dataToSend, httpRequestInformationSetters) =>
    makeFetchRequest(createOptions(httpVerbs.patch, dataToSend), createUri(apiName, endPoint), httpRequestInformationSetters);

export const postData = (apiName, endPoint, dataToSend, httpRequestInformationSetters) =>
    makeFetchRequest(createOptions(httpVerbs.post, dataToSend), createUri(apiName, endPoint), httpRequestInformationSetters)

export const postFormData = (apiName, endPoint, dataToSend, httpRequestInformationSetters) =>
    makeFetchRequest(createOptions(httpVerbs.post, dataToSend, true), createUri(apiName, endPoint), httpRequestInformationSetters)

export const deleteData = (apiName, endPoint, httpRequestInformationSetters) =>
    makeFetchRequest(createOptions(httpVerbs.delete), createUri(apiName, endPoint), httpRequestInformationSetters)

const createUri = (apiName, endPoint) => getBaseConnectionString(apiName) + endPoint;

const createOptions = (httpMethodType, dataToSend, isFormData) => {
    let options = {method: httpMethodType};
    let isNormalPutOrPatchOrPost = isStandardPutOrPatchOrPost(httpMethodType, isFormData);

    options.headers = getHeader(isNormalPutOrPatchOrPost);
    options.body = isNormalPutOrPatchOrPost ? !isFormData ? stringify(dataToSend) : dataToSend : null;

    return options;
}

const isStandardPutOrPatchOrPost = (httpMethodType, isFormData) =>
    httpMethodType === httpVerbs.put || httpMethodType === httpVerbs.patch || (httpMethodType === httpVerbs.post && !isFormData);

const getHeader = (includeType) => {
    return includeType ? {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    } : {}
}

const httpVerbs = {
    get: "GET",
    put: "PUT",
    patch: "PATCH",
    post: "POST",
    delete: "DELETE"
};

const stringify = (data) => JSON.stringify(data);