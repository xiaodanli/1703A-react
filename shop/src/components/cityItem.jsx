import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class CityItem extends Component{

    render(){
        let {store_name,store_id} = this.props;
        return <div>
            <h1 onClick={() => {this.props.history.push(`/goods/${store_id}`)}}>{store_name}</h1>
        </div>
    }
}

export default withRouter(CityItem)