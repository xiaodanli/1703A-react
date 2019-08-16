import React, { Component } from 'react'
import {connect} from 'react-redux'

class Create extends Component {
    render() {
        let {goods_name,sold_count} = this.props.detail;
        return (
            <div>
                {goods_name}  x {sold_count}
            </div>
        )
    }
}

export default connect(state => {
    return {
        detail:state.order.detail
    }
})(Create)
