import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import logo from '../components/Menu/logo.png';

class inicio extends Component {
  render() {
    let links = [
      { label: 'Início', link: 'index', active: true},
      { label: 'Login/Cadastro', link: 'login_cadastro', active: false},
      { label: 'Orientações', link: 'orientacoes', active: false},
      { label: 'Quem Somos', link: 'quem_somos', active: false},
      { label: 'Apoiadores', link: 'apoiadores', active: false}
    ];
  return (
    <div className="inicio">
      <div className="container center">
    <Menu links= {links} logo={logo}/>
    </div>
    <div className="title">
    <h4>Início</h4>
    <p>Aqui será a tela Inicial</p>
</div>
</div>
  );
}};
export default inicio;
