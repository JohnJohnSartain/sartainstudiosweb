import React from "react";
import PropTypes from "prop-types";
import "../../styles/components/layout/StickyFooter.css"

const getYear = () => new Date().getFullYear();

const MainFooter = ({contained, menuItems, copyright}) => (
    <footer className="footer primary-color">
        <div className={`${contained ? "container" : ""} text-light`}
             style={{textAlign: 'right', paddingRight: '10px'}}>
            &copy; {getYear()} - <a href="https://sartainstudios.com" className="text-light">{copyright}</a>
        </div>
    </footer>
);

MainFooter.propTypes = {
    /**
     * Whether the content is contained, or not.
     */
    contained: PropTypes.bool,
    /**
     * The menu items array.
     */
    menuItems: PropTypes.array,
    /**
     * The copyright info.
     */
    copyright: PropTypes.string
};

MainFooter.defaultProps = {
    contained: false,
    copyright: "Sartain Studios"
};

export default MainFooter;