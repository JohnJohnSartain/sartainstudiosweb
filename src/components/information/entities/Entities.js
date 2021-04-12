import "../../../styles/components/entities/Titles.css";
import "../../../styles/components/entities/Sections.css";
import "../../../styles/components/entities/EntitiesPanel.css"
import Section from "./Section";

const Entities = () => {
    const Sections = () => {
        const sectionNames = ['Related Entities', 'Related Applications', 'Related Games', 'Nerd Stuff'];

        return (sectionNames.map(sectionName => Section(sectionName)));
    }

    return <Sections/>
};

export default Entities;