import React, {Component} from "react";

class News extends Component {
    render(){
        var  {news, index} =this.props
        return (
            <div>
                <h1>{news.id}</h1>
                <h1>{news.title}</h1>
                
                <h1>{index}</h1>
            </div>
        )
    }
}

export default News;