const CardBadges = ({isNew, comingSoon, noLongerAvailable, isPopular}) =>
    <>
        <span className="badge badge badge-success col-4 ml-auto" hidden={!(isNew)}>New Release</span>
        <span className="badge badge badge-warning col-4 ml-auto" hidden={!(comingSoon)}>Coming Soon</span>
        <span className="badge badge badge-danger col-4 ml-auto" hidden={!(noLongerAvailable)}>Discontinued</span>
        <span className="badge badge badge-primary col-4 ml-auto" hidden={!(isPopular)}>Popular</span>
    </>

export default CardBadges;