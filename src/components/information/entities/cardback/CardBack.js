import SocialMediaButtons from "../../SocialMediaButtons";

const CardBack = ({backTitle, backDescription, linkDetails, linkToInformationPage}) =>
    <div className="backside">
        <div className="card">
            <div className="card-body text-center mt-4">
                <h4 className="card-title">{backTitle}</h4>
                <p className="card-text">{backDescription}</p>
                <ul className="list-inline"><SocialMediaButtons linkDetails={linkDetails}/></ul>
                <p className="card-title"><a href={linkToInformationPage}>More Info</a></p>
            </div>
        </div>
    </div>

export default CardBack;