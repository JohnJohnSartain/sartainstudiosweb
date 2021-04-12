const shouldHideImage = (mainImgSource) => mainImgSource === null || mainImgSource === '';

const CenterOfCard = ({mainImgSource, title, description}) =>
    <div className="card-body text-center">
        <p><img className="img-fluid" src={mainImgSource} alt="card" hidden={shouldHideImage(mainImgSource)}/></p>
        <h4 className="card-title">{title}</h4>
        <p className="card-body">{description}</p>
    </div>

export default CenterOfCard;