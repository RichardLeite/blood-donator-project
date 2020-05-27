import React, {Component} from 'react';
import './css/cadastro.css'
import { Link } from 'react-router-dom';

export class cadastroC extends Component {
    render() {
        return (
            <center>
            <div className='cadastro'>
                <h1>Cadastro</h1>
                <p>CPF</p><input></input>
                <p>Telefone</p><input></input>
                <p>Data Nascimento</p><input></input>
                <p>Sexo</p><input></input>
                <Link to='/login_d' className='links'>
                <button >fazer cadastro</button>
                </Link>
            </div>
            </center>
        )
   }
};

export default cadastroC;