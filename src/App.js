import React,{Component} from 'react';
import { HashRouter} from 'react-router-dom';
import {Home} from './containers'
export default class App extends Component{
    render(){

        return (
                <HashRouter>
                
                
                <div>
                    <Home/>
                    
                </div>
                </HashRouter>
        )
    }
}