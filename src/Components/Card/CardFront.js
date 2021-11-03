import CardBadges from "./CardBadges";

const shouldHideImage = (mainImgSource) => !mainImgSource || mainImgSource.length === 0;

export default ({entity}) =>
    <div className="frontside">
        <div className="card">
            <CardBadges isNew={entity.isNew}
                        comingSoon={entity.comingSoon}
                        noLongerAvailable={entity.noLongerAvailable}
                        isPopular={entity.isPopular}
                        isUnavailable={entity.isUnavailable}/>
            <div className="card-body text-center">
                <p>
                    <img className="img-fluid"
                         src={entity.mainImgSource}
                         alt="card"
                         hidden={shouldHideImage(entity.mainImgSource)}/>
                </p>
                <h4 className="card-title">{entity.title}</h4>
                <p className="card-body">{entity.description}</p>
            </div>
        </div>
    </div>