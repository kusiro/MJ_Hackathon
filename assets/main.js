import styles from '../src/css/style.scss';
import html from './index.html';
import React from "react";
import ReactDOM from "react-dom";
import sticky from "./js/sticky.js";

// class Selection_b extends React.Component {
//     render() {
//         return(
//             <div>
//                 <div class="selection">Intro</div>
//                 <div class="selection">Join us</div>
//                 <div class="selection">Q & A</div>
//                 <div class="selection">Partners</div>
//                 <div class="selection">Team</div>
//                 <div class="selection">Contact</div>
//             </div>
//         );
//     }
// }
//
// ReactDom.render( <Selection_b/>, document.getElementById("selectionBar"));


const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('app')
);
