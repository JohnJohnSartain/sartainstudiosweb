import SocialMediaButtons from "../SocialMedia/SocialMediaButtons";

export default ({entity, linkToInformationPage}) =>
    <div className="backside">
        <div className="card">
            <div className="card-body text-center mt-4">
                <h4 className="card-title">{entity.backTitle}</h4>
                <p className="card-text">{entity.backDescription}</p>
                <ul className="list-inline">
                    <SocialMediaButtons linkDetails={entity.linkDetails}/>
                </ul>
                <p className="card-title"><a href={linkToInformationPage}>More Info</a></p>
            </div>
        </div>
    </div>