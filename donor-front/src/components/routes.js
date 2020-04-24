import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import inicio from '../pages/inicio';
import apoiadores from '../pages/apoiadores';
import login_cadastro from '../pages/login_cadastro';
import orientacoes from '../pages/orientacoes';
import quem_somos from '../pages/quem_somos';

const Routes = () => (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {inicio} />
            <Route  path="/apoiadores" component= {apoiadores} />
            <Route  path="/login_cadastro" component= {login_cadastro} />
            <Route  path="/orientacoes" component= {orientacoes} />
            <Route  path="/quem_somos" component= {quem_somos} />
        </Switch>
        </BrowserRouter>
);

export default Routes;