import React,{Component} from "react";
import "./search.scss";
export default class SearchBox extends Component{
    constructor(props){
        super(props);
        // this.clickDisplay=(event)=>{
        // //  event.target.style = "display:none";
        // console.log(event.target)
        // }
    } 
    render(){
        return(
            <div className="container searchbox">
              <div className="row searchbord">

                <div className="col-md-4 searchinput" onClick={this.clickDisplay}>
                  <span className="glyphicon glyphicon-map-marker iconsize"></span>
                  <input type="text" value=""/>
                  <label className="placeholder" >城市目的地</label>
                </div>
                
                <div className="col-md-4 searchbox-mid searchinput">
                   <div className="row">
                     <div className="col-md-6">
                        <span className="glyphicon glyphicon-calendar iconsize"></span>
                        <input type="text" value=""/>
                        <label className="placeholder" >入住日期</label>
                     </div>
                     <div className="col-md-6">
                        <span className="glyphicon glyphicon-calendar iconsize"></span>
                        <input type="text" value=""/>
                        <label className="placeholder" >退房日期</label>
                     </div>
                   </div>
                </div>
                <div className="col-md-3 searchinput searchbox-right">
                        <span className="glyphicon glyphicon-user iconsize"></span>
                        <label className="placeholder" >不限</label>
                </div>
                <div className="col-md-1 search-button">
                      <button className="button-color">搜索</button>
                </div>
              </div>
            </div>
        )
    }
}