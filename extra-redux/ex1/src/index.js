import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import Field from './Field';

ReactDOM.render(
    <Field initialValue='Teste' />, 
    document.getElementById('root')
);

registerServiceWorker();
