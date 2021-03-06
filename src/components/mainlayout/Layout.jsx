import React,{Component} from 'react';
import axios from 'axios';
import { TabBar } from 'antd-mobile';
import Home from '../home/Home';
import Search from '../search/Search';
import My from '../my/My';
import Discover from '../discover/Discover';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }
    
    componentDidMount(){
      if(window.localStorage.getItem('tab')){
          this.setState({
            selectedTab:window.localStorage.getItem('tab')
          })
      }
      axios.post('https://www.ahiris.com/xulongtang/getBaseUserInfo?openId=o-lKY0-PINvDrZbGSzQNV8yomZ4',{openId:'o-lKY0-PINvDrZbGSzQNV8yomZ4c'}).then((res)=>{
        
      })
//      $.ajax({
//          url:https://www.ahiris.com/xulongtang/getBaseUserInfo?openId=o-lKY0-PINvDrZbGSzQNV8yomZ4c,
//          type:”post”,
//          data:{openId:”你前端用户授权后得到的openid”},
//          success:function (data) {
//          If (data.status && data.status === ‘error’) {
//          //获取信息失败
//          }  else {
//          //成功的获取到了用户信息
//          //比如：data.nickName 就是用户名称
//          }
//          }
//          
//      });
    }

    render() {
        return (
          <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100%' }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
              tabBarPosition="bottom"
            >
              <TabBar.Item
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                title="主页"
                key="Home"
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'redTab',
                  });
                  window.localStorage.setItem('tab','redTab');
                }}
                data-seed="logId"
              >
                <Home />
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="搜索"
                key="search"
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                  window.localStorage.setItem('tab','blueTab');
                }}
                data-seed="logId1"
              >
                <Search />
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="发现"
                key="discover"
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                  window.localStorage.setItem('tab','greenTab');
                }}
              >
                <Discover />
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我的"
                key="my"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                  window.localStorage.setItem('tab','yellowTab');
                }}
              >
                <My sendThis={this} />
              </TabBar.Item>
            </TabBar>
          </div>
        );
    }
}

export default Layout