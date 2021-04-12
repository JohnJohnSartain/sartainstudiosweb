import {SartainStudiosEntities} from "../../../assets/entities/Entities";
import EntityStatus from "./EntityStatus";
import React from "react";

const types = [{
    typeName: 'Website',
    class: "server-icon fa fa-globe scaled-font",
    header: "websites"
}, {
    typeName: 'Api',
    class: 'server-icon fa fa-tasks scaled-font',
    header: "apis"
}, {
    typeName: 'Database',
    class: 'server-icon fa fa-database scaled-font',
    header: "databases"
}, {
    typeName: 'Mobile',
    class: 'server-icon fa fa-mobile scaled-font',
    header: "mobile applications"
}];

const EntityTypes = () => (
    types.map(type =>
        <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6">
            <div className="dashboard-header">{type.header}</div>
            <div className="row">
                {SartainStudiosEntities.filter(x => x.type === type.typeName).map(entity =>
                    <EntityStatus entity={entity} type={type}/>)}
            </div>
            <br/>
        </div>
    )
)

export default EntityTypes;