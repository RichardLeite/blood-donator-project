import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/meus_dados.css';

export class meus_dados_D extends Component {
    render() {
        return (
            <center>
            <div className='meus_dados'>

            <div className='alterar_dados_D'>
                <h1> Meus Dados </h1>
                <div className='dados_d'>
                    <br></br>
                    <p>Nome e Sobrenome</p>{/* <input placeholder="Nome e Sobrenome"></input>*/}<button> Alterar </button> 
                    <p>CPF</p>{/* <input placeholder="CPF"></input>*/}<button> Alterar </button>
                    <p>Email</p>{/* <input placeholder="Email"></input>*/}<button> Alterar </button>
                    <p>Data Nascimento</p>{/* <input placeholder="Data Nascimento"></input>*/}<button> Alterar </button>
                    <p>Senha</p>{/* <input type='password' placeholder="Senha"></input>*/}<button> Alterar </button>
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

export default meus_dados_D;