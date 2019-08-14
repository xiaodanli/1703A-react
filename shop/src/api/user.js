import request from '@/utils/request'

export function registry(data){
    return request.post('/buyer/user/register',data)
}