import React,{Component} from 'react';
import './home.scss';
import {Carousel} from '../../components/'
export default class Home extends Component{
    render(){
        return(
            <div>
                <Carousel payload={[{src:"src/public/images/home_banner_1.jpg",link:"/banner1"},{src:"src/public/images/home_banner_2.jpg",link:"/banner2"},{src:"src/public/images/home_banner_3.jpg",link:"/banner3"}]}/>
            </div>
        )
    }
}