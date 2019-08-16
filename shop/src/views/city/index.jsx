/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 16:27:30 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-16 10:42:27
 */
import React,{Component} from 'react'
import CityItem from '@/components/cityItem'
import {storelist} from '@/api/store'
class City extends Component{
    state = {
        storelist:[]
    }
    render(){
        let {storelist} = this.state;
        return <div>
            {storelist.map(item => <CityItem key={item.store_id} {...item}/>)}
        </div>
    }
    componentDidMount(){
        storelist().then(res => {
            if(res.data.code === 1){
                this.setState({
                    storelist:res.data.result
                })
            }else{
                //错误的时候
            }
        })
    }
}

export default City