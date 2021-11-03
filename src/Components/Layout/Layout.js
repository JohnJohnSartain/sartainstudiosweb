import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "../../Styles/Animation.css";

const Layout = ({contained, children, noNavbar, noFooter}) => (
    <div className={`${contained ? "" : ""} drop-in-animation`}>
        <div id={'mainHeaderNavBarDisplay'}>{!noNavbar && <NavigationBar/>}</div>
        <div id={'mainContentDisplay'}>{children}</div>
        <div id={'mainFootBarDisplay'}>{!noFooter && <Footer/>}</div>
    </div>
);

Layout.propTypes = {
    /**
     * Whether the content is contained, or not.
     */
    contained: PropTypes.bool,
    /**
     * Whether to display the Navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
};

Layout.defaultProps = {
    contained: false,
    noNavbar: false,
    noFooter: false
};

export default Layout;
