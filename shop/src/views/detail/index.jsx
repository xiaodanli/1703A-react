import React,{Component} from 'react'
import {detail} from '@/api/store'
import {connect} from 'react-redux'
import {DETAIL} from '@/store/order/order-type'

class Detail extends Component{
    state = {
        detail:{}
    }
    render(){
        let {goods_name,sold_count} = this.state.detail;
        return <div>
            {goods_name}
            <div>
                <span onClick={() => {this.count('-')}}>-</span>
                <span>{sold_count ? sold_count :1}</span>
                <span onClick={() => {this.count('+')}}>+</span>
            </div>
            <button onClick={this.order}>立即预订</button>
        </div>
    }
    componentDidMount(){
        detail({goods_id:this.props.match.params.id}).then(res => {
            if(res.data.code === 1){
                this.setState({
                    detail:res.data.result
                })
            }
        })
    }

    count = (flag) => {
        let {detail} = this.state;
        if(flag === '-'){
            if(detail.sold_count >= 1){
                detail.sold_count--;
            }
        }else{
            if(detail.sold_count < 5){
                detail.sold_count++;
            }
        }
        this.setState({
            detail
        })
    }

    order = () => {
        this.props.saveDetail(this.state.detail);
        this.props.history.push('/create')
    }
}

export default connect(state => {return {}},dispatch => {
    return {
        saveDetail(detail){
            dispatch({type:DETAIL,detail})
        }
    }
})(Detail)