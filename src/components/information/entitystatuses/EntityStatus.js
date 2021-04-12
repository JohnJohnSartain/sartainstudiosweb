import React, {useState} from "react";
import isUrlOnline from "../../../adapters/isUrlOnline";
import EntityCard from "./entitycard/EntityCard";
import getEntityLinkDetails from "./getEntityLinkDetails";

const setOnlineStatus = (entity, setIsSiteOnline) => {
    const entityLinkDetails = getEntityLinkDetails(entity);

    if (!entityLinkDetails) return null;

    const siteLink = entityLinkDetails.link;

    isUrlOnline(siteLink, setIsSiteOnline, true);
}

const EntityStatus = ({entity, type}) => {
    const [isSiteOnline, setIsSiteOnline] = useState(false);

    setOnlineStatus(entity, setIsSiteOnline);

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6">
            <EntityCard entity={entity} isSiteOnline={isSiteOnline} type={type}/>
        </div>
    )
}

export default EntityStatus;