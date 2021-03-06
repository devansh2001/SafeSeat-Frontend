import React, { Component } from 'react';
import SeatPicker from 'react-seat-picker';
import { Container, Row, Col, Button } from 'react-bootstrap';
class ClassSeatPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            loading: true,
            selectedSeatId: ''
        }
    }

    componentWillMount = async () => {
        let URL = 'http://localhost:5000/rooms/get-current-configuration/culc-220';
        let headers = new Headers();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "*");
        headers.append("Content-Type", "application/json");
        
        let apiResponse = null;
        await fetch(URL, {
            method: 'GET',
            headers: headers
        })
        .then(data => data.json())
        .then(data => apiResponse = data)
        .catch(err => console.log(err));
        console.log(apiResponse);
        if (apiResponse === null) {
            return;
        }
        this.setState({
            rows: apiResponse['seats'],
            loading: false
        })
    }

    addSeatCallback = ({ row, number, id }, addCb) => {
        this.setState({
          loading: true
        }, async () => {
          await new Promise(resolve => setTimeout(resolve, 1500))
          console.log(`Added seat ${number}, row ${row}, id ${id}`)
          addCb(row, number, id, '')
          this.setState({ loading: false, selectedSeatId: id })
        })
      }

    removeSeatCallback = ({ row, number, id }, removeCb) => {
        this.setState({
            loading: true
        }, async () => {
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log(`Removed seat ${number}, row ${row}, id ${id}`)
            // A value of null will reset the tooltip to the original while '' will hide the tooltip
            const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
            removeCb(row, number, newTooltip)
            this.setState({ loading: false, selectedSeatId: '' })
        })
    }

    chooseSeat = async () => {
        const chosen = this.state.selectedSeatId;
        let URL = 'http://localhost:5000/rooms/choose-seat';
        var headers = new Headers();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "*");
        headers.append("Content-Type", "application/json");

        let body = {
            'room_id': 'culc-220',
            'seat_id': chosen,
            'email': 'dev@temp.com'
        }

        let apiResponse = null;
        await fetch(URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
        .then(data => data.json())
        .then(data => apiResponse = data)
        .catch(err => console.log(err));
        console.log(apiResponse);
    }

    render() {
        const loading = this.state.loading
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2>Please select a seat</h2>
                        </Col>
                    </Row>
                </Container>
                <div className='my-seat'>
                <SeatPicker
                    addSeatCallback={this.addSeatCallback}
                    removeSeatCallback={this.removeSeatCallback}
                    maxReservableSeats={1}
                    alpha
                    visible
                    rows={this.state.rows}
                    selectedByDefault
                    loading={loading}
                    tooltipProps={{multiline: true}}
                />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={this.chooseSeat}>
                                Confirm
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ClassSeatPicker;