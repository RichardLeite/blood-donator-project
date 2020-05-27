import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/login.css'

export class login_cadastro extends Component {
    render() {
        return (
            <center>
            <div className='pagina'>
            <div className='cadastros'>
                <h1>Cadastro</h1>
                <p>Nome e Sobrenome</p><input></input>
                <p>E-mail</p><input></input>
                <p>Senha</p><input></input>
                <p>Repita a Senha</p><input></input>
                <Link to='/cadastro_d' className='links'>
                <button >continuar cadastro</button>
                </Link>
            </div>

            <div className='login'>
                <h1>Login</h1>
                <Link to='/login_h' className='links'>
                <p className='trocalogin'> Não é Doador? Clique aqui pra fazer login ou cadastro como Hemocentro!</p>
                </Link>
                <br></br>
                <p>Email ou CPF</p><input></input>
                <p>Senha</p><input></input>
                <Link to='/meus_dados_d' className='links'>
                <button >fazer Login</button>  
                </Link>
            </div>
            </div>
            </center>
        )
   }
};

export default login_cadastro;