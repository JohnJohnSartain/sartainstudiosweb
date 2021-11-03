import React from "react";
import PropTypes from "prop-types";
import "../../Styles/StickyFooter.css"

const packageJson = require('../../../package.json');

const Footer = ({contained, copyright}) => (
    <footer className="footer primary-color">
        <div className={`${contained ? "container" : ""} text-light`}
             style={{textAlign: 'right', paddingRight: '10px'}}>
            &copy; {new Date().getFullYear()} - <a href="https://sartainstudios.com"
                                                   className="text-light">{copyright}</a>
            {" "} - Version: {packageJson.version}
        </div>
    </footer>
);

Footer.propTypes = {
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

Footer.defaultProps = {
    contained: false,
    copyright: "Sartain Studios"
};

export default Footer;