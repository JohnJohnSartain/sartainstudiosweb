// eslint-disable-next-line import/no-anonymous-default-export
export default (options, uri, httpRequestInformationSetters) => {
    if (httpRequestInformationSetters.setLoading === undefined) httpRequestInformationSetters.setLoading = () => {
    }

    httpRequestInformationSetters.setLoading(true);

    fetch(uri, options)
        .then(res => res.json())
        .then((result) => {
            if (result.isError) {
                result.message = result.responseException.exceptionMessage;
                httpRequestInformationSetters.setError(result);
            } else {
                result.isSuccessful = true;
                httpRequestInformationSetters.setData(result);
                localStorage.setItem(uri, JSON.stringify(result))
            }
            httpRequestInformationSetters.setLoaded(true);
            httpRequestInformationSetters.setLoading(false);
        }, (error) => {
            error.isError = true;
            httpRequestInformationSetters.setError(error);
            httpRequestInformationSetters.setLoaded(true);
            httpRequestInformationSetters.setLoading(false);
        })
        .catch(error => {
            error.isError = true;
            error.responseException = {exceptionMessage: "Unable to reach server"};
            httpRequestInformationSetters.setError(error);
            httpRequestInformationSetters.setLoading(false);
        });
};