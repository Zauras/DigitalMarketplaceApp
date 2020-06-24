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
    GET_ALL: () => getRequestUrl(`/orders`),
    PATCH_STATUS: (id) => getRequestUrl(`/order`, id)
  }
}

export default getApiRoute;