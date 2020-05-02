import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import apoiadores from '../pages/apoiadores';
import login_cadastro from '../pages/login_cadastro';
import orientacoes from '../pages/orientacoes';
import quem_somos from '../pages/quem_somos';
import NoMatch from '../pages/NoMatch';
import Menu from '../components/Menu/Menu';
import logo from '../components/Menu/logo.png';
import  '../components/Menu/Menu.css'


const links = [
    { route: "/", label: "Home"},
    { route: "/login_cadastro", label: "Login/Cadastro"},
    { route: "/orientacoes", label: "Orientações"},
    { route: "/quem_somos", label: "Quem Somos"},
    { route: "/apoiadores", label: "Apoiadores"},
];

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Menu links= {links} logo={logo}/>
        <Switch>
            <Route exact path="/" component= {home} />
            <Route  path="/apoiadores" component= {apoiadores} />
            <Route  path="/login_cadastro" component= {login_cadastro} />
            <Route  path="/orientacoes" component= {orientacoes} />
            <Route  path="/quem_somos" component= {quem_somos} />
            <Route component={NoMatch}/>
        </Switch>
        </main>
        )
    }
};

export default Routes;