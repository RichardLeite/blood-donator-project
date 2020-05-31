import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/cadastro.css'

export class cadastroC extends Component {
    render() {
        return (
            <center>
            <div className='cadastro'>
                <h1>Cadastro</h1>
                <p className='center_H'>CNPJ</p><input></input>
                <p>Senha</p><input type='password'></input>
                <p>Repita a Senha</p><input type='password'></input>
                <Link to='/login_h' className='links'>
                <button >fazer cadastro</button>
                </Link>
            </div>
            </center>
        )
   }
};

export default cadastroC;