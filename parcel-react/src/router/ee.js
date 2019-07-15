import React from 'react'
import styles from './index.less'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const data=[
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  },
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  },
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  },
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  }
]
export default class Demo extends React.Component{
  
    // constructor(){
    //     this.state = {
    //         current: 'mail',
    //       }
    // }
    //   handleClick = (e) => {
    //     console.log('click ', e);
    //     this.setState({
    //       current: e.key,
    //     });
    //   }
    componentDidMount(){
      console.log("avc")
      data.forEach((item,url)=>{
        console.log(item.imgurl)
      })
    }
    render(){
       return(
           <div className={styles.global}>
             lpfnb
             <img src="http://lpf.yywlx.cn/_DSC1848.jpg" alt="NEUQ"/>
             <div>
             <Menu
        onClick={this.handleClick}
        // selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
             </div>
             {
               data.map((item,index)=>{
                 
                  return (
                    <div>
                    <img src={item.imgurl} alt={item.pll} ></img>
                  <span>{item.imgurl}</span>
                  </div>
                  )
                 
               })
             }
           </div>
       )
    }
}