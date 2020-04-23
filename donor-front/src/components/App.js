import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import logo from './Menu/logo.png';

class App extends Component {
  render() {
    let links = [
      { label: 'Início', link: '#inicio', active: false},
      { label: 'Login/Cadastro', link: '#Login_Cadastro', active: false},
      { label: 'Orientações', link: '#Orientações', active: false},
      { label: 'Quem Somos', link: '#Quem Somos', active: false},
      { label: 'Apoiadores', link: '#Apoiadores', active: false}
    ];
  return (
    <div className="App">
      <div className="container center">
    <Menu links= {links} logo={logo}/>
    </div>
    </div>
  );
}};

export default App;
