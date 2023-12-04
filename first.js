function handleChange(){
    console.log(document.getElementById("name").value,"email",document.getElementById("email").value, "password",document.getElementById("password").value)
    console.log(document.getElementById("dob").value, "button1",document.getElementById("button1").ATTRIBUTE_NODE,"button2",document.getElementById("button2").value,"button3",document.getElementById("button3").value)
}
function handleClick(){
    const element = document.getElementById("full_name");
    element.style.color="red"
    console.log(element.style)

    const element1 = document.getElementById("mail");
    element1.style.border='1px solid black'
    element1.style.fontStyle="italic"
    element1.style.borderColor="blue"
    element1.style.borderBlockColor="red"
    console.log(element1.style)
    
    
}