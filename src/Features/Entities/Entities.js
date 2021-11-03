import "../../Styles/Titles.css";
import "../../Styles/Sections.css";
import "../../Styles/EntitiesPanel.css"
import {SartainStudiosEntities} from "../../Assets/Entities/Entities";
import CardFront from "../../Components/Card/CardFront";
import CardBack from "../../Components/Card/CardBack";

export default () =>
    (['Related Entities', 'Related Applications', 'Related Games', 'Nerd Stuff'].map(sectionName =>
        <div className="col-12 d-flex justify-content-center">
            <div className="section-spacing">
                <div className="entitiesSections">{sectionName}</div>

                <div className="row d-flex justify-content-center">
                    {SartainStudiosEntities.filter(entity => entity.sectionHeader === sectionName).map(entity =>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="image-flip">
                                <div className="mainflip flip-0">
                                    <CardFront entity={entity}/>
                                    <CardBack entity={entity} linkToInformationPage={"Entity/" + entity.title}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <br/>
        </div>
    ));