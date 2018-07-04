import React,{Component} from "react";
import {Headernav,Carousel,SearchBox,Bigevent,AboutUs,MediaReport} from '../../components';
import {Route,NavLink} from "react-router-dom";
import "./index.scss";
export default class AboutPushu extends Component{
    constructor(props){
      super(props);
      console.log(event)
    };
    render(){
        return(
             <div>
                <div className="pusu_header">
                    <Headernav/>
                    <SearchBox/>
                    <Carousel payload={[{src:"./src/public/images/201711021901116013.jpg",link:"/"},{src:"./src/public/images/201712191924518714.jpg",link:"/"},{src:"./src/public/images/201806242344592163.jpg",link:"/"}]}/>
                </div>
                <div className="container gongyu-warp">
                      <div className="hot-title">
                        <span></span>
                        <h1>热点区域</h1>
                      </div>
                      <ul className="hot-content clearfix">
                          <li><img src="./src/public/bieshuimg/bieshu.jpg"/><span>东京</span></li>
                          <li><img src="./src/public/bieshuimg/bieshu.jpg"/><span>清迈</span></li>
                          <li><img src="./src/public/bieshuimg/bieshu.jpg"/><span>大阪</span></li>
                          <li><img src="./src/public/bieshuimg/bieshu.jpg"/><span>普吉岛</span></li>
                          <li><img src="./src/public/bieshuimg/bieshu.jpg"/><span>巴厘岛</span></li>
                          <li><img src="./src/public/bieshuimg/bieshu.jpg"/><span>悉尼</span></li>
                      </ul>
                </div> 
                <div className="find-splendid">
                 <div className="find-background">
                    <div className="container">
                        <div className="find-title">
                            <span></span>
                            <h2>发现精彩</h2>
                            <span></span>
                        </div>
                        <ul className="find-content  clearfix">
                            <li>
                                <img src="./src/public/images/about/find2.gif"/>
                                <p>在温哥华的夏天遇见一个蓝紫色的梦</p>
                            </li>
                            <li>
                                <img src="./src/public/images/about/find2.gif"/>
                                <p>在温哥华的夏天遇见一个蓝紫色的梦</p>
                            </li>
                            <li>
                                <img src="./src/public/images/about/find2.gif"/>
                                <p>在温哥华的夏天遇见一个蓝紫色的梦</p>
                            </li>
                        </ul>
                    </div>
                 </div>
                </div>
                <div className="container add-warp">
                    <div className="add-title">
                        <span></span>
                        <h2>
                        增值服务
                         <p>拨打服务电话 400-012-3901</p>
                        </h2>
                    </div>
                    <ul className="add-content  clearfix">
                        <li>
                            <img src="./src/public/images/about/jiejisong2.gif" />
                            <p>接机送</p>
                        </li>
                        <li>
                            <img src="./src/public/images/about/jiejisong2.gif" />
                            <p>接机送</p>
                        </li>
                        <li>
                            <img src="./src/public/images/about/jiejisong2.gif" />
                            <p>接机送</p>
                        </li>
                        <li>
                            <img src="./src/public/images/about/jiejisong2.gif" />
                            <p>接机送</p>
                        </li>
                        <li>
                            <img src="./src/public/images/about/jiejisong2.gif" />
                            <p>接机送</p>
                        </li>
                        <li>
                            <img src="./src/public/images/about/jiejisong2.gif" />
                            <p>接机送</p>
                        </li>
                    </ul>
                </div>
             </div>
        )
    }
}