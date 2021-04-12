const AreImageDetailsEmpty = (entity) => entity.mainImgSource === null || entity.mainImgSource === ''

const HeaderImage = ({entity}) =>
    <img
        className="center" src={entity.mainImgSource}
        alt="card image"
        style={{
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            maxHeight: 250,
            maxWidth: 250,
            minHeight: 250,
            minWidth: 250,
            height: "auto",
            width: "auto"
        }}
        hidden={AreImageDetailsEmpty(entity)}/>

export default HeaderImage;