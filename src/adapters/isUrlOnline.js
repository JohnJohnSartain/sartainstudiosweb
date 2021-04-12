const getLoadTimeOutModifier = (slowlyLoad) => slowlyLoad ? 1000 : 0;

const getRandomTimeout = (slowlyLoad) => (Math.random() * (7 - 1) + 1) * getLoadTimeOutModifier(slowlyLoad);

const isUrlOnline = (url, setIsSiteOnline, slowlyLoad = false) => {
    window.addEventListener("load", event => {
        fetch(new Request(url, {method: 'HEAD', mode: 'no-cors'}))
            .then(function () {
                setTimeout(function () {
                    setIsSiteOnline(true);
                }, getRandomTimeout(slowlyLoad));
            })
            .catch(function () {
                setIsSiteOnline(false);
            });
    });
}

export default isUrlOnline;