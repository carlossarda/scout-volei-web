import React from 'react';
import {Container} from "react-bootstrap";
import Cabecalho from './components/Cabecalho/CabecalhoComponent';
import 'primereact/resources/primereact.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/campeonato.css';

function App() {
    return (
        <Container className="pg-inicial" fluid={true}>
            <Cabecalho/>
        </Container>
    );
}

export default App;
