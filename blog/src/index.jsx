import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';

// App
import Router from './Router';

render(<HashRouter>
            <Router/>
        </HashRouter>,
        document.getElementById('app'),
);
