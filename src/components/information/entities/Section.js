import {SartainStudiosEntities} from "../../../assets/entities/Entities";
import EntitiesPanel from "./EntitiesPanel";

const DisplayHeader = (sectionName) => <div className="entitiesSections">{sectionName}</div>

const DisplayEntityPanel = (sectionName) =>
    <EntitiesPanel entities={SartainStudiosEntities.filter(entity => entity.sectionHeader === sectionName)}/>

const Section = (sectionName) => {
    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="section-spacing">
                {DisplayHeader(sectionName)}
                {DisplayEntityPanel(sectionName)}
            </div>
            <br/>
        </div>
    );
}

export default Section;