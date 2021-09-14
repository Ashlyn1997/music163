import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config";

//创建一个axios实例
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {}
})

//请求拦截器，这个拦截器会在你发送请求之前运行
instance.interceptors.request.use(
    config => {
        return config
    },
    err => {}
)

//响应拦截器
instance.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    console.log('请求错误')
                    break
                case 401:
                    console.log('未授权访问')
                    break
                default:
                    console.log('其他错误信息')
            }
        }
        return err
    }
)

export default instance