import React from 'react';
import FormularioCampeonato from "./components/FormularioCampeonatoComponent";
import {Col,Row,Container} from "react-bootstrap";
import Menu from "./components/MenuComponent";
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/scout.css';
import CampeonatosCadastrados from "./components/CampeonatosCadastradosComponent";

function App() {
    return (
        <Container className={"pg-inicial"} fluid={true}>
            <Row>
                <header className="cabecalho">
                    <h1>Scout Volei</h1>
                </header>
            </Row>
            <Row>
                <Col xs lg={2} className={"menu"}><Menu/></Col>
                <Col xs md={"10"}>
                    <FormularioCampeonato render={campeonatos => (
                        <CampeonatosCadastrados propriedades="campeonatos-cadastrados" campeonatos={campeonatos}/>
                    )}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
