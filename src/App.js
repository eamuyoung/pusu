import React,{Component} from 'react';
import {Bieshu} from "./containers";
import {HashRouter} from "react-router-dom";
export default class App extends Component{
    render(){

        return (
            <HashRouter>
                <div>
                  <Bieshu/>
                </div>
            </HashRouter>
        )
    }
}