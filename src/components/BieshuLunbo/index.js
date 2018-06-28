import React,{Component} from 'react';
import "./index.scss";
export default class BieshuLunbo extends Component{
    componentDidMount(){
        var certifySwiper = new Swiper('#certify .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: true,
            navigation: {
                nextEl: '.swiper-button-right',
                prevEl: '.swiper-button-left',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            on: {
                progress: function(progress) {
                    for (let i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        var modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.15 + 1;
                        }
                        var translate = slideProgress * modify * 100 + 'px';
                        var scale = 1 - Math.abs(slideProgress) / 5;
                        var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function(transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
        
                }
            }
        
        })
    };
    render(){
        return(
            <div id="certify">
                <div className="swiper-container">
                <div className="swiper-wrapper">
                <div className="swiper-slide"><img src="./src/public/bieshuimg/bieshu.jpg" /><p>非常难得又值钱的认证证书</p></div>
                <div className="swiper-slide"><img src="./src/public/bieshuimg/bieshu.jpg" /><p>非常难得又值钱的认证证书</p></div>
                <div className="swiper-slide"><img src="./src/public/bieshuimg/bieshu.jpg" /><p>非常难得又值钱的认证证书</p></div>
                <div className="swiper-slide"><img src="./src/public/bieshuimg/bieshu.jpg" /><p>非常难得又值钱的认证证书</p></div>
                <div className="swiper-slide"><img src="./src/public/bieshuimg/bieshu.jpg" /><p>非常难得又值钱的认证证书</p></div>
                </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-left">&lt;</div>
                <div className="swiper-button-right">&gt;</div>
            </div>
        )
    }
}