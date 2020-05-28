import React, {Component} from 'react';
import './css/cadastro.css'
import { Link } from 'react-router-dom';

export class cadastroC extends Component {
    render() {
        return (
            <center>
            <div className='cadastro'>
                <h1>Cadastro</h1>
                <p className='center_D'>CPF</p><input></input>
                <p>Data Nascimento</p><input></input>
                <p>Senha</p><input></input>
                <p>Repita a Senha</p><input></input>
                <Link to='/login_d' className='links'>
                <button >fazer cadastro</button>
                </Link>
            </div>
            </center>
        )
   }
};

export default cadastroC;