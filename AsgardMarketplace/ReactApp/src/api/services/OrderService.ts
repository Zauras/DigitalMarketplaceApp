import getApiRoute from "../apiRoutes";
import HttpRequestService from "../HttpRequestService";

class UserOrdersRequest {
    requestUrl: string;
    
    constructor(clientId: number) {
        this.requestUrl = getApiRoute.ORDERS.GET_USERS_ORDERS(clientId);
    }
}

export class UserOrdersResponse {
    usersOrders: any

    constructor(usersOrders?: any) {
        this.usersOrders = usersOrders;
    }
}


class OrderService extends HttpRequestService {
    
    getClientOrders = async (clientId: number) => {
        try {
            const usersOrders = await this.get(new UserOrdersRequest(clientId));
            return new UserOrdersResponse(usersOrders);

        } catch (error) { new UserOrdersResponse() }
    }

}

export default new OrderService();