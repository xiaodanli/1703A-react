import {DETAIL} from '@/store/order/order-type'
export const order = (state={detail:{}},action) => {
    switch (action.type) {
        case DETAIL:
            state.detail = action.detail
            return {...state,detail:{...state.detail}}
        default:
            return state
    }  
}