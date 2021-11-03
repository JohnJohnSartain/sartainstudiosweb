export default ({isNew, comingSoon, noLongerAvailable, isPopular, isUnavailable}) =>
    <>
        <span className="badge badge-success col-4 ml-auto" hidden={!(isNew)}>New Release</span>
        <span className="badge badge-warning col-4 ml-auto" hidden={!(comingSoon)}>Coming Soon</span>
        <span className="badge badge-danger col-4 ml-auto" hidden={!(noLongerAvailable)}>Discontinued</span>
        <span className="badge badge-danger col-4 ml-auto" hidden={!(isUnavailable)}>Unavailable</span>
        <span className="badge badge-primary col-4 ml-auto" hidden={!(isPopular)}>Popular</span>
    </>