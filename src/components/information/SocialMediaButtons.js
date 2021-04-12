const SocialMediaButtons = ({linkDetails, fontSize = "100%"}) => (
    <>
        {linkDetails.map(linkDetail => (
            <li className="list-inline-item">
                <a className="social-icon text-xs-center" style={{fontSize: fontSize}} target="_blank"
                   href={linkDetail.link}>
                    <i className={linkDetail.linkIcon}/>
                </a>
            </li>
        ))}
    </>
)

export default SocialMediaButtons;