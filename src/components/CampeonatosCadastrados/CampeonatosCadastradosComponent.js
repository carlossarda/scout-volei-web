import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import Curl from "../curl/CurlComponent";
import './campeonatos-cadastrados.css';

class CampeonatosCadastradosComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            campeonatos: []
        };
    }

    componentDidMount() {
        let curl = new Curl();
        curl.get('/campeonatos')
            .then(res => {
                this.setState({
                    campeonatos: res
                });
            });
    }

    render() {
        return (
            <Table responsive borderless={true} size="sm"
                   className={"tabela-campeonato col-md-6 " + this.props.propriedades}>
                <thead>
                <tr className={"colunas-tabela"}>
                    <th>Campeonato</th>
                    <th>Data Campeonato</th>
                </tr>
                </thead>
                <tbody className="">
                <ListaCampeonatos campeonatos={this.state.campeonatos} atualizados={this.props.campeonatos}/>
                </tbody>
            </Table>
        )
    }
}

function ListaCampeonatos(lista) {
    let campeonatos = lista.campeonatos;
    if (lista.atualizados.campeonatos.length > lista.campeonatos.length) {
        campeonatos = lista.atualizados.campeonatos;
    }
    return campeonatos.map(campeonato => {
        return (<tr key={campeonato.id_campeonato} className={"campeonato-tr"}>
            <td>{campeonato.nome}</td>
            <td>{campeonato.data}</td>
        </tr>);
    });
}

export default CampeonatosCadastradosComponent;