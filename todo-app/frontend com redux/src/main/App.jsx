import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../template/template.css';

import React from 'react';
import Menu from '../template/Menu';
import Routes from './Routes';

//Função Arrow
export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)