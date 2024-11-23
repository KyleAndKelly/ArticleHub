
axios.defaults.baseURL ="https://geek.itheima.net/"

axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },function(error){
    return Promise.reject(error)
  })

  axios.interceptors.response.use(function(response){
    let result = response.data
    return result
  },function(error){
    if(error?.response?.status == 401){
        alert("Login expired,Please login again!")
        localStorage.clear()
        location.href = "../login/index.html"
    }
    return Promise.reject(error)
  })
  
  export default axios;