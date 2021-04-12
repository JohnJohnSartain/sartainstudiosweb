import React from "react";
import "../styles/pages/sitestatus/SiteStatuses.css";
import EntityTypes from "../components/information/entitystatuses/EntityTypes";

const SiteStatuses = () => {
    return (
        <div className="text-light basics everything body">
            <div className="row" style={{marginLeft: "20px"}}>
                <div className="col-12">
                    <div className="dashboard-header" style={{fontSize: "25px"}}>Systems</div>
                </div>
            </div>
            <br/>
            <div className="row server-element-list">
                <EntityTypes/>
            </div>
        </div>
    );
}

export default SiteStatuses;