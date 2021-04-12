import React from "react";
import {Redirect} from "react-router-dom";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Information from "../../pages/Information";
import ComingSoon from "../../pages/ComingSoon";
import SiteStatus from "../../pages/SiteStatuses";
import EntityInformation from "../../pages/EntityInformation";
import PageNotFound from "../../pages/PageNotFound";

export default [{
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home"/>
}, {
    path: "/home",
    layout: DefaultLayout,
    component: Information
}, {
    path: "/entity/:title",
    layout: DefaultLayout,
    component: EntityInformation
}, {
    path: "/site/all/status",
    layout: DefaultLayout,
    component: SiteStatus
}, {
    path: "/ComingSoon",
    layout: DefaultLayout,
    component: ComingSoon
}, {
    path: "*",
    layout: DefaultLayout,
    component: PageNotFound
}];