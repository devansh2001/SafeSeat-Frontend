import React, { Component } from 'react';
import SeatPicker from 'react-seat-picker'
class ClassSeatPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            loading: true
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

    addSeatCallback = () => {

    }

    removeSeatCallback = () => {

    }

    render() {
        const loading = this.state.loading
        return (
            <div>
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
        );
    }
}

export default ClassSeatPicker;