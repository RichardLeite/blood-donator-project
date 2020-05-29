import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/login.css'

export class login_cadastroH extends Component {
    render() {
        return (
            <center>
            <div className='pagina'>
            <div className='cadastros'>
                <h1>Cadastro</h1>
                <p  className='cadastro_login'>Razão Social</p><input></input>
                <p>E-mail</p><input></input>
                <Link to='/cadastro_h' className='links'>
                <button >continuar cadastro</button>
                </Link>
            </div>
            <div className='login'>
                <h1>Login</h1>
                <Link to='/login_d' className='links'>
                <p className='trocalogin'> Não é Hemocentro? Clique aqui pra fazer login ou cadastro como Doador!</p>
                </Link>
                <br></br>
                <p>Email ou CNPJ</p><input></input>
                <p>Senha</p><input></input>
                <Link to='/meus_dados_d' className='links'>
                <button >fazer login</button>
                </Link>
            </div>
            </div>
            </center>
        )
   }
};

export default login_cadastroH;