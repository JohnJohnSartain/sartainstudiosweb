import "../Styles/StatusIndicator.css"
import {SartainStudiosEntities} from "../Assets/Entities/Entities";
import {useParams} from "react-router";
import LargeLinkButtons from "../Features/Entity/LargeLinkButtons";
import Descriptions from "../Features/Entity/Descriptions";
import Heading from "../Features/Entity/Heading";
import TopRow from "../Features/Entity/TopRow";

export default () => {
    let {title} = useParams();
    const entity = SartainStudiosEntities.filter(x => x.title === title)[0];

    return (
        <div className="container">
            <TopRow entity={entity}/>
            <Heading entity={entity}/>
            <LargeLinkButtons entity={entity}/>
            <br/>
            <Descriptions entity={entity}/>
        </div>
    );
}