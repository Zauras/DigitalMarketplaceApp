import getApiRoute from "../apiRoutes";
import HttpRequestService from "../HttpRequestService";


// export class UserOrdersResponse {
//     usersOrders: any
//
//     constructor(usersOrders?: any) {
//         console.log(usersOrders)
//         this.usersOrders = Boolean(usersOrders) ? 
//             usersOrders.map((order: any) => ({ 
//                     ...order,
//                     orderTime: new Date(order.orderTime) 
//                 })) 
//             : usersOrders;
//     }
// }


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

}

export default new OrderService();