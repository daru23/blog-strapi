import React from 'react';
import {Route} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './themes';
import Header from './components/Header';
import Home from './pages/Home';

export const App = () =>
    <MuiThemeProvider theme={theme}>
        <div id="app-component">
            <Header/>
            <Route exact path="/" component={Home}/>
        </div>
    </MuiThemeProvider>;

export default App;