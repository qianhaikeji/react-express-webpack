import React, {Component} from 'react'
import NavLink from '../components/NavLink'
import { Menu, Icon, Affix } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends Component{
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      current:props.location.pathname
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({current: e.key})
  }

  render() {
    return (
      <div>
        <Affix>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="/"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></Menu.Item>
            <Menu.Item key="/repos"><NavLink to="/repos">Repos</NavLink></Menu.Item>
            <Menu.Item key="/about"><NavLink to="/about">About</NavLink></Menu.Item>
          </Menu>
        </Affix>
        {this.props.children}
      </div>
    )
  }
}
