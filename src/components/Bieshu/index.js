import React,{Component} from "react";
import {Headernav,Carousel} from '../../components';
export default class Bieshu extends Component{
    render(){
        return(
          <div>
            <Headernav/>
            <Carousel payload={[{src:"./src/public/images/201711021901116013.jpg",link:"/"},{src:"./src/public/images/201712191924518714.jpg",link:"/"},{src:"./src/public/images/201806242344592163.jpg",link:"/"}]}/>
          </div>
        )
    }
}