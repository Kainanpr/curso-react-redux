import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Todo from '../todo/Todo';
import About from '../about/About';
import Menu from '../template/Menu';

//Função Arrow
export default props => (
    <div className="container">
        <Menu />
        <Todo />
        <About />
    </div>
)