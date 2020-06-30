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

const handleOrder = () => {};

enum ActionControlContent {
    ItemDetailsContent,
    OrderDetailsContent,
    Loader,
    Closed,
}

const OrderDetailsControl = (props: any) => {
    const [actionControlContent, setActionControlContent] = useState<ActionControlContent>(
        ActionControlContent.Closed,
    );

    const { isOpen, selectedOrder, selectedItem, onClose } = props;

    useEffect(() => {
        if (isOpen && !!selectedOrder && !selectedItem) {
            setActionControlContent(ActionControlContent.OrderDetailsContent);
        }

        if (isOpen && !selectedOrder && !!selectedItem) {
            setActionControlContent(ActionControlContent.ItemDetailsContent);
        }
    });

    const closeActionControl = () => {
        setActionControlContent(ActionControlContent.Closed);
        onClose();
    };

    return (
        <div>
            <Modal centered size='lg' isOpen={isOpen}>
                {actionControlContent == ActionControlContent.ItemDetailsContent && !!selectedItem && (
                    <Fragment>
                        <ModalHeader>{selectedItem.name}</ModalHeader>
                        <ModalBody>
                            <Container>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <img
                                            src={selectedItem.image}
                                            alt='image'
                                            width='180'
                                            height='120'
                                        />
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
                            <Button color='secondary' onClick={closeActionControl}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Fragment>
                )}

                {actionControlContent == ActionControlContent.OrderDetailsContent &&
                    !!selectedOrder && (
                        <Fragment>
                            <ModalHeader>{selectedOrder.item.name}</ModalHeader>
                            <ModalBody>
                                <Container>
                                    <Row>
                                        <Col xs={4} md={3}>
                                            <img
                                                src={selectedOrder.item.image}
                                                alt='image'
                                                width='180'
                                                height='120'
                                            />
                                        </Col>

                                        <Col xs={4} md={3}>
                                            {selectedOrder.item.description}
                                        </Col>

                                        <Col xs={2} md={1}>
                                            {selectedOrder.item.price}
                                        </Col>

                                        <Col xs={3} md={2}>
                                            {selectedOrder.status.type}
                                        </Col>

                                        <Col xs={2} md={1}>
                                            {selectedOrder.orderTime.toLocaleString()}
                                        </Col>
                                    </Row>
                                </Container>
                            </ModalBody>
                            <ModalFooter>
                                <Button color='secondary' onClick={closeActionControl}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Fragment>
                    )}
            </Modal>
        </div>
    );
};

OrderDetailsControl.displayName = 'OrderDetailsControl';
export default OrderDetailsControl;
