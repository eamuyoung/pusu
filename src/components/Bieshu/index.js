import React,{Component} from "react";
import {Headernav,Carousel,SearchBox,BeishuList} from '../../components';
import "./index.scss";
export default class Bieshu extends Component{
    render(){
        return(
          <div>
             <div className="bieshu-header">
                   <Headernav/>
                   <SearchBox/>
                <Carousel payload={[{src:"./src/public/images/201711021901116013.jpg",link:"/"},{src:"./src/public/images/201712191924518714.jpg",link:"/"},{src:"./src/public/images/201806242344592163.jpg",link:"/"}]}/>
             </div>
             <div className="bieshu-main">
                <BeishuList/>
             </div>
          </div>
        )
    }
}