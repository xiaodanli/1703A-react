import React, { Component } from "react";
import {goodslist} from '@/api/store'

class Goods extends Component {
    state = {
        goodslist:[]
    }
  render() {
      let {goodslist} = this.state;
    return <div>
        {goodslist.map(item => <div key={item.goods_id} onClick={() => {
            this.props.history.push(`/detail/${item.goods_id}`)
        }}>{item.goods_name}</div>)}

    </div>;
  }
  componentDidMount(){
    console.log(this.props)
    goodslist({store_id:this.props.match.params.id}).then(res => {
        if(res.data.code === 1){
            console.log(res.data.result)
            this.setState({
                goodslist:res.data.result
            })
        }
    })
  }
}
export default Goods
