const TextBody = ({cssClassName, text}) =>
    <div className={cssClassName} style={{marginBottom: "15px"}}>
        <div className="bg-dark rounded section-hover section-box-shadow" style={{padding: "20px"}}>
            <text className="text-light">{text}</text>
        </div>
    </div>

export default ({entity}) =>
    <div className="row">
        <TextBody cssClassName="col-12 col-sm-12 col-md-4" text={entity.backDescription}/>
        <TextBody cssClassName="col-12 col-sm-12 col-md-8" text={entity.longDescription}/>
    </div>