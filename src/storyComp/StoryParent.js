import React, {Component} from "react"
import "./Story.css"
import {StoryChild} from "./StoryChild"


class StoryParent extends Component{
    constructor(props){
        super(props);
    this.state = {
        divStyle:"",
        Style:{overflowX:"scroll",overflowY:"hidden",whiteSpace:"nowrap",position: "relative"},
    }
    this.blurBackground = this.blurBackground.bind(this);
    }

    blurBackground(){
            this.setState({
                divStyle:"blur",
                Style:{position: "relative"}

            })
    }

    componentDidMount(){
        console.log(this.state.divStyle)
    }

    render(){
        
        return(
            <>
            <div className={this.state.divStyle}></div>
            <div style={this.state.Style} className="container">
                <StoryChild blur={this.blurBackground}/>
                <StoryChild blur={this.blurBackground}/>
                <StoryChild blur={this.blurBackground}/>
                <StoryChild blur={this.blurBackground}/>
                <StoryChild blur={this.blurBackground}/>
                <StoryChild blur={this.blurBackground}/>
                <StoryChild blur={this.blurBackground}/>
            </div>
            
            </>
        )
    }
}

export {StoryParent};