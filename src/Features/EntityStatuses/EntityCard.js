import React from "react";
import getEntityLinkDetails from "./getEntityLinkDetails";

const removeTextFromString = (string, textToRemove) => string.replace(textToRemove, '');

const getWebsiteDetailsFromEntity = (entity) => {
    const entityLinkDetails = getEntityLinkDetails(entity);

    if (!entityLinkDetails) return 'N/A';

    entityLinkDetails.link = removeTextFromString(entityLinkDetails.link, "https://");
    entityLinkDetails.link = removeTextFromString(entityLinkDetails.link, "http://");
    entityLinkDetails.link = removeTextFromString(entityLinkDetails.link, "sartainstudios.");
    entityLinkDetails.link = removeTextFromString(entityLinkDetails.link, "weebly.");
    entityLinkDetails.link = entityLinkDetails.link === "com" ? "sartainstudios.com" : entityLinkDetails.link;

    return entityLinkDetails.link;
}

const entityTitles = ["Hostname:", "Status:", "Address:"];

const EntityFieldHeaders = () =>
    <ul className="server-details" style={{paddingLeft: "20px"}}>
        {entityTitles.map(entity => (
            <li>
                <div className="row">
                    <div className="scaled-font">{entity}</div>
                </div>
            </li>
        ))}
    </ul>

const HostnameDisplay = ({entityTitle, entity, isSiteOnline}) => {
    switch (entityTitle) {
        case "Hostname:":
            return <div className="data scaled-font">{entity.title}</div>
        case "Status:":
            return <div className="data signal scaled-font">{isSiteOnline ? 'ONLINE' : 'OFFLINE'}</div>
        case "Address:":
            return <div className="data grayed scaled-font">{getWebsiteDetailsFromEntity(entity)}</div>
        default:
            throw new Error("Invalid Entity was passed")
    }
}

const EntityInformations = ({entity, isSiteOnline}) =>
    <ul className="server-details" style={{marginRight: "25px"}}>
        {entityTitles.map(entityTitle => (
            <li>
                <div className="row" style={{display: "block"}}>
                    <HostnameDisplay entityTitle={entityTitle} entity={entity} isSiteOnline={isSiteOnline}/>
                </div>
            </li>
        ))}
    </ul>

const ServerIcon = ({type}) => <div style={{marginLeft: "20px", marginRight: "20px"}}><i className={type.class}/></div>

export default ({isSiteOnline, type, entity}) =>
    <div className={isSiteOnline ? 'row server' : 'row server has-failed'}>
        <ServerIcon type={type}/>
        <EntityFieldHeaders/>
        <EntityInformations entity={entity} isSiteOnline={isSiteOnline}/>
    </div>