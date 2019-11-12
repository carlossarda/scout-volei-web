import React from 'react';
import {Row, Container, Nav} from "react-bootstrap";
import {Campeonatos} from './pages/Campeonatos';
import {Home} from './pages/Homes';
import {Jogos} from "./pages/Jogos";
import {BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/scout.css';

function App() {
    return (
        <Container className={"pg-inicial"} fluid={true}>
            <Row>
                <header className="cabecalho">
                    <h1>Scout Volei</h1>
                </header>
            </Row>
            <Row>
                <Router>
                    <Nav className="flex-sm-column">
                        <Link className={"nav-link"} to='/'>Home</Link>
                        <Link className={"nav-link"} to='/campeonatos'>Campeonatos</Link>
                        <Link className={"nav-link"} to='/jogos'>Jogos</Link>
                        {/*<Link className={"nav-link"} to={'/times'}>Times</Link>*/}
                    </Nav>
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
                </Router>
            </Row>
        </Container>
    );
}

export default App;
