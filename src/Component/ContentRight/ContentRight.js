import React, { Component } from "react";
import BottomContentRight from "./BottomContentRight";
import TopContentRight from './TopContentRight';

class ContentRight extends Component {
    render () {
        return (
        	<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">

                <TopContentRight></TopContentRight>
                <BottomContentRight></BottomContentRight>

            </div>
        )
    }
}

export default ContentRight; 