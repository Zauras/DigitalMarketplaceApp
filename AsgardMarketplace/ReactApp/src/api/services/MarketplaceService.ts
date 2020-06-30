import getApiRoute from '../apiRoutes';
import HttpRequestService from '../HttpRequestService';

class MarketplaceService extends HttpRequestService {
    constructor() {
        super();
    }

    getMarketplaceData = async () => {
        const route = getApiRoute.MARKETPLACE.GET_ALL();
        const response = await this.get(route);
        return response.data;
    };

    getUserItems = async (userId: number) => {
        const route = getApiRoute.MARKETPLACE.GET_USER_ITEMS(userId);
        const response = await this.get(route);
        return response.data;
    };
}

export default new MarketplaceService();
