import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class login_cadastroCH extends Component {
    render() {
        return (
            <center>
            <div className='pagina'>
            <div className='cadastro'>
                <h1>Cadastro</h1>
                <p>Razão Social</p><input></input>
                <p>E-mail</p><input></input>
                <p>Senha</p><input></input>
                <p>Repita a Senha</p><input></input>
                <button >fazer cadastro</button>
            </div>
            <div className='login'>
                <h1>Login</h1>
                <Link to='/login_cadastro' className='links'>
                <p className='trocalogin'> Não é Hemocentro? Clique aqui pra fazer login ou cadastro como Doador!</p>
                </Link>
                <br></br>
                <p>Email ou CNPJ</p><input></input>
                <p>Senha</p><input></input>
                <button > fazer Login </button>
            </div>
            </div>
            </center>
        )
   }
};

export default login_cadastroCH;