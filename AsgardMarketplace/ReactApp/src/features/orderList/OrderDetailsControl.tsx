import React, { Fragment } from 'react';
import {
    Button,
    Col,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
} from 'reactstrap';

import { IOrder } from './BuyingOrderList';

const handleOrder = () => {};

interface IOrderDetailsControl {
    isOpen: boolean;
    selectedOrder?: IOrder;
    onClose: () => void;
}

const initialState = {
    isConfirmationOpen: false,
    isResponseOpen: false,
};

const OrderDetailsControl = ({}) => {
    //let orderedItem = selectedOrder ? selectedOrder.orderedItem : undefined;

    return (
        <div>
            {/*<Modal centered size="lg" isOpen={isOpen}>*/}
            {/*    */}
            {/*    {selectedOrder && orderedItem &&*/}
            {/*        <Fragment>*/}
            {/*            <ModalHeader>{orderedItem.name}</ModalHeader>*/}
            {/*            <ModalBody>*/}
            {/*                <Container>*/}
            {/*                    <Row>*/}
            {/*                        <Col xs={4} md={3}>*/}
            {/*                            {orderedItem.image}*/}
            {/*                        </Col>*/}
            {/*                        */}
            {/*                        <Col xs={4} md={3}>*/}
            {/*                            {orderedItem.description}*/}
            {/*                        </Col>*/}
            {/*                        */}
            {/*                        <Col xs={2} md={1}>*/}
            {/*                            {orderedItem.price}*/}
            {/*                        </Col>*/}
            {/*                        */}
            {/*                        <Col xs={3} md={2}>*/}
            {/*                            {selectedOrder.status}*/}
            {/*                        </Col>*/}
            {/*                        */}
            {/*                        <Col xs={2} md={1}>*/}
            {/*                            {selectedOrder.orderTime.toLocaleDateString()}*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </Container>*/}
            {/*            </ModalBody>*/}
            {/*            <ModalFooter>*/}
            {/*                <Button color="primary" onClick={handleOrder}>Order Item</Button>*/}
            {/*                <Button color="secondary" onClick={onClose}>Close</Button>*/}
            {/*            </ModalFooter>*/}
            {/*        </Fragment>*/}
            {/*    }*/}
            {/*</Modal>*/}
        </div>
    );
};

OrderDetailsControl.displayName = 'OrderDetailsControl';
export default OrderDetailsControl;
