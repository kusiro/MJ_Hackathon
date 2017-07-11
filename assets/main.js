import styles from '../src/css/style.scss';
import html from './index.html';
import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
  render() {
    return (
        <h1>it work!!</h1>
    );
  }
}
const app = document.getElementById('app');

ReactDom.render(<Layout/>,app);
