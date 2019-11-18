import React, {Component} from 'react';
import {Row, Col, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Campeonatos} from "../../pages/Campeonatos";
import {Jogos} from "../../pages/Jogos";
import {Home} from "../../pages/Homes";
import RedesSociais from '../redesSociais/RedesSociais';
import './cabecalho.css'

export default class CabecalhoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campeonatos: []
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <Row className='cabecalho'>
                    <Col md={3} className='logo'>
                        <h1><Link className={"nav-link"} to='/'>Viva Vôlei</Link></h1>
                    </Col>
                    <Col md={7} className="menu">
                        <Nav className="menu">
                            <Link className={"nav-link"} to='/'>Home</Link>
                            <Link className={"nav-link"} to='/campeonatos'>Campeonatos</Link>
                            <Link className={"nav-link"} to='/jogos'>Jogos</Link>
                        </Nav>
                    </Col>
                    <Col md={"auto"}>
                        <RedesSociais/>
                    </Col>
                </Row>
                <Row className="conteudo">
                    <Switch>
                        <Route path="/campeonatos">
                            <Campeonatos/>
                        </Route>
                        <Route path="/jogos">
                            <Jogos/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Row>
            </Router>
        )
    }
}