import React from "react";
import {Form, Col, Row, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const RatingUsView = (props) => {

    return (
        <>

            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <a href="#welcome" className="logo">
                                    <img src="https://vitalur.by/local/templates/vitalur/img/content/logo.png" alt="Softy Pinko"/>
                                </a>

                                <ul className="nav">
                                    <li><a href="#welcome" className="active">Сайт vitalur.by</a></li>
                                    <li><a href="#features">Работа в Виталюр</a></li>
                                    <li><a href="#work-process">Сотрудничество</a></li>
                                    <li><a href="#testimonials">О компании</a></li>
                                    <li><a href="#pricing-plans">Инвесторам</a></li>

                                </ul>
                                <a href='welcome' className='menu-trigger'>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="welcome-area" id="welcome">


                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                <h1>Благодарим вас за отзыв</h1>
                                <p>Рейтинг магазина {props.storeID} понижен :( <br/> Мы сожалеем о том что вы остались недовольны. Если в
                этом магазине рейтинг снизится еще на 9 пунктов - администрация проведет его проверку.</p>
                                <a href="#features" className="main-button-slider" onClick={props.detailedFormViewHandler}>Залолнить анкету</a>
                                 {props.detailedForm && <DetailedForm/>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <section className="section home-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12"
                                     data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src="/public/assets/images/featured-item-01.png" alt=""/></i>
                                        </div>
                                        <h5 className="features-title">Modern Strategy</h5>
                                        <p>Customize anything in this template to fit your website needs</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12"
                                     data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src="/public/assets/images/featured-item-01.png" alt=""/></i>
                                        </div>
                                        <h5 className="features-title">Best Relationship</h5>
                                        <p>Contact us immediately if you have a question in mind</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12"
                                     data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src="/public/assets/images/featured-item-01.png" alt=""/></i>
                                        </div>
                                        <h5 className="features-title">Ultimate Marketing</h5>
                                        <p>You just need to tell your friends about our free templates</p>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


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