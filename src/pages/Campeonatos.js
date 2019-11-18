import React, {Component} from 'react';
import FormularioCampeonato from "../components/FormularioCampeonato/FormularioCampeonatoComponent";
import CampeonatosCadastrados from "../components/CampeonatosCadastrados/CampeonatosCadastradosComponent";
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
