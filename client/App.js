import { hot } from 'react-hot-loader/root';
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from './MainRouter'
import './main.css'
const App=()=>{
    return(
        <Router>
            <MainRouter />
        </Router>
    )
}

export default hot(App)