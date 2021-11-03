const getLoadTimeOutModifier = (slowlyLoad) => slowlyLoad ? 1000 : 0;

const getRandomTimeout = (slowlyLoad) => (Math.random() * (7 - 1) + 1) * getLoadTimeOutModifier(slowlyLoad);

export default (url, setIsOnline, loadSlowly = false) =>
    window.addEventListener("load", event => {
        fetch(new Request(url, {method: 'HEAD', mode: 'no-cors'}))
            .then(function () {
                setTimeout(function () {
                    setIsOnline(true);
                }, getRandomTimeout(loadSlowly));
            })
            .catch(function () {
                setIsOnline(false);
            });
    });