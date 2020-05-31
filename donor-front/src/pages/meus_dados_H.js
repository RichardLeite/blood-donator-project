import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/meus_dados.css';

export class meus_dados_H extends Component {
    render() {
        return (
            <center>
                <div className='meus_dados'>
                <div className='alterar_dados_D'>
                    <h1> Meus Dados </h1>
                    <div className='dados_d'>
                        <br></br>
                        <p>Razão Social</p><input placeholder="Seu Nome e Sobrenome"></input>
                        <p>CNPJ</p><input placeholder="Seu CPF"></input>
                        <p>Email</p><input placeholder="Seu Email"></input>
                        <p>Senha</p><input type='password' placeholder="Sua Senha"></input><br></br>
                        <button> Salvar Alterações </button>
                    </div>
                </div>

                <div className='meus_agendamentos'>
                    <h1> Meus Agendamentos </h1>
                    <p> Por enquanto você não tem nenhum agendamento!<br></br>
                    Clique abaixo para realizar um agendamento! </p>
                    <Link to='/beneficios' className='links'>
                        <button > Realizar um Agendamento </button>
                        </Link>
                    <div className='meus_beneficios'>
                    <p> Você pode trocar seus pontos de agendamento por benefícios sempre que concluir uma 
                        doação de sangue.<br></br> Clique no botão abaixo para ver os benefícios disponíveis</p>
                        <Link to='/beneficios' className='links'>
                        <button > Acessar Benefícios </button>
                        </Link>
                    </div>
                </div>
            </div>
            </center>
        )
   }
};

export default meus_dados_H;