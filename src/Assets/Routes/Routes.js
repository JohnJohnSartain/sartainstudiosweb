import React from "react";
import {Redirect} from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import Information from "../../Pages/Home";
import ComingSoon from "../../Pages/ComingSoon";
import SiteStatus from "../../Pages/EntityStatuses";
import EntityInformation from "../../Pages/Entity";
import PageNotFound from "../../Pages/PageNotFound";

export default [{
    path: "/",
    exact: true,
    layout: Layout,
    component: () => <Redirect to="/home"/>
}, {
    path: "/home",
    layout: Layout,
    component: Information
}, {
    path: "/Entity/:title",
    layout: Layout,
    component: EntityInformation
}, {
    path: "/site/all/status",
    layout: Layout,
    component: SiteStatus
}, {
    path: "/ComingSoon",
    layout: Layout,
    component: ComingSoon
}, {
    path: "*",
    layout: Layout,
    component: PageNotFound
}];