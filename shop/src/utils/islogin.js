import React,{Component} from 'react'

// 高阶组件

let IsLogin = (Com) => {
    return class extends Component{
        state={
            islogin:false
        }
        render(){
            let {islogin} = this.state;
            return islogin ? <Com {...this.props}/> : <></>
        }

        componentDidMount(){
            let token = window.localStorage.getItem('token') || '';
            if(token){
                this.setState({
                    islogin:true
                })
            }else{
                this.props.history.push('/login')
            }
        }
    }
}

export default IsLogin