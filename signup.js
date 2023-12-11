function handleChange() {
  let currArray = JSON.parse(localStorage.getItem("userlist"));
  if (!!currArray?.length) {
    let userform = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      Phonenumber: document.getElementById("Phonenumber").value,
      password: document.getElementById("password").value,
      Confirmpassword: document.getElementById("Confirmpassword").value,
      // dob: document.getElementById("dob").value,
      // radio1: document.getElementById("radio1").checked,
      // radio2: document.getElementById("radio2").checked,
      // radio3: document.getElementById("radio3").checked,
    };

    let fullname =currArray.filter((f)=>f.name=== userform.name);
    let un = currArray.filter((f)=>f.username=== userform.username);
    let emailid =currArray.filter((f)=>f.email=== userform.email);
    let ph= currArray.filter((f)=>f.Phonenumber=== userform.Phonenumber);
    let pswd=currArray.filter((f)=>f.password === userform.password);

    if(fullname.length==0 && un.length==0 && emailid.length==0 && ph.length==0 && pswd.length==0){
      currArray.push(userform);
      localStorage.setItem("userlist",JSON.stringify(currArray));
      alert("Data Saved")
      document.getElementById("loginid").click();

    }
    else{
      alert("Data already exists")
    }
    
    
  } else {
    let userform = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      Phonenumber: document.getElementById("Phonenumber").value,
      password: document.getElementById("password").value,
      Confirmpassword: document.getElementById("Confirmpassword").value,
      // dob: document.getElementById("dob").value,
      // radio1: document.getElementById("radio1").value,
      // radio2: document.getElementById("radio2").value,
      // radio3: document.getElementById("radio3").value,
    };
    let userlist = [userform];
    localStorage.setItem("userlist", JSON.stringify(userlist));
    alert("Data Saved")
    document.getElementById("loginid").click();
  
  }
  
}

function saveData() {
  let Name = validateName();
  let UserName = validateusername();
  let Email = validateEmail();
  let Phno = validatePhoneNum();
  let Pswd =validatePassword();
  
  if (Name === true && UserName === true && Email === true && Phno === true && Pswd===true ) {
    handleChange();
  }
}

function validateName() {
  let Name = document.getElementById("name").value;
  let errormsg=document.getElementById('full_name_error')
  //console.log({e:errormsg.style})
  if (Name == "" || Name == null) {
    // alert("Name must be filled out");
    errormsg.style.display='block'
    return false;
  } else {
    errormsg.style.display='none'
    return true;
  }
}

function validateusername() {
  inputValue = document.getElementById("username").value;
  var regexPattern = /^[a-zA-Z0-9]+$/;
  let errormsg= document.getElementById("username_error")
  if (regexPattern.test(inputValue)) {
   
    errormsg.style.display="none"
    return true;
  } else {
    // alert("Enter a Valid Username");
    errormsg.style.display="block"
    return false;
  }
}

function validateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  input = document.getElementById("email");
  let errormsg= document.getElementById("email_error")

  if (input.value.match(validRegex)) {
    errormsg.style.display="none"
    return true;
  } else {
    // alert("Invalid email address!");
    errormsg.style.display="block"
    return false;
  }
}

function validatePhoneNum() {
  var ph = /^\d{10}$/;
  var val = document.getElementById("Phonenumber");
  let errormsg= document.getElementById("ph_error");
  if (val.value.length != 10) {
    // alert("Plz Enter 10 Digit Only!!");
    errormsg.style.display="block"
  } 
  else {
    
    
    if (val.value.match(ph)) {
      
      return true;
    } else {
      // alert("Wrong format!!");
      errormsg.style.display="none"
  
    }
  }
}

function validatePassword() 
{ 
//var passw=  /^[A-Za-z]\w{7,14}$/;
inputtxt=document.getElementById("password").value;
let errormsg= document.getElementById("pswd_error");
let errormsg1=document.getElementById("matchpswd_error");
const password = document.getElementById("password").value;
const Confirmpassword= document.getElementById("Confirmpassword").value;

if(inputtxt=="" || inputtxt==null){
 // alert("Fill the password please!");  
  errormsg.style.display="block";
  return false;  
}
else if(inputtxt.length<8){
// alert("Password length must be atleast 8 characters");  
 errormsg.style.display="block";
   return false;  
}
else if(inputtxt.length>15){
 //alert("Password length must not exceed 15 characters");
 errormsg.style.display="block";
   return false;
}
else if(password!=Confirmpassword){
    //alert("Passsword did not matched");
    errormsg1.innerHTML="Passsword did not matched"
    errormsg1.style.display="block";
    return false;
  }
  else{
    //alert("Password matched")
    errormsg1.style.display="none";
    errormsg.style.display="none";
    return true;
  }
}









