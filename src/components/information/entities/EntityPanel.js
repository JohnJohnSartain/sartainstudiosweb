import CardFront from "./cardfront/CardFront";
import CardBack from "./cardback/CardBack";

const EntityPanel = ({
                         mainImgSource,
                         title,
                         description,
                         backTitle,
                         backDescription,
                         linkDetails,
                         isNew,
                         comingSoon,
                         noLongerAvailable,
                         isPopular,
                         sectionName
                     }) => {
    let linkToInformationPage = "Entity/" + title;

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <div className="image-flip">
                <div className="mainflip flip-0">
                    <CardFront isNew={isNew}
                               comingSoon={comingSoon}
                               noLongerAvailable={noLongerAvailable}
                               isPopular={isPopular}
                               mainImgSource={mainImgSource}
                               title={title}
                               description={description}/>
                    <CardBack backTitle={backTitle}
                              backDescription={backDescription}
                              linkDetails={linkDetails}
                              linkToInformationPage={linkToInformationPage}/>
                </div>
            </div>
        </div>
    );
}

export default EntityPanel