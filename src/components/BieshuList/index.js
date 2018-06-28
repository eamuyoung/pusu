import React,{Component} from 'react';
import "./BeishuList.scss";
export default class BeishuList extends Component{
    render(){
        var beiContent =[]
        for( let i=0; i<3;i++){
            beiContent.push(
            <div className="col-md-4" key={i}>
                <div className="bieshu-image">
                <img src="./src/public/bieshuimg/bieshu.jpg" alt=""/>
                </div>
                <p className="bieshu-title">傍水绿墅-10米挑空度假休闲吧</p>
                <p className="bieshu-describe">四居室&nbsp;380平&nbsp;宜居10人&nbsp;北京|昌平区</p>
                <p className="bieshu-price">￥3280</p>
            </div>
            )
        }
        return(
            <div className="container text-center">
               <h1 className="bieshu-heading"> 最受欢迎的别墅</h1>
               <ul className="bieshu-nav clearfix">
                   <li><a>北京</a> <span className="bieshu-nav-bottom"></span></li>
                   <li><a>杭州</a><span className="bieshu-nav-bottom"></span></li>
                   <li><a>上海</a><span className="bieshu-nav-bottom"></span></li>
                   <li><a>深圳</a><span className="bieshu-nav-bottom"></span></li>
                   <li><a>天津</a><span className="bieshu-nav-bottom"></span></li>
                   <li><a>成都</a><span className="bieshu-nav-bottom"></span></li>
                   <li><a>大理</a><span className="bieshu-nav-bottom"></span></li>
                   <li><a>三亚</a><span className="bieshu-nav-bottom"></span></li>
                   <li><a>丽江</a><span className="bieshu-nav-bottom"></span></li>
               </ul>
               <div className="bieshu-content row">
                    {beiContent}
               </div>
               <div className="bieshu-content row">
                    {beiContent}
               </div>
               <div className="bottom-button">
                 <a href="#">
                    查看更多&nbsp;>
                 </a>
               </div>
               <h1 className="bieshu-heading"> 住墅路上的故事</h1>
            </div>
        )
    }
}