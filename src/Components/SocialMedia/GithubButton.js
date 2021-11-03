import React from "react";
import "./GithubButton.css"

export default ({entity}) => {
    const entityLinkDetails = entity.linkDetails.filter(x => x.linkIcon.includes('fab fa-github'))[0];
    if (!entityLinkDetails)
        return;

    const githubLink = entityLinkDetails.link;

    if (githubLink !== undefined)
        return (<a className="gh-button" href={githubLink} target="_blank"><span className="gh-button__icon"/>View on Github</a>)
}