import React, {Component} from 'react';
import './css/home.css';

export class Home extends Component {
    render() {
        return (
            <center>
            <div className = 'pagina'>
                <div>
                {/* Será inserida uma imagem aqui! */}
                </div>
                <div className = 'botoes'>
                 <button > Salve uma Vida </button>
                 <button> Meus Benefícios </button>

                </div>
            </div>
            </center>
        )
   }
};

export default Home;