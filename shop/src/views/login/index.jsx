/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 16:27:17 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-15 11:03:45
 */
import React,{Component} from 'react'
import {captcha,login} from '@/api/user'

class Login extends Component{
    state = {
        captcha:'',
        username:'',
        password:'',
        svg:''
    }
    render(){
        let {captcha,username,password,svg} = this.state;
        return <div>
            <input type="text" value={username} onChange={this.change} name="username"/>
            <input type="text" value={password} onChange={this.change} name="password"/>
            <input type="text" value={captcha} onChange={this.change} name="captcha"/>
            <div dangerouslySetInnerHTML={{ __html: svg }}  />
            <button onClick={this.login}>登录</button>
        </div>
    }   
    componentDidMount(){
        captcha().then(res => {
            if(res.data.code === 1){
                this.setState({
                    svg:res.data.data
                })
            }
            console.log(res)
        })
    }

    /**
     * 受控表单  修改state的值
     */  
    change = (e) => {
        console.log(this);
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }

    login = () => {
        login(this.state).then(res => {
            console.log(res)
            if(res.data.code === 1){
                localStorage.setItem('token',res.data.token);
                this.props.history.push('/city')
            }else{
                alert(res.data.msg)
            }
        })
    }
}

export default Login