import GithubButton from "./GithubButton";

const LargeLinkButtons = ({entity}) => {
    const displayYoutubeButton = (entity) => {
        if (!entity.youtubeChannelId) return;

        return (
            <div className="g-ytsubscribe dark" data-channelid={entity.youtubeChannelId} data-layout="full"
                 style={{paddingLeft: "20px"}} data-theme="dark" data-count="default"/>
        )
    }

    return (
        <div
            className="row bg-dark rounded section-hover section-box-shadow align-items-center"
            style={{margin: "10px"}}>
            <div className="col d-flex justify-content-center" style={{padding: "20px"}}>
                <GithubButton entity={entity}/>
            </div>
            {entity.youtubeChannelId
                ? (
                    <div className="col d-flex justify-content-center" style={{padding: "20px"}}>
                        {displayYoutubeButton(entity)}
                    </div>
                ) : ""
            }
        </div>
    )
}

export default LargeLinkButtons;