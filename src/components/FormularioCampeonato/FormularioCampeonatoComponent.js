import React, {Component} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {Calendar} from "primereact/calendar";
import Curl from '../curl/CurlComponent';
import 'primeicons/primeicons.css';
import '../calendario/calendario.css';
import './formulario-campeonato.css';

class FormularioCampeonatoComponent extends Component {

    constructor() {
        super();

        this.state = {
            campeonatos: [],
            nome_campeonato: '',
            data_campeonato: ''
        };
        this.atualizaNomeCampeonato = this.atualizaNomeCampeonato.bind(this);
        this.save = this.save.bind(this);
        this.atualizaFormulario = this.atualizaFormulario.bind(this);
    }

    atualizaNomeCampeonato(event) {
        this.setState({nome_campeonato: event.target.value});
    }

    componentDidMount() {

    }

    save() {
        let curl = new Curl();
        curl.post('/campeonatos', {
            nome_campeonato: this.state.nome_campeonato,
            data_campeonato: this.state.data_campeonato
        })
            .then(res => this.atualizaFormulario(res));
    }

    atualizaFormulario(res) {
        this.setState({
            campeonatos: res,
            nome_campeonato: '',
            data_campeonato: ''
        })
    }

    render() {

        return <div className={"conteudo-formulario"}>
            <Form className={"formulario-campeonato"}>
                <Form.Group as={Row} controlId="nomeCampeonato">
                    <Form.Label column sm="4" className={"letras-form"}>
                        Campeonato:
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Nome do Campeonato" value={this.state.nome_campeonato}
                                      onChange={this.atualizaNomeCampeonato}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="dataCampeonato">
                    <Form.Label column sm="4" className={"letras-form"}>
                        Data:
                    </Form.Label>
                    <Col sm="8">
                        <Calendar className="calendario-bg" placeholder={"Clique"} dateFormat="dd/mm/yy"
                                  value={this.state.data_campeonato}
                                  onChange={(e) => this.setState({data_campeonato: e.value})} showTime={true}/>
                    </Col>
                </Form.Group>
                <div className="botao-direita">
                    <Button variant="outline-light" onClick={this.save}>Salvar</Button>
                </div>
            </Form>
            {this.props.render(this.state)}
        </div>
    }
}

export default FormularioCampeonatoComponent;