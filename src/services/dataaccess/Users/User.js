import {Get} from "../FetchState";

let ApiName = "UserApi";

export const getRegisteredUserCount = () => Get(ApiName, `/User/Count`);