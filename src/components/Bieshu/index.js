import React,{Component} from "react";
import {Headernav,Carousel,SearchBox,BieshuList,BieshuLunbo} from '../../components';
import "./index.scss";
export default class Bieshu extends Component{
    render(){
        return(
          <div>
             <div className="pusu_header">
                   <Headernav/>
                   <SearchBox/>
                <Carousel payload={[{src:"./src/public/images/201711021901116013.jpg",link:"/"},{src:"./src/public/images/201712191924518714.jpg",link:"/"},{src:"./src/public/images/201806242344592163.jpg",link:"/"}]}/>
             </div>
             <div className="bieshu-main">
                <BieshuList/>
                <BieshuLunbo/>
             </div>
             <div className="bieshu-bottom">
               <div className="container">
                <div className="bieshu-bottom-content">
                  <h2>定制别墅之旅</h2>
                  <p>填写出行需求，住墅礼宾为您1对1规划行程</p>
                  <ul className="bieshu-bottom-dingzhi">
                      <li>个人定制</li>
                      <li>团队定制</li>
                  </ul>
                </div>
               </div>
             </div>
          </div>
        )
    }
}