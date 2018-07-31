import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Todo from '../todo/Todo';
import About from '../about/About';

export default class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/todos' component={Todo} />
                    <Route path='/about' component={About} />
                    <Redirect from="*" to="todos" />
                </Switch>
            </BrowserRouter>
        );
    }
} 