
const token = localStorage.getItem('token')
if (!token) {
  location.href = '../login/index.html'
}

axios({
  url:'/v1_0/user/profile'
}).then(result=>{
  const nickName = document.querySelector(".nick-name")
  if(nickName) {
    console.log("now in modification") 
    userName = result.data.data.mobile
    nickName.innerHTML  = userName
  }
  console.log(result.data.data.mobile) 
}
)
