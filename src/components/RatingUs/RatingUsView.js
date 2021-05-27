import React, {useState} from "react";
import {Form, Col, Row, Button, Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const RatingUsView = (props) => {

    return (
        <>
            <Alert variant='primary'>
                Рейтинг магазина {props.storeID} понижен :( <br/> Мы сожалеем о том что вы остались недовольны. Если в
                этом магазине рейтинг снизится еще на 9 пунктов - администрация проведет его проверку.
            </Alert>
            <Button onClick={props.detailedFormViewHandler}>Заполнить анкету</Button>
             <Button onClick={props.detailedFormViewHandler}>Написать директору</Button>
            {props.detailedForm ? <DetailedForm/> : ''}

        </>
    )
}


const DetailedForm = () => {
    return (
        <>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Radios
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>

                <Form.Group as={Row}>
                    <Col sm={{span: 10, offset: 2}}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}