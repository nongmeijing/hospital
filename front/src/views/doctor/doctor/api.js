import { getRequest, postRequest, putRequest, postBodyRequest, getNoAuthRequest, postNoAuthRequest } from '@/libs/axios';

// 分页获取数据
export const getDoctorList = (params) => {
    return getRequest('/doctor/getByPage', params)
}
// 添加
export const addDoctor = (params) => {
    return postRequest('/doctor/insertOrUpdate', params)
}
// 编辑
export const editDoctor = (params) => {
    return postRequest('/doctor/insertOrUpdate', params)
}
// 删除
export const deleteDoctor = (params) => {
    return postRequest('/doctor/delByIds', params)
}