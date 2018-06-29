import React,{Component} from "react";
import "./index.scss";
export default class AboutUs extends Component{
    render(){
        return(
            <div className="about-us-warp">
              <div className="aboutus-top">
                <ul className="clearfix">
                    <li>
                      <h3>特色民居</h3>
                      <p>一居一世界 ，途家百色彩。 目前拥有别墅、城堡、公寓等30万套
                      精品直签房源，覆盖全球80个国家800个城市，包括别墅、皇宫、树屋、船屋、城堡等众多个性化
                      房源，同时利用VR全景看房技术保证所见即所得</p>
                      <img src="./src/public/images/about/tese_01.gif" />
                    </li>
                    <li><img src="./src/public/images/about/tese_02.gif" /></li>
                </ul>
              </div>
              <div className="aboutus-mid">
                <ul className="clearfix">
                       <li><img src="./src/public/images/about/tese_03.gif" /></li>
                        <li>
                            <h3>贴心服务</h3>
                            <p>一居一世界 ，途家百色彩。 目前拥有别墅、城堡、公寓等30万套
                            精品直签房源，覆盖全球80个国家800个城市，包括别墅、皇宫、树屋、船屋、城堡等众多个性化
                            房源，同时利用VR全景看房技术保证所见即所得</p>
                            <img src="./src/public/images/about/tese_4.gif" />
                        </li>
                    </ul>
              </div>
              <div className="aboutus-bottom">
                <ul className="clearfix">
                        <li>
                            <h3>明星同款</h3>
                            <p>一居一世界 ，途家百色彩。 目前拥有别墅、城堡、公寓等30万套
                            精品直签房源，覆盖全球80个国家800个城市，包括别墅、皇宫、树屋、船屋、城堡等众多个性化
                            房源，同时利用VR全景看房技术保证所见即所得</p>
                            <img src="./src/public/images/about/tese_6.gif" />
                        </li>
                        <li><img src="./src/public/images/about/tese_5.gif" /></li>
                    </ul>
              </div>
            </div>
        )
    }
}