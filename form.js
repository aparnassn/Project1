function handleChange(element) {
  let currArray = JSON.parse(localStorage.getItem("userlist"));
  if (!!currArray?.length) {
    let userform = {
      id: currArray?.length,
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      Phonenumber: document.getElementById("Phonenumber").value,
      password: document.getElementById("password").value,
      Confirmpassword: document.getElementById("Confirmpassword").value,
    };

    let fullname = currArray.filter((f) => f.name === userform.name);
    let un = currArray.filter((f) => f.username === userform.username);
    let emailid = currArray.filter((f) => f.email === userform.email);
    let ph = currArray.filter((f) => f.Phonenumber === userform.Phonenumber);
    if (element.innerHTML === "Update") {
      let id = document.getElementById("id").value;
      let index = currArray.findIndex((f) => f.id === Number(id));
      currArray[index] = userform;
      localStorage.setItem("userlist", JSON.stringify(currArray));
      alert("Data Updated");
      location.reload();
    }
     else {
      if (
        fullname.length === 0 &&
        un.length === 0 &&
        emailid.length === 0 &&
        ph.length === 0
      ) {
        currArray.push(userform);
        localStorage.setItem("userlist", JSON.stringify(currArray));
        alert("Data Saved");
        location.reload();
      } else {
        alert("Data already exists");
      }
    }
  } else {
    let userform = {
      id: 0,
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      Phonenumber: document.getElementById("Phonenumber").value,
      password: document.getElementById("password").value,
      Confirmpassword: document.getElementById("Confirmpassword").value,
    };
    let userlist = [userform];
    localStorage.setItem("userlist", JSON.stringify(userlist));
    alert("Data Saved");
    location.reload();
  }
}

function saveData(element) {
  let Name = validateName();
  let UserName = validateusername();
  let Email = validateEmail();
  let Phno = validatePhoneNum();
  if (Name === true && UserName === true && Email === true && Phno === true) {
    handleChange(element);
  }
}

function validateName() {
  let Name = document.getElementById("name").value;
  let errormsg = document.getElementById("full_name_error");
  if (Name == "" || Name == null) {
    // alert("Name must be filled out");
    errormsg.style.display = "block";
    return false;
  } else {
    errormsg.style.display = "none";
    return true;
  }
}

function validateusername() {
  let inputValue = document.getElementById("username").value;
  var regexPattern = /^[a-zA-Z0-9]+$/;
  let errormsg = document.getElementById("username_error");
  if (regexPattern.test(inputValue)) {
    errormsg.style.display = "none";
    return true;
  } else {
    // alert("Enter a Valid Username");
    errormsg.style.display = "block";
    return false;
  }
}

function validateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  input = document.getElementById("email");
  let errormsg = document.getElementById("email_error");

  if (input.value.match(validRegex)) {
    errormsg.style.display = "none";
    return true;
  } else {
    // alert("Invalid email address!");
    errormsg.style.display = "block";
    return false;
  }
}

function validatePhoneNum() {
  var ph = /^\d{10}$/;
  var val = document.getElementById("Phonenumber");
  let errormsg = document.getElementById("ph_error");
  if (val.value.length != 10) {
    // alert("Plz Enter 10 Digit Only!!");
    errormsg.style.display = "block";
  } else {
    if (val.value.match(ph)) {
      return true;
    } else {
      // alert("Wrong format!!");
      errormsg.style.display = "none";
    }
  }
}

let list = JSON.parse(localStorage.getItem("userlist"));
let html = `<tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email </th>
            <th>Phone number</th>
            <th>password</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
         ${list.map(
           (d, i, arr) => `<tr>
                <td>${d.name}</td>
                <td>${d.username}</td>
            <td>${d.email} </td>
            <td>${d.Phonenumber}</td>
            <td>${d.password}</td>
            <td><button class='btn btn-primary' id="edit" onclick="fillData(${i})">Edit</button></td>
            <td><button class='btn btn-primary' id="delete" onclick="Delete(${i})">Delete</button></td>
            </tr>`
         )}
`;
document.getElementById("table").innerHTML = html;

function fillData(index) {
  let list = JSON.parse(localStorage.getItem("userlist"));
  let obj = list[index];
  document.getElementById("name").value = obj.name;
  document.getElementById("username").value = obj.username;
  document.getElementById("email").value = obj.email;
  document.getElementById("Phonenumber").value = obj.Phonenumber;
  document.getElementById("password").value = obj.password;
  document.getElementById("id").value = obj.id;
  document.getElementById("submit").innerHTML = "Update";
}

function Delete(index) {
  let list = JSON.parse(localStorage.getItem("userlist"));
  list.splice(index, 1);
  localStorage.setItem("userlist", JSON.stringify(list));
  alert("Deleted");
  location.reload();
}
