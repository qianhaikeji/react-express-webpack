import React, {Component} from 'react'
import { Parallax,Background } from 'react-parallax';

export default class Home extends Component{
  render() {
    return (
        <div className="home-page">
            <Parallax bgImage="http://rrutsche.github.io/www/assets/1.jpg" bgHeight='800px' strength={300}>
                <div className="section first">
                    <div className="title">写的是寂寞</div>
                    <div className="subtitle">Web development, mobile development and UI/UX design</div>
                </div>
            </Parallax>

            <div className="section">section</div>
            <div className="section">section</div>
        </div>
    );
  }
}
