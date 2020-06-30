import React, { Fragment, useEffect, useState } from 'react';

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

import { IMarketItem } from './Marketplace';
import OrderService from '../../api/services/OrderService';
import LoaderScreen from '../../components/loader/LoaderScreen';

interface IItemDetailsControl {
    isOpen: boolean;
    selectedItem?: IMarketItem;
    fetchItems: () => void;
    onClose: () => void;
}

enum ActionControlContent {
    ItemDetailsContent,
    OrderDetailsContent,
    Loader,
    Closed,
}

const MarketItemDetailsControl = (props: IItemDetailsControl) => {
    const [actionControlContent, setActionControlContent] = useState<ActionControlContent>(
        ActionControlContent.Closed,
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoaderLocked, setIsLoaderLocked] = useState<boolean>(false);

    const [createdOrderId, setCreatedOrderId] = useState<number | undefined>(undefined);
    const [paymentReceived, setPaymentReceived] = useState<boolean>(false);

    const { isOpen, selectedItem, fetchItems, onClose } = props;

    useEffect(() => {
        if (isOpen && actionControlContent === ActionControlContent.Closed) {
            setActionControlContent(ActionControlContent.ItemDetailsContent);
        }

        if (Boolean(createdOrderId) && !isLoading && !isLoaderLocked) {
            setActionControlContent(ActionControlContent.OrderDetailsContent);
        }

        if (paymentReceived && !isLoading && !isLoaderLocked) {
            closeActionControl();
        }
    });

    const requestCreateOrder = async () => {
        if (selectedItem) {
            startLoader();
            const orderId = await OrderService.postOrderCreate(selectedItem.id);
            setCreatedOrderId(orderId);
            fetchItems();
            setIsLoading(false);
        }
    };

    const startLoader = () => {
        setIsLoading(true);
        setIsLoaderLocked(true);
        setActionControlContent(ActionControlContent.Loader);
    };

    const handleLoadUnlock = () => setIsLoaderLocked(false);

    const requestSendPayment = async () => {
        if (createdOrderId) {
            startLoader();
            await OrderService.patchOrderSendPayment(createdOrderId);
            setPaymentReceived(true);
            setIsLoading(false);
        }
    };

    const closeActionControl = () => {
        setActionControlContent(ActionControlContent.Closed);
        onClose();
        setCreatedOrderId(undefined);
        setPaymentReceived(false);
    };

    return (
        <div>
            <Modal centered size='lg' isOpen={isOpen}>
                {actionControlContent === ActionControlContent.Loader && (
                    <Fragment>
                        <ModalBody>
                            <div style={{ height: '160px' }} />
                            <LoaderScreen isLoading={isLoading} onLoadUnlock={handleLoadUnlock} />
                        </ModalBody>
                    </Fragment>
                )}

                {actionControlContent === ActionControlContent.ItemDetailsContent && selectedItem && (
                    <Fragment>
                        <ModalHeader>{selectedItem.name}</ModalHeader>
                        <ModalBody>
                            <Container>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <img src={selectedItem.image} alt='image' width='180' height='120'/>
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
                            <Button color='primary' onClick={requestCreateOrder}>
                                Order Item
                            </Button>
                            <Button color='secondary' onClick={closeActionControl}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Fragment>
                )}

                {actionControlContent === ActionControlContent.OrderDetailsContent && (
                    <Fragment>
                        <ModalHeader>Order Created</ModalHeader>
                        <ModalBody>
                            <h4>Do you want to pay now?</h4>
                            <div>Otherwise, item going to be marked as booked</div>
                            <div>
                                and you will have 2 hours to make a payment until order will be
                                cancelled.
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='primary' onClick={requestSendPayment}>
                                Pay
                            </Button>
                            <Button color='warning' onClick={closeActionControl}>
                                Latter
                            </Button>
                        </ModalFooter>
                    </Fragment>
                )}
            </Modal>
        </div>
    );
};

MarketItemDetailsControl.displayName = 'MarketItemDetailsControl';
export default MarketItemDetailsControl;
