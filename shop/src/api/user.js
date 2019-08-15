import request from '@/utils/request'

/**
 * 注册接口
 * @param {object} data 注册携带的参数
 */
export function registry(data){
    return request.post('/buyer/user/register',data)
}

/**
 * 获取图形验证吗
 */
export function captcha(){
    return request.get('/buyer/user/captcha')
}
/**
 * 登录
 * @param {object} data 登录携带的参数
 */
export function login(data){
    return request.post('/buyer/user/login',data)
}