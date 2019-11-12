import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Campeonato from "../pages/Campeonatos";

class MenuComponent extends Component {

    render() {
        return (
            <Router>
                <Nav className="flex-sm-column">
                    <Link className={"nav-link"} to={'/'}>Home</Link>
                    <Link className={"nav-link"} to={'/campeonatos'}>Campeonatos</Link>
                    <Link className={"nav-link"} to={'/jogos'}>Jogos</Link>
                    {/*<Link className={"nav-link"} to={'/times'}>Times</Link>*/}
                </Nav>
                <Switch>
                    <Route path="/campeonatos">
                        <Campeonato/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default MenuComponent;