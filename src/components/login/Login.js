import React,{Component} from 'react';
import Layout from '../layout/Layout';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount(){
//      window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0ea30c2f5ea83813&redirect_uri=192.168.2.100:3000&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
    }
    render(){
        return (
           <Layout />
        )
    }
}
export default Login;