import {Image} from 'react-bootstrap'
import { Col, Container, Row } from 'react-bootstrap'
import { Accordion,Item,Header,Body } from 'react-bootstrap'
import { Link } from "react-router-dom"
import React from 'react'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import * as icons from "react-icons/fc"

export default function InicioView() {
    return (
        <div>
                <div className="contenedor">
                    <Row className="dash1">
                       <Col xs="6">
                        <i class="fas fa-address-card fs-1 p-4 primary-text border secondary-bg tm rounded-full"></i> 
                       </Col>
                    </Row>

                    <Row className="dash2">
                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car2">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Ventas</h5>
                                                <h3 className="my-2 py-1">50</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2">
                                                        <icons.FcBarChart className="me-2"/>
                                                        3.27%
                                                    </span>
                                                </p>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car1">
                                                <i className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car2">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Clientes</h5>
                                                <h3 className="my-2 py-1">80</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2">
                                                        <icons.FcBarChart className="me-2"/>
                                                        3.27%
                                                    </span>
                                                </p>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car1">
                                                <i className="fas fa-user fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car2">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Productos</h5>
                                                <h3 className="my-2 py-1">150</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2">
                                                        <icons.FcBarChart className="me-2"/>
                                                        3.27%
                                                    </span>
                                                </p>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car1">
                                                <i className="fas fa-box-open fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                    
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="3">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car2">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Pedidos Pendientes</h5>
                                                <h3 className="my-2 py-1">30</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2">
                                                        <icons.FcBarChart className="me-2"/>
                                                        3.27%
                                                    </span>
                                                </p>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car1">
                                                <i className="fas fa-cart-plus fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row className="dash2">
                        <Col xs="5">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car2">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Pedidos en Transito</h5>
                                                <h2 className="my-2 py-1">20</h2>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2">
                                                        <icons.FcBarChart className="me-2"/>
                                                        3.27%
                                                    </span>
                                                </p>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car1">
                                                <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="5">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car2">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Ingreso Neto</h5>
                                                <h3 className="my-2 py-1">S/. 1500</h3>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2">
                                                        <icons.FcBarChart className="me-2"/>
                                                        3.27%
                                                    </span>
                                                </p>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car1">
                                                <i className="fas fa-cash-register fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                
                    </Row>


                    {/* Tipos de Pago */}
                    
                    <Row className="dash2">
                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car3">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Visa</h5>
                                                <h3 className="my-2 py-1">S/. 2000</h3>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car4">
                                                <i className="fab fa-cc-visa fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car3">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Mastercard</h5>
                                                <h3 className="my-2 py-1">S/. 1500</h3>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car4">
                                                <i className="fab fa-cc-mastercard fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car3">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">PayPal</h5>
                                                <h3 className="my-2 py-1">S/. 1500</h3>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car4">
                                                <i className="fab fa-cc-paypal fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col className="car3">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Dinners Club</h5>
                                                <h3 className="my-2 py-1">S/. 1500</h3>
                                        </Col>
                                        
                                        <Col className="car4">
                                                <i className="fab fa-cc-diners-club fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="2">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <div className="car3">
                                                <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                                <h3 className="my-2 py-1">S/. 1500</h3>
                                            </div>  
                                        </Col>
                                        
                                        <Col className="car4">
                                                <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="dash2">
                        <Col>
                            <Row>
                                <div className="init">

                                    <div className="car3">
                                        <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                        <h3 className="my-2 py-1">S/. 1500</h3>
                                    </div>

                                    <div className="car4">
                                        <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                    </div>

                                </div>

                                <div className="init">

                                    <div className="car3">
                                        <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                        <h3 className="my-2 py-1">S/. 1500</h3>
                                    </div>

                                    <div className="car4">
                                        <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                    </div>

                                </div>

                            {/* <div className="init">
                                <div className="car3">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                    <h3 className="my-2 py-1">S/. 1500</h3>
                                </div>
                                <div className="car4">
                                    <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                </div>
                            </div> */}
                            </Row>
                        </Col>

                        <Col>
                            <div className="init">
                                <div className="car3">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                    <h3 className="my-2 py-1">S/. 1500</h3>
                                </div>
                                <div className="car4">
                                    <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                </div>
                            </div>

                            <div className="init">
                                <div className="car3">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                    <h3 className="my-2 py-1">S/. 1500</h3>
                                </div>
                                <div className="car4">
                                    <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                </div>
                            </div>

                        </Col>

                        <Col>
                            <div className="init">
                                <div className="car3">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                    <h3 className="my-2 py-1">S/. 1500</h3>
                                </div>
                                <div className="car4">
                                    <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                </div>
                            </div>

                            <div className="init">
                                <div className="car3">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">American Express</h5>
                                    <h3 className="my-2 py-1">S/. 1500</h3>
                                </div>
                                <div className="car4">
                                    <i className="fab fa-cc-amex fs-1 primary-text border rounded-full secondary-bg p-4"></i>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
        </div>
    )
}

