import PropTypes from "prop-types";
import "../../styles/components/layout/StickyNavigationBar.css"
import {NavigationLinkDetails, NavigationTitle} from "../../assets/routes/RoutingInformation";

const Links = () =>
    <>
        {NavigationLinkDetails.map((linkDetail) =>
            <li className="nav-item active">
                <a className="nav-link" href={linkDetail.path}>{linkDetail.displayName}</a>
            </li>
        )}
    </>

const MainNavbar = () => {
    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark">
            <a className="navbar-brand" href="/">{NavigationTitle}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Links/>
                </ul>
            </div>
        </nav>
    );
};

MainNavbar.propTypes = {
    /**
     * The layout type where the MainNavbar is used.
     */
    layout: PropTypes.string,
    /**
     * Whether the main Navbar is sticky to the top, or not.
     */
    stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
    stickyTop: true
};

export default MainNavbar;