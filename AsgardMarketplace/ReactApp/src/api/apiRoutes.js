import { isNotEmptyObject, isPrimitiveType } from "../utilities/DataProcessFunctions";


const stringifyQueryParams = (queryParamsObj) => {
  Object.keys(queryParamsObj).reduce(
    (stringQuery, paramKey) => {
      const paramValue = queryParamsObj[paramKey];

      if (isPrimitiveType(paramValue)) {
        return `${stringQuery}&${paramKey}=${paramValue}`
      }
    })
}

const getRequestUrl = (
  apiRoute,
  param = null,
  queryParams = {
  }) =>
    `${apiRoute}` +
    `${param ? `/${param}` : ''}` +
    `${isNotEmptyObject(queryParams) ? `?${stringifyQueryParams(queryParams)}` : ''}`


const getApiRoute = {
  MARKETPLACE: {
    GET_ALL: () => getRequestUrl(`marketplace/items`),
  },
  ORDERS: {
    GET_BUYING_USER_ORDERS: (clientId) => getRequestUrl(`/order/buying`, clientId),
    GET_SELLING_USER_ORDERS: (clientId) => getRequestUrl(`/order/selling`, clientId),
    POST_ORDER_CREATE: () => getRequestUrl(`/order`),
    PATCH_ORDER_SEND_PAYMENT: () => getRequestUrl(`/order/payment`)
  }
}

export default getApiRoute;