import React, { Fragment } from 'react';
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

import { IOrder } from "./BuyingOrderList";

const handleOrder = () => {}

interface IOrderDetailsControl {
    isOpen: boolean,
    selectedOrder?: IOrder,
    onClose: () => void
}

const OrderDetailsControl = (props: IOrderDetailsControl) => {
    const { isOpen, selectedOrder, onClose } = props;
    let orderedItem = selectedOrder ? selectedOrder.orderedItem : undefined;
    
    console.log(selectedOrder);
    console.log(orderedItem);
    console.log(isOpen);
    
    return (
        <div>
            <Modal centered size="lg" isOpen={isOpen}>
                
                {selectedOrder && orderedItem &&
                    <Fragment>
                        <ModalHeader>{orderedItem.name}</ModalHeader>
                        <ModalBody>
                            <Container>
                                <Row>
                                    <Col xs={4} md={3}>
                                        {orderedItem.image}
                                    </Col>
                                    
                                    <Col xs={4} md={3}>
                                        {orderedItem.description}
                                    </Col>
                                    
                                    <Col xs={2} md={1}>
                                        {orderedItem.price}
                                    </Col>
                                    
                                    <Col xs={3} md={2}>
                                        {selectedOrder.status}
                                    </Col>
                                    
                                    <Col xs={2} md={1}>
                                        {selectedOrder.orderTime.toLocaleDateString()}
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={handleOrder}>Order Item</Button>
                            <Button color="secondary" onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </Fragment>
                }
                
                {selectedOrder && orderedItem &&
                <Fragment>
                  <ModalHeader>Order Created</ModalHeader>
                  <ModalBody>
                    Do you want to pay now?
                      Otherwise you will have 2 hours to make a payment until order will be canceled.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={handleOrder}>Order Item</Button>
                    <Button color="secondary" onClick={onClose}>Close</Button>
                  </ModalFooter>
                </Fragment>
                }
            </Modal>
        </div>
    );
}

OrderDetailsControl.displayName = "OrderDetailsControl";
export default OrderDetailsControl;