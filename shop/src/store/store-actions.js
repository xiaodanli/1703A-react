import axios from 'axios'
// export let  getList = 
// }

export function getList(pagenum,limit){
    return (dispatch) => {
        axios.get('/buyer/storelist',{params:{pagenum,limit}}).then(res => {
            // this.props.getList(res.data.result);
            dispatch({type:'GET_LIST',list:res.data.result})
        })
    }
}