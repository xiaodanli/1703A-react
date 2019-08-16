import request from '@/utils/request'

export function storelist(){
    return request.get('/buyer/storelist')
}

export function goodslist(data){
    return request.post('/store/goods/list',data)
}

export function detail(data){
    return request.get('/buyer/detail',data)
}