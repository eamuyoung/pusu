import React,{Component} from 'react';
import "./index.scss";
export default class Bigevent extends Component{
    render(){
        var jsp = [];
        for(let i=0;i<35;i++){
        jsp.push(
            <p key={i}>2017/03/23 2017途家开放年战略发布会举行 发布“3+1”发展战略</p>
        )
        }
        return(
            <div className="about-event-content">
                <img src="./src/public/images/about/aboutpushu_03.gif"/>
                <div className="pushu-event">
                {jsp}
                </div>
           </div>
        )
    }
}