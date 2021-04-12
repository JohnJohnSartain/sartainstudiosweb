import OnlineStatus from "../information/entity/OnlineStatus";
import SocialMediaButtons from "../information/SocialMediaButtons";

const TopRow = ({entity}) =>
    <div className="row">
        <div className="col-6">
            <OnlineStatus entity={entity}/>
        </div>

        <div className="col-6">
            <ul className="list-inline" style={{textAlign: "right"}}>
                <SocialMediaButtons linkDetails={entity.linkDetails} fontSize={"175%"}/>
            </ul>
        </div>
    </div>

export default TopRow;