import './index.css';
loginBtn = document.querySelector(".btn")
loginBtn.addEventListener('click',()=>{
  console.log("Log: login clicked!")
//   location.href= "../content/index.html"
  const form = document.querySelector(".login-form")
  const data = serialize(form,{hash: true, empty: true})
  console.log(data)
  console.log(axios.defaults.baseURL)
  axios({
    url: 'v1_0/authorizations',
    method:'POST',
    data
}).then(result => {
    console.log(result)
    myalert('Login Success!',1)
    localStorage.setItem('token',result.data.token)
    setTimeout(()=>{
      location.href= "../content/index.html"
    },1500)
    
}).catch(error=>{
    
    console.log(error)
    myalert('Login Failed!',0)
}) 
})