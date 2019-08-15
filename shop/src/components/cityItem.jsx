import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class CityItem extends Component{
    render(){
        return <div>
            <h1 onClick={() => {this.props.history.push('/goods/sdsdsdsd')}}>日本</h1>
        </div>
    }
}

export default withRouter(CityItem)