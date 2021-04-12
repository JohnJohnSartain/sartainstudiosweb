import CardBadges from "./CardBadges";
import CenterOfCard from "./CenterOfCard";

const Card = ({isNew, comingSoon, noLongerAvailable, isPopular, mainImgSource, title, description}) =>
    <div className="card">
        <CardBadges isNew={isNew} comingSoon={comingSoon} noLongerAvailable={noLongerAvailable} isPopular={isPopular}/>
        <CenterOfCard mainImgSource={mainImgSource} title={title} description={description}/>
    </div>

export default Card;