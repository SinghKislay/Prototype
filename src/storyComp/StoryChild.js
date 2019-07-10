import React, {Component} from "react"
import axios from "axios"
import "./Story.css"
import Img from "react-image"

class StoryChild extends Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            styleName:"storyCont",
            howerStyle:"",
            left:"",
            right:"",
            imgs:[]
        }
        this.getStoryUI = this.getStoryUI.bind(this);
        this.getPics = this.getPics.bind(this);
        
    }


    storyClick = () =>{
        this.props.blur();
        
        this.setState({
            styleName:"storyCont1",
            howerStyle:"storyUI1",
            left:"left",
            right:"right"
        })
    }


    getPics = async (str) => {
        let res = await axios.get(str);
        let  data_url  = res.data.message;
        let url = this.state.imgs;
        url.push(data_url);
        this.setState({imgs:url})
        
    }

    componentDidMount = () => {
        for(let i=0;i<4;i++){
            this.getPics("https://dog.ceo/api/breeds/image/random");
        }
        
    }

    componentDidUpdate = () => {
        var stl = document.getElementsByClassName("storyCont")
        for (let i of stl){
            console.log(i)
        }
    }

    getStoryUI = () => {
        let no_url = this.state.imgs.length;
        let design = [];
        //console.log(this.state.howerStyle);
        for(var i=0; i < no_url; i++){
            design.push(<div className={this.state.howerStyle} key={i}></div>)
        }
        return design
    }

    displayImg = () => {
        return(<div className="img" ><Img src={this.state.imgs[this.state.index]} decode={false}></Img></div>)}
    
    leftClick = () =>{

        this.setState({index:this.state.index-1})
        
    }

    rightClick = () =>{
        this.setState({index:this.state.index+1})
        
    }

    render(){
        let storybar = this.getStoryUI();
        let img = this.displayImg();
        //console.log(this.state.index)
        return (
        <div className={this.state.styleName} onClick={this.storyClick}>
        <div style={{position:"relative"}}><div style={{position:"absolute",width:"100%"}}><div style={{position:"relative",display:"flex"}}><div style={{zIndex:"1000"}} className={this.state.left} onClick={this.leftClick}></div> <div style={{zIndex:"1000"}} className={this.state.right} onClick={this.rightClick}></div></div></div></div>
        <div style={{position:"static"}}>{img}</div>
        <div style={{position:"relative"}}><div style={{position:"absolute",width:"100%"}}><div style={{position:"relative",display:"flex",justifyContent:"space-around"}}>{storybar}</div></div>
        </div></div>)
    }
}

export {StoryChild};