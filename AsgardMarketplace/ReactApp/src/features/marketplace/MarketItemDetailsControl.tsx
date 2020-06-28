import React, {Fragment, useEffect, useState} from 'react';
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { IMarketItem } from "./Marketplace";
import OrderService from "../../api/services/OrderService";

interface IItemDetailsControl {
    isOpen: boolean,
    selectedItem?: IMarketItem,
    onClose: () => void
}

enum ActionControlContent {
    ItemDetailsContent,
    OrderDetailsContent,
    Closed
}

const MarketItemDetailsControl = (props: IItemDetailsControl) => {
    const [actionControlContent, setActionControlContent] = 
        useState<ActionControlContent>(ActionControlContent.Closed);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [createdOrderId, setCreatedOrderId] = useState<number | undefined>(undefined);

    const {isOpen, selectedItem, onClose} = props;

    useEffect(() => {
        if (isOpen && actionControlContent === ActionControlContent.Closed) {
            setActionControlContent(ActionControlContent.ItemDetailsContent);
        } 
    });
    
    const closeActionControl = () => {
        onClose();
        setActionControlContent(ActionControlContent.Closed);
    }
    
    const requestCreateOrder = async () => {
        setIsLoading(true);
        const orderId = await OrderService.postOrderCreate(selectedItem?.id);
        setCreatedOrderId(orderId);
        setActionControlContent(ActionControlContent.OrderDetailsContent);
        setIsLoading(false);
    }

    const requestSendPayment = async () => {
        setIsLoading(true);
        await OrderService.patchOrderSendPayment(createdOrderId);
        closeActionControl();
        setIsLoading(false);
    }
         
    return (
        <div>
            <Modal centered size="lg" isOpen={isOpen}>
                {actionControlContent === ActionControlContent.ItemDetailsContent && selectedItem &&
                    <Fragment>
                        <ModalHeader>{selectedItem.name}</ModalHeader>
                        <ModalBody>
                            <Container>
                                <Row>
                                    <Col xs={6} md={4}>
                                        {selectedItem.image}
                                    </Col>
                                    <Col xs={6} md={4}>
                                        {selectedItem.description}
                                    </Col>
                                    <Col xs={6} md={4}>
                                        {selectedItem.price}
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={requestCreateOrder}>Order Item</Button>
                            <Button color="secondary" onClick={closeActionControl}>Close</Button>
                        </ModalFooter>
                    </Fragment>
                }

                {actionControlContent === ActionControlContent.OrderDetailsContent &&
                <Fragment>
                  <ModalHeader>Order Created</ModalHeader>
                  <ModalBody>
                    Do you want to pay now?
                    Otherwise you will have 2 hours to make a payment until order will be canceled.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={requestSendPayment}>Pay</Button>
                    <Button color="secondary" onClick={closeActionControl}>Latter</Button>
                  </ModalFooter>
                </Fragment>
                }
            </Modal>
        </div>
    );
}

MarketItemDetailsControl.displayName = "MarketItemDetailsControl";
export default MarketItemDetailsControl;