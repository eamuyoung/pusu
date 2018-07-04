import React,{Component} from 'react';
import {Bieshu,AboutPushu,Haiwaibieshu} from "./containers";
import {HashRouter,Route} from "react-router-dom";
export default class App extends Component{
    render(){

        return (
            <HashRouter>
                <div>
                    <Route exact path="/bieshu" component={Bieshu}/>
                    <Route path="/about" component={AboutPushu}/>
                    <Route path="/haiwai" component={Haiwaibieshu}/>
                </div>
            </HashRouter>
        )
    }
}