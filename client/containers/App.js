import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import { Menu, Icon, Affix } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Affix>
          <div className="nav">
            <div className="topnav">
              <IndexLink to="/" className="float-left brand">Shallow Sea Team</IndexLink>
              <div className="float-right">
                <Menu selectedKeys={[this.props.location.pathname]} mode="horizontal">
                  <Menu.Item key="/about"><Link to="/about">关于</Link></Menu.Item>
                </Menu>
              </div>
            </div>
          </div>
        </Affix>
        <div className="clear-left container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
