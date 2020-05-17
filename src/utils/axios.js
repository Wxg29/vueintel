
import axios from "axios"
import { Toast } from "vant"
import router from "../router"



let token = "";
//设置基本路径
// const baseURL = "http://localhost:3000"
const baseURL = "http://39.97.219.99:5000"
// axios.defaults.baseURL = baseURL
axios.defaults.headers.common['token'] = token;  // 设置请求头里面的 token 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 设置POST提交数据的文档类型编码

function showLoading() {
    Toast.clear();
    Toast.loading({
        message: "正在加载",
        forbidClick: true,
        loadingType: "spinner",
        duration: 3000
    });
}

function success(msg) {
    Toast.clear();
    Toast.success({
        message: msg,
        duration: 3000
    });
}

function fail(msg) {
    Toast.clear();
    Toast.fail({
        message: msg,
        duration: 3000
    });
}

// Interceptors 拦截器 
// Add a request interceptor (添加请求的拦截器 发送之前要做业务逻辑)
axios.interceptors.request.use(function (config) {
    // Do something before request is sent(请求发送之前)

    //写一次所有的请求都会带 token
    token = sessionStorage.token || token;
    config.headers.token = token    // 客户端发送 token 到服务器 
    console.log(config)

    showLoading();
    return config;
}, function (error) {
    // Do something with request error(请求发送失败)
    fail("请求失败")
    return Promise.reject(error);
});
// Add a response interceptor (添加响应的拦截器 服务器响应数据到客户端之前)
axios.interceptors.response.use(function (response) {
    // Do something with response data(响应成功业务逻辑)
    console.log(response)
    setTimeout(() => {
        if (response.data.type === 1) {
            success(response.data.msg || '请求数据成功');
        } else {
            if (response.data.type === 0) {
                fail(response.data.msg || '请求数据失败');
            } else {
                success(response.data.msg || '请求数据成功');
            }
        }

        // 3000是特殊编码
        if (response.data.code === "3000") {
            router.push({ name: "login" })
        }

    }, 300);

    return response;
}, function (error) {
    fail("响应失败")
    // Do something with response error (响应失败的业务逻辑)
    return Promise.reject(error);
});



export { axios, baseURL }