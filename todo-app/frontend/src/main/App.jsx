import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Todo from '../todo/Todo';
import About from '../about/About';

//Função Arrow
export default props => (
    <div className="container">
        <Todo />
        <About />
    </div>
)