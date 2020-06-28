import getApiRoute from "../apiRoutes";
import HttpRequestService from "../HttpRequestService";


const dateCastOrderTime = (usersOrders: any) => 
    Boolean(usersOrders) ?
        usersOrders.map((order: any) => ({
            ...order,
            orderTime: new Date(order.orderTime)
        }))
        : usersOrders;



class OrderService extends HttpRequestService {
    
    getBuyingOrders = async (clientId: number) => {
        const route = getApiRoute.ORDERS.GET_BUYING_USER_ORDERS(clientId);
        const response = await this.get(route);
        return dateCastOrderTime(response.data);
    }

    getSellingOrders = async (clientId: number) => {
        const route = getApiRoute.ORDERS.GET_SELLING_USER_ORDERS(clientId);
        const response = await this.get(route);
        return dateCastOrderTime(response.data);
    }

    postOrderCreate = async (itemId: number) => {
        const route = getApiRoute.ORDERS.POST_ORDER_CREATE();
        const response = await this.post(route, { itemId });
        return response.data;
    }

    patchOrderSendPayment = async (orderId: number) => {
        const route = getApiRoute.ORDERS.PATCH_ORDER_SEND_PAYMENT();
        const response = await this.patch(route, { orderId });
        return response.data;
    }
}

export default new OrderService();