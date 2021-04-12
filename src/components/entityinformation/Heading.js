import HeaderImage from "../information/entity/HeaderImage";

const Title = ({entity}) =>
    <div className={entity.color != null ? " text-effect " + entity.color[0].main : "text-effect dark-blue"}>
        <span>{entity.title}</span>
    </div>

const Description = ({description}) => <h3 className="text-light text-center">{description}</h3>

const columns = "col-12 col-sm-12 col-md-12";

const Heading = ({entity}) =>
    <div className="row">
        <div className={columns}><HeaderImage entity={entity}/></div>
        <div className={columns}><Title entity={entity}/></div>
        <div className={columns}><Description description={entity.description}/></div>
    </div>

export default Heading;