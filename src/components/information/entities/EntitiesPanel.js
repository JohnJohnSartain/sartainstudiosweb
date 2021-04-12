import EntityPanel from "./EntityPanel";

const EntitiesPanel = ({entities}) => {
    return (
        <div className="row d-flex justify-content-center">
            {entities.map(entity =>
                (
                    <EntityPanel
                        mainImgSource={entity.mainImgSource}
                        title={entity.title}
                        description={entity.description}
                        backTitle={entity.backTitle}
                        backDescription={entity.backDescription}
                        linkDetails={entity.linkDetails}
                        isNew={entity.isNew}
                        comingSoon={entity.comingSoon}
                        noLongerAvailable={entity.noLongerAvailable}
                        isPopular={entity.isPopular}
                        sectionName={entity.sectionName}
                    />
                ))}
        </div>
    );
}

export default EntitiesPanel;