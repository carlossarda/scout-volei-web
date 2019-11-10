import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';

class MenuComponent extends Component {

    render() {
        return (
            <Nav defaultActiveKey="/home" className="flex-sm-column">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link eventKey="link-1">Campeonatos</Nav.Link>
                <Nav.Link eventKey="link-2">Jogos</Nav.Link>
            </Nav>
        )
    }
}

export default MenuComponent;