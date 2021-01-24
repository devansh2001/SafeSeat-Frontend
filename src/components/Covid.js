import React, { Component } from 'react';
import { Form, Row, Container, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './style.css';
import logo from './whiteLogo.png';


class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tested: 'No',
            result: 'Negative'
        }
    }

    onTestedChange = (e) => {
        const tested = e.currentTarget.value;
        this.setState({
            tested: tested
        });
    }

    onResultChange = (e) => {
        const result = e.currentTarget.value;
        this.setState({
            result: result
        });
    }

    buttonClick = (e) => {
        const tested = this.state.tested;
        const result = this.state.result;

        if (tested === 'No') {
            alert('Please get tested for COVID-19 before you can book a seat');
        } else {
            if (result === 'Positive') {
                alert('Please follow CDC guidelines () and quaratine');
            } else {
                browserHistory.push('/pick-seat');
            }
        }
    }

    render() {
        return (
            <div className="covidPage">
                <Container>
                    <img src={logo} alt="Logo" className ="logoCovid" />
                    <div class="sign-up">
                        <Row>
                            <h2 className="covidTitle">Add Your COVID Test Result</h2>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label  className= "labelCovid">
                                    Have you been tested for COVID in the last 7 days?
                                </Form.Label>
                                <Form.Control onChange={this.onTestedChange} as='select'  className= "inputCovid">
                                    <option>No</option>
                                    <option>Yes</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Label  className= "labelCovid">
                                    Please input your COVID-19 Test Result
                                </Form.Label>
                                <Form.Control onChange={this.onResultChange} as='select'  className= "inputCovid">
                                    <option>Negative</option>
                                    <option>Positive</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Button onClick={this.buttonClick}  className= "buttonCovid">
                                Submit COVID Testing Information
                            </Button>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Covid;