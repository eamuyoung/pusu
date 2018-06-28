import React,{Component} from "react";
import "./index.scss";
export default class Headernav extends Component{
    render(){
        return(
        <div className="headernav">
          <div className="warp">
            <div className="container">
              <div className="row">
                <div className="col-md-3 logecolor">
                </div>
                <div className="col-md-9 navcolor">
                   <ul className="nav navbar-nav navbar-left">
                     <li><a href="#">首页</a></li>
                     <li><a href="#">别墅</a></li>
                     <li><a href="#">海外公寓</a></li>
                     <li><a href="#">关于朴宿</a></li>
                   </ul>
                   <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">注册</a></li>
                    <li><a href="#">登录</a></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
}