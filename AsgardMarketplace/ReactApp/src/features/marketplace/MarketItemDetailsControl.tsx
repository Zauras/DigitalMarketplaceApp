import React, { Fragment } from 'react';
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { IMarketItem } from "./Marketplace";

const handleOrder = () => {}

interface IItemDetailsControl {
    isOpen: boolean,
    selectedItem?: IMarketItem,
    onClose: () => void
}

const MarketItemDetailsControl = (props: IItemDetailsControl) => {
    const {isOpen, selectedItem, onClose} = props;
    
    return (
        <div>
            <Modal centered size="lg" isOpen={isOpen}>
                {selectedItem && 
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
                            <Button color="primary" onClick={handleOrder}>Order Item</Button>
                            <Button color="secondary" onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </Fragment>
                }
            </Modal>
        </div>
    );
}

MarketItemDetailsControl.displayName = "MarketItemDetailsControl";
export default MarketItemDetailsControl;