import React, {Component} from 'react';
import FormularioCampeonato from "../components/FormularioCampeonatoComponent";
import CampeonatosCadastrados from "../components/CampeonatosCadastradosComponent";
import {Col} from "react-bootstrap";

export class Campeonatos extends Component {
    render() {
        return (
            <Col xs md={"10"}>
                <FormularioCampeonato render={campeonatos => (
                    <CampeonatosCadastrados propriedades="campeonatos-cadastrados" campeonatos={campeonatos}/>
                )}/>
            </Col>
        );
    }
}
