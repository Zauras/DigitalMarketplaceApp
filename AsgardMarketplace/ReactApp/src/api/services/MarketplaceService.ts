import getApiRoute from "../apiRoutes";
import { trimStringsInObject } from "../../utilities/DataProcessFunctions";
import HttpRequestService from "../HttpRequestService";
import { IMarketItem } from "../../features/marketplace/Marketplace";


class MarketplaceRequest {
  requestUrl = getApiRoute.MARKETPLACE.GET_ALL();
}
  
export class MarketplaceResponse {
  itemList: IMarketItem[] | [];
  
  constructor(itemList?: IMarketItem[]) {
      // @ts-ignore
      this.itemList = itemList;
    //this.itemList = !!itemList ? itemList?.map(client => trimStringsInObject(client)) : [];
  }
}

class MarketplaceService extends HttpRequestService {
  constructor() {
    super();
  }

  // GET clientList page
  getMarketplaceData = async () => {
      const route = getApiRoute.MARKETPLACE.GET_ALL();
      const itemList = await this.get(route);
      return itemList; //new MarketplaceResponse(itemList);
  }

  
}

export default new MarketplaceService();
