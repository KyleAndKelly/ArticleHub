loginBtn = document.querySelector(".btn")
let myAlert = document.querySelector('.alert')
function alert (msg,success){
    myAlert.classList.remove('d-none');
    myAlert.innerText = msg
    myAlert.classList.add('show')
    myAlert.classList.add(success? 'alert-success':'alert-danger')

    setTimeout(()=> {
        myAlert.classList.add('d-none');
        myAlert.innerText = ''
        myAlert.classList.remove('show')
        myAlert.classList.remove(success? 'alert-success':'alert-danger')    
    },1000)
    // const myAlert = document.querySelector('.alert')
    // myAlert.classList.add(isSuccess ? 'alert-success' : 'alert-danger')
    // myAlert.innerHTML = msg
    // myAlert.classList.add('show')

    // setTimeout(() => {
    //   myAlert.classList.remove(isSuccess ? 'alert-success' : 'alert-danger')
    //   myAlert.innerHTML = ''
    //   myAlert.classList.remove('show')
    // }, 2000)
}

loginBtn.addEventListener('click',()=>{
  console.log("Log: login clicked!")
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
    alert('Login Success!',1)
    localStorage.setItem('token',result.data.data.token)
    setTimeout(()=>{
      location.href= "../content/index.html"
    },1500)
    
}).catch(error=>{
    
    console.log(error)
    alert('Login Failed!',0)
}) 
})