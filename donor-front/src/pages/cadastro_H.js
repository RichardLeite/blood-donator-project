import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/cadastro.css'

export class cadastroC extends Component {
    render() {
        return (
            <center>
            <div className='cadastro'>
                <h1>Cadastro</h1>
                <p>CNPJ</p><input></input>
                <p>Telefone</p><input></input>
                <br></br>
                <Link to='/login_h' className='links'>
                <button >fazer cadastro</button>
                </Link>
            </div>
            </center>
        )
   }
};

export default cadastroC;