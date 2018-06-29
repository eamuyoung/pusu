import React,{Component} from "react";
import {Headernav,Carousel,SearchBox} from '../../components';
import {Route,NavLink} from "react-router-dom";
import "./index.scss";
import {Bigevent,AboutUs} from "../../components";
export default class AboutPushu extends Component{
    render(){
        return(
             <div>
                <div className="pusu_header">
                    <Headernav/>
                    <SearchBox/>
                    <Carousel payload={[{src:"./src/public/images/201711021901116013.jpg",link:"/"},{src:"./src/public/images/201712191924518714.jpg",link:"/"},{src:"./src/public/images/201806242344592163.jpg",link:"/"}]}/>
                </div>
                <div className="container about-warp">
                   <nav>
                      <ul className="about-nav clearfix">
                          <li><NavLink to="/about/us" activeClassName="about-nav-color">关于我们</NavLink></li>
                          <li><NavLink to="/about/event" activeClassName="about-nav-color">大事件</NavLink></li>
                          <li><a>媒体报导</a></li>
                      </ul>
                    <Route exact path="/about/event" component={Bigevent}/>
                    <Route path="/about/us" component={AboutUs}/>
                   </nav>
                </div>
             </div>
        )
    }
}