import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/agendamento.css';

export class agendamento extends Component {
    render() {
        return (
            <center>
            <div className='agendamento'>
                <h1>Agendamento</h1>
                <p>Confirme sua Data Nascimento</p><input type='date'></input>
                <p>Peso</p><input type="number" placeholder="0.0" step="0.01" min="0" max="100"></input>
                <p>Tipo Sanguíneo</p>
                <select className="sangue">
                <option value="a+"> A+ </option> 
                <option value="a-"> A- </option>
                <option value="b+"> B+ </option>
                <option value="b-"> B- </option> 
                <option value="ab+"> AB- </option>
                <option value="ab-"> AB+ </option>
                <option value="o+"> O+ </option> 
                <option value="o-"> O- </option>
                </select>
                <p>Consumo de bebidas Alcoólicas</p>
                <select className="bebidas">
                <option value="sim"> Sim </option>
                <option value="nao"> Não </option>
                </select>
                <p> Consome tabaco ou/e é usuário de drogas ilícitas</p>
                <select className="drogas">
                <option value="tabaco"> Consumo Tabaco </option>
                <option value="drogas"> Faço uso de Drogas Ilícitas </option>
                <option value="ambos"> Ambos </option>
                <option value="nenhum"> Nenhuma das Opções </option>
                </select>
                <p> Possui Doenças Infecciosas </p>
                <select className="doenças">
                <option value="sim"> Sim </option>
                <option value="nao"> Não </option>
                </select>
                <p>CEP</p><input></input>
                <p>Endereço</p><input></input>
                <p>Número</p><input type='number'></input>
                <p>Bairro</p><input></input>
                <p>Cidade</p><input></input>
                <p>Estado</p><input></input>
                <p>Telefone/Celular para Contato</p><input></input>
                <p>Data que pretende o sangue</p><input type='date'></input>
                <p>Horário de disponibilidade para doação</p><input type='time'></input>
                <br></br>
                <Link to='/meus_dados_D' className='links'>
                <button >Salvar Agendamento</button>
                </Link>
            </div>
            </center>
        )
   }
};

export default agendamento;