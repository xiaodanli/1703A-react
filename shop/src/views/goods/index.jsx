// import React,{Component} from 'react'
// // import store from '@/store'
// import {connect} from 'react-redux'
// import axios from 'axios'
// import {getList} from '@/store/store-actions'

// class Goods extends Component{
//     constructor(props){
//         super(props);
//         // store.subscribe(() => {
//         //     this.setState({})
//         // })
//     }
//     render(){
//         let {num} = this.props;
//         return <div>
//             {num}
//             <button onClick={this.props.add}>add</button>
//             <button onClick={this.props.getList}>获取国家列表</button>
//         </div>
//     }
    
// }

// export default connect(state => {
//     return {
//         num:state.num
//     }
// },dispatch => {
//     return {
//         add(){
//             dispatch({type:'ADD'})
//         },
//         getList(){
//             dispatch(getList(1,10))
//         }
//     }
// })(Goods)

import {Picker} from 'antd-mobile'
import React from 'react'
import districtData from './location.js'
 
const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px',position:'relative',borderBottom:0 }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: 'red', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);
 
export default class extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pickerValue: [],
        };
    }
 
    render(){
        let antdDistrict =[];
        Object.keys(districtData).forEach((index)=>{
            let itemLevel1 ={};
            let itemLevel2 ={};
            itemLevel1.value = districtData[index].code;
            itemLevel1.label = districtData[index].name;
            itemLevel1.children = [];
            let data = districtData[index].cities;
            Object.keys(data).forEach((index)=>{
                itemLevel2.value = data[index].code;
                itemLevel2.label = data[index].name;
                itemLevel2.children = [];
                let data2 = data[index].districts;
                let itemLevel3 ={};
                itemLevel3.children = [];
                Object.keys(data2).forEach((index)=>{
                    itemLevel3.value = index;
                    itemLevel3.label = data2[index];
                    itemLevel2.children.push(itemLevel3);
                    itemLevel3 ={};
                });
                itemLevel1.children.push(itemLevel2);
                itemLevel2 ={};
            });
            antdDistrict.push(itemLevel1)
        });
        console.log(antdDistrict);
        return (
            <div>
                <Picker
                    title="选择地区"
                    extra="请选择(可选)"
                    data={antdDistrict}
                    value={this.state.pickerValue}
                    onChange={v => {
                        console.log(v)
                        this.setState({ pickerValue: v })
                    }}
                    onOk={v => this.setState({ pickerValue: v })}
                    onClick={()=>{console.log('xx')}}
                >
                    <CustomChildren>Customized children</CustomChildren>
                </Picker>
            </div>
        )
    }
}