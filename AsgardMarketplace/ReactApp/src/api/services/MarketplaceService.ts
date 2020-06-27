import getApiRoute from "../apiRoutes";
import { trimStringsInObject } from "../../utilities/DataProcessFunctions";
import HttpRequestService from "../HttpRequestService";
import { IMarketItem } from "../../features/marketplace/Marketplace";


class MarketplaceRequest {
  requestUrl = getApiRoute.MARKETPLACE.GET_ALL();
}
  
export class MarketplaceResponse {
  itemList: IMarketItem[];
  
  constructor(itemList?: IMarketItem[]) {
    
    this.itemList = !!itemList ? itemList?.map(client => trimStringsInObject(client)) : [];
  }
}

// class ChangeClientStatusRequest {
//   constructor(id, status) {
//     this.body = { isActive: status }
//     this.requestUrl = getRequestUrl.CLIENT.PATCH_STATUS(id);
//     console.log(this.requestUrl)
//   }
// }
//
// class ChangeClientStatusResponse {
//   constructor({ status }) {
//     this.isStatusChanged = status;
//   }
// }

class MarketplaceService extends HttpRequestService {

  // GET clientList page
  getMarketplaceData = async () => {
    try {
      const itemList = await this.get(new MarketplaceRequest());
      return new MarketplaceResponse(itemList);

    } catch (error) { new MarketplaceResponse() }
  }

  // Activate / Deactivate Client
  // changeClientStatus = async (id, status) => {
  //   try {
  //     const result = await this.patch(new ChangeClientStatusRequest(id, status));
  //     return new ChangeClientStatusResponse({...result.data});
  //
  //   } catch (error) {  return new ChangeClientStatusResponse({status: false}); }
  // }
  
}

export default new MarketplaceService();
