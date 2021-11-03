import PropTypes from "prop-types";
import "../../Styles/StickyNavigationBar.css"

const NavigationLinkDetails = [
    {path: "/site/all/status", displayName: "Statuses"},
    {path: "/Entity/Sartain Studios", displayName: "About"}
];

const Links = () =>
    <>
        {NavigationLinkDetails.map((linkDetail) =>
            <li className="nav-item active">
                <a className="nav-link" href={linkDetail.path}>{linkDetail.displayName}</a>
            </li>
        )}
    </>

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark">
            <a className="navbar-brand" href="/">Sartain Studios</a>
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

NavigationBar.propTypes = {
    /**
     * The Layout type where the NavigationBar is used.
     */
    layout: PropTypes.string,
    /**
     * Whether the main Navbar is sticky to the top, or not.
     */
    stickyTop: PropTypes.bool
};

NavigationBar.defaultProps = {
    stickyTop: true
};

export default NavigationBar;