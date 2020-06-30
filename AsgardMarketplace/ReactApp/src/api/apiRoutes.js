import { isNotEmptyObject, isPrimitiveType } from '../utilities/DataProcessFunctions';

const stringifyQueryParams = (queryParamsObj) => {
    Object.keys(queryParamsObj).reduce((stringQuery, paramKey) => {
        const paramValue = queryParamsObj[paramKey];

        if (isPrimitiveType(paramValue)) {
            return `${stringQuery}&${paramKey}=${paramValue}`;
        }
    });
};

const getRequestUrl = (apiRoute, param = null, queryParams = {}) =>
    `${apiRoute}` +
    `${param ? `/${param}` : ''}` +
    `${isNotEmptyObject(queryParams) ? `?${stringifyQueryParams(queryParams)}` : ''}`;

const getApiRoute = {
    MARKETPLACE: {
        GET_ALL: () => getRequestUrl(`marketplace/items`),
        GET_USER_ITEMS: (userId) => getRequestUrl(`marketplace/items/owner`, userId),
    },
    ORDERS: {
        GET_BUYING_USER_ORDERS: (userId) => getRequestUrl(`/order/buying`, userId),
        GET_SELLING_USER_ORDERS: (userId) => getRequestUrl(`/order/selling`, userId),
        POST_ORDER_CREATE: () => getRequestUrl(`/order`),
        PATCH_ORDER_SEND_PAYMENT: () => getRequestUrl(`/order/payment`),
        PATCH_ORDER_SHIP: () => getRequestUrl(`/order/ship`),
        PATCH_ORDER_RECEIVE: () => getRequestUrl(`/order/receive`),
    },
};

export default getApiRoute;
