function myalert (msg,success){
  let myAlert = document.querySelector('.alert')
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
}

export default myalert;