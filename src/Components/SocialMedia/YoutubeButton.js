export default ({entity}) => {
    if (!entity.youtubeChannelId) return;

    return (
        <div className="g-ytsubscribe dark"
             data-channelid={entity.youtubeChannelId}
             data-layout="full"
             style={{paddingLeft: "20px"}}
             data-theme="dark"
             data-count="default"/>
    )
}