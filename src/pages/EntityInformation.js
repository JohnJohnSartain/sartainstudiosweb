import "../styles/pages/sitestatus/StatusIndicator.css"
import {SartainStudiosEntities} from "../assets/entities/Entities";
import {useParams} from "react-router";
import LargeLinkButtons from "../components/information/entity/LargeLinkButtons";
import DisplayDescriptions from "../components/entityinformation/DisplayDescriptions";
import Heading from "../components/entityinformation/Heading";
import TopRow from "../components/entityinformation/TopRow";

const getRequestEntity = (title) => SartainStudiosEntities.filter(x => x.title === title)[0];

const EntityInformation = () => {
    let {title} = useParams();
    const entity = getRequestEntity(title);

    return (
        <div className="container">
            <TopRow entity={entity}/>

            <Heading entity={entity}/>

            <LargeLinkButtons entity={entity}/>

            <br/>

            <DisplayDescriptions entity={entity}/>
        </div>
    );
}

export default EntityInformation;