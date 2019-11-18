import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import './redes-sociais.css';

library.add(fab);

export default class RedesSociais extends Component{

    render() {
        return (
            <div className={"redes-sociais"}>
                <a href="https://www.facebook.com/carlos.augustosarda"><FontAwesomeIcon icon={['fab','facebook']}/></a>
                <a href="https://www.linkedin.com/in/carlos-augusto-sard%C3%A1-0871b8164/"><FontAwesomeIcon icon={['fab','linkedin']}/></a>
                <a href="https://github.com/carlossarda"><FontAwesomeIcon icon={['fab','github']}/></a>
            </div>
        )
    }
}
