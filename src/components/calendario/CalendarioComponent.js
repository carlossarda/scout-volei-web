import React, {Component} from 'react';
import {Calendar} from "primereact/calendar";
import './calendario.css';

class CalendarioComponent extends Component {
    constructor() {
        super();

        // let data = new Date(props.data);
        let data = null;

        this.state = {
            date: data
        };
    }

    render() {
        return (
            <div className="content-section implementation inputgrid-demo">
                <div className="p-grid p-fluid">
                    <Calendar className={"calendario-bg"} placeholder={"Clique"} dateFormat="dd/mm/yy" value={this.state.date} onChange={(e) => this.setState({date: e.value})} showTime={true} />
                </div>
            </div>
        );
    }
}

export default CalendarioComponent;