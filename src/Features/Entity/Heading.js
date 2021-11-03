const AreImageDetailsEmpty = (entity) => !entity.mainImgSource || entity.mainImgSource.length === 0;

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

const Title = ({entity}) =>
    <div className={entity.color != null ? " text-effect " + entity.color[0].main : "text-effect dark-blue"}>
        <span>{entity.title}</span>
    </div>

const Description = ({description}) => <h3 className="text-light text-center">{description}</h3>

const columns = "col-12 col-sm-12 col-md-12";

export default ({entity}) =>
    <div className="row">
        <div className={columns}><HeaderImage entity={entity}/></div>
        <div className={columns}><Title entity={entity}/></div>
        <div className={columns}><Description description={entity.description}/></div>
    </div>