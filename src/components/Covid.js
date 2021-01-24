import React, { Component } from 'react';
import { Form, Row, Container, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
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
            <div>
                <Container>
                    <Row>
                        <h1>Add Your COVID Test Result</h1>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>
                                Have you been tested for COVID in the last 7 days?
                            </Form.Label>
                            <Form.Control onChange={this.onTestedChange} as='select'>
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>
                                Please input your COVID-19 Test Result
                            </Form.Label>
                            <Form.Control onChange={this.onResultChange} as='select'>
                                <option>Negative</option>
                                <option>Positive</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Button onClick={this.buttonClick}>
                            Submit COVID-19 Testing Information
                        </Button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Covid;