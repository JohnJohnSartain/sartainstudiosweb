import React from "react";
import "../Styles/EntityStatuses.css";
import {SartainStudiosEntities} from "../Assets/Entities/Entities";
import EntityStatus from "../Features/EntityStatuses/EntityStatus";

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

export default () =>
    <div className="text-light basics everything body">
        <div className="row" style={{marginLeft: "20px"}}>
            <div className="col-12">
                <div className="dashboard-header" style={{fontSize: "25px"}}>Systems</div>
            </div>
        </div>

        <br/>

        <div className="row server-element-list">
            {types.map(type =>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6">
                    <div className="dashboard-header">{type.header}</div>
                    <div className="row">
                        {SartainStudiosEntities.filter(x => x.type === type.typeName).map(entity =>
                            <EntityStatus entity={entity} type={type}/>)}
                    </div>
                    <br/>
                </div>
            )}
        </div>
    </div>