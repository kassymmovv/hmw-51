

import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';

const Cardss = (props) => {
    return (
        <Col xs="6" sm="3">
            <Card>
                <CardImg top width="100%" src={props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Cardss;