import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const data={
    "city":"合肥",
    "country":"中国",
    "headImgUrl":"http://thirdwx.qlogo.cn/mmopen/yF2MhS8icCvw96rHT2E2ibqdMFzS4icO6nhs91EZeibKfEuGeOxkeHyOvBsapFbPq6BNPMKEf3ImZvWDKBbcvzMvwXRk6Ke8G7Z6/132",
    "nickName":"CCStatic",
    "openId":"o-lKY0-PINvDrZbGSzQNV8yomZ4c",
    "province":"安徽",
    "sex":1,
    "unionId":"null",
    "userId":"8a054bfe66bbbee20166bbbffafc0000"
}
class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info:{}
        };
    }

    componentWillMount(){
        axios.post('https://www.ahiris.com/xulongtang/getBaseUserInfo?openId=o-lKY0-PINvDrZbGSzQNV8yomZ4',{openId:'o-lKY0-PINvDrZbGSzQNV8yomZ4c'}).then((res)=>{
            if(res.data.status==='error'){
                this.setState({
                    info:data,
                })
            }
        })
    }

    onClick(){
        // this.props.history.push("/my/myinfo")
    }

    render(){
        return (
            <div id="my">
                <div className="topInfo">
                    <div className="imgBox">{/*<img src={data.headImgUrl} alt=""/>*/}</div>
                    <div className="word">
                        <p><span>白丁&nbsp;&nbsp;V0</span><span>{data.nickName}</span></p>
                        <p><span>积分0</span></p>
                    </div>

                </div>
                
            </div>
        )
    }
}
export default My;