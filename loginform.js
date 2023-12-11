function handleChange() {
  let input = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  let user = JSON.parse(localStorage.getItem("userlist"));
  console.log(user);
  let value= user.filter((f)=>f.email==input.email && f.password==input.password)
  if(value.length>0){
    console.log("matched")
    document.getElementById("homepage").click();

  }
  else{
    console.log("not matched")
  }

}
