import styles from '../src/css/style.scss';
import html from './index.html';
import React from "react";
import ReactDOM from "react-dom";
import sticky from "./js/sticky.js";
import parall from "./js/parall.js"
import seedContral from "./js/scrollSpeed.js"

class Selection_b extends React.Component {
    render() {
        return(
            <div id="selectionBar">
                <div class="selection">Intro</div>
                <div class="selection">Join us</div>
                <div class="selection">Q & A</div>
                <div class="selection">Partners</div>
                <div class="selection">Team</div>
                <div class="selection">Contact</div>
            </div>
        );
    }
}
class Top extends React.Component {
    render() {
        return(
            <div class="navbar">
                <div class="logo_sqr">
                    <p class="date"><b>10/</b>29.30</p>
                    <div class="line"></div>
                    <p className="localtion">交大工程四館</p>
                </div>
                <div class="title">
                    <h1>MEI-CHU</h1>
                    <h1>HACKATHON</h1>
                </div>
            </div>
        );
    }
}
class YRgear extends React.Component {
    render() {
        return(
            <div class="container"
                data-enllax-ratio=".5"
                data-enllax-type="foreground"
                data-enllax-direction="vertical"
            >
                <div class='infocard'>
                    你就是轉動世界的齒輪
                </div>
            </div>
        );
    }
}



ReactDOM.render(<YRgear/>,document.getElementById('block_1'))
ReactDOM.render( <Top/>, document.getElementById("top"));
ReactDOM.render( <Selection_b/>, document.getElementById("Bar"));
