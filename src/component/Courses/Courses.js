import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import images from "../../asset/images/client_meeting.jpg"

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container >
                    <h1 className="serviceMainTitle text-center">OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                   <img className="CourseImage" src={images}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseDetails">Details</a>
                                </Col>
                            </Row>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src={images}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseDetails">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src={images}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseDetails">Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src={images}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a href="#" className="courseDetails">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Courses;