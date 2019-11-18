import React, {Component} from 'react';
import {Col, Card, CardDeck} from "react-bootstrap";
import '../css/home.css';
import Curl from "../components/curl/CurlComponent";

export class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            campeonatos: []
        }

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
            <Col xs md={"10"} className="home">
                <CardDeck>
                    <ListaCampeonatos campeonatos={this.state.campeonatos} className="cars"/>
                </CardDeck>
            </Col>
        )
    }
}

export function ListaCampeonatos(lista) {
    let campeonatos = lista.campeonatos;

    return campeonatos.map(campeonato => {
        return (
            <Card style={{width: '18rem'}} key={campeonato.id_campeonato} className="p-2">
                <Card.Body className="cards-campeonato">
                    <Card.Title>{campeonato.nome}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Inserir cidade</Card.Subtitle>
                    <Card.Text>
                        {campeonato.data}
                    </Card.Text>
                    <Card.Link href="#">Acompanhe o campeonato</Card.Link>
                </Card.Body>
            </Card>
        );
    });
}