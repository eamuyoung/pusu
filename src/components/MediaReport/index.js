import React,{Component} from "react";
import "./index.scss";
export default class MediaReport extends Component{
    componentDidMount(){
        this.state = {
            arr: []
            }
        var url = `http://localhost:3000/products?_page=1&_limit=21`;
        fetch(url)
            .then(res => {
                return res.json();
            }).then(data =>{
                this.setState({
                    arr: [...data]
                })
            })
    };
    constructor(props){
       super(props); 
       var page = 1;
       this.state = {
        arr: []
        }
       this.tagpage =(event)=>{
           page = event.target.text
           var url = `http://localhost:3000/products?_page=${page}&_limit=21`;
        fetch(url)
            .then(res => {
                return res.json();
            }).then(data =>{
                this.setState({
                    arr: [...data]
                })
            })
       }
    };
    render(){
        console.log(this.state.arr)
        var jsm = [];
        for (let i = 0; i<this.state.arr.length;i++){
            jsm.push(
                <div className="media-content" key={i}>
                <p> {this.state.arr[i].productName} <span>新浪</span></p>
               </div>
            )
        }
        return(
            <div className="media-warp">
               {jsm}
               <nav aria-label="Page navigation "  className="text-center">
                        <ul className="pagination ">
                            <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li><a onClick={this.tagpage}>1</a></li>
                            <li><a onClick={this.tagpage}>2</a></li>
                            <li><a onClick={this.tagpage}>3</a></li>
                            <li><a onClick={this.tagpage}>4</a></li>
                            <li><a onClick={this.tagpage}>5</a></li>
                            <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}