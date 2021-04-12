import {useState} from "react";
import isUrlOnline from "../../../adapters/isUrlOnline";

const getEntityLinkDetails = (entity) =>
    entity.linkDetails.filter(x =>
        x.linkIcon.includes('fas fa-sitemap')
        || x.linkIcon.includes('fab fa-weebly')
        || x.linkIcon.includes('fas fa-money-bill-wave'))[0];

const OnlineStatus = ({entity}) => {
    const [isSiteOnline, setIsSiteOnline] = useState(false);

    const entityLinkDetails = getEntityLinkDetails(entity);
    if (!entityLinkDetails) return null;

    const siteLink = entityLinkDetails.link;

    isUrlOnline(siteLink, setIsSiteOnline);

    const statusIndicatorClass = isSiteOnline ? "success" : "failure";
    const statusIndicator = isSiteOnline ? "Online" : "Offline";

    return siteLink !== undefined
        ? <div className={"status-indicator-" + statusIndicatorClass + " urgent text-light"}>{statusIndicator}</div>
        : null;
}

export default OnlineStatus;