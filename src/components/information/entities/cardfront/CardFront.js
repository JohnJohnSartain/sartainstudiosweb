import Card from "./Card";

const CardFront = ({isNew, comingSoon, noLongerAvailable, isPopular, mainImgSource, title, description}) =>
    <div className="frontside">
        <Card isNew={isNew}
              comingSoon={comingSoon}
              noLongerAvailable={noLongerAvailable}
              isPopular={isPopular}
              mainImgSource={mainImgSource}
              title={title}
              description={description}/>
    </div>

export default CardFront;