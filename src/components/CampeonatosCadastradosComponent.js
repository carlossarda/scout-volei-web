import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import Curl from "./curl/CurlComponent";

class CampeonatosCadastradosComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            campeonatos:[]
        };
    }

    componentDidMount() {
        let curl = new Curl();
        curl.get('/campeonatos')
            .then( res => {
                this.setState({
                    campeonatos : res
                });
        });

    }

    render() {
        return (
            <Table responsive striped hover size="sm" className={"col-md-6 " + this.props.propriedades}>
                <thead>
                <tr>
                    <th>Campeonato</th>
                    <th>Data Campeonato</th>
                </tr>
                </thead>
                <tbody>
                    <ListaCampeonatos campeonatos = {this.state.campeonatos} atualizados = {this.props.campeonatos}/>
                </tbody>
            </Table>
        )
    }
}

function ListaCampeonatos(lista) {
    let campeonatos =  lista.campeonatos;
    if(lista.atualizados.campeonatos.length > lista.campeonatos.length){
        campeonatos = lista.atualizados.campeonatos;
    }
    return campeonatos.map(campeonato => {
        return (<tr key={campeonato.id_campeonato}>
            <td>{campeonato.nome}</td>
            <td>{campeonato.data}</td>
        </tr>);
    });
}

export default CampeonatosCadastradosComponent;