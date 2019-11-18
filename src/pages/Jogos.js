import React, {Component} from 'react';
import {Col, Image} from "react-bootstrap";
import '../css/jogos.css';

export class Jogos extends Component {
    render() {
        return (
            <Col xs md={"10"} className='jogos'>
                <Image src="./under-construction.png" rounded={true} fluid={true} className="img"/>
            </Col>
        );
    }
}
