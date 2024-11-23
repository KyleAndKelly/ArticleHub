import axios from './request.js';

const token = localStorage.getItem('token')
if (!token) {
  console.log("no token")
  location.href = '../login/index.html'
}

axios({
  url:'/v1_0/user/profile'
}).then(result=>{
  let nickName = document.querySelector(".nick-name")
  if(nickName) {
    console.log(result.data) 
    // let userName = result.data.name
    // nickName.innerHTML  = userName
  }
}
)

