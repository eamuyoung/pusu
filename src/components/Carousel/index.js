import React,{Component} from 'react';
import './carousel.scss';
import { NavLink } from 'react-router-dom';
export default class Carousel extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount= () =>{
        var swiper = new Swiper ('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            pagination: {
                el: '.swiper-pagination',
              },
            loop:true,
            autoplay:{
                delay:5000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            effect : 'fade',
            fadeEffect: {
                crossFade: false,
              }
        })
            
    }
    
    render(){
        console.log(this.props.payload)
        return(
            <div>
            <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide"><NavLink to={this.props.payload[0].link}><img src={this.props.payload[0].src}/></NavLink></div>
                <div className="swiper-slide"><NavLink to={this.props.payload[1].link}><img src={this.props.payload[1].src}/></NavLink></div>
                <div className="swiper-slide"><NavLink to={this.props.payload[2].link}><img src={this.props.payload[2].src}/></NavLink></div>
            </div>
            {/*<!-- 如果需要分页器 -->*/}
            <div className="swiper-pagination"></div>
            
            {/*<!-- 如果需要导航按钮 -->*/}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
            </div>
        )
    }
}