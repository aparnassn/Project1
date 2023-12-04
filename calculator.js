function handleClick(){
    // console.log(document.getElementById('del').innerText)
   if(document.getElementById('clear').innerText==="AC"){
    console.log("cle")
    document.getElementById('display').value=""
   }
}
function handleDel(){
    if(document.getElementById('del').innerText==="Del"){
    console.log("del")
    document.getElementById('display').value=""
   }
}
function handleDot(){
   if(document.getElementById('dot').innerText==="."){
    let curr= document.getElementById('display').value;
    let newnum = curr+".";
    document.getElementById('display').value=newnum
   }
}
function handleSlash(){
    if(document.getElementById('slash').innerText==="/"){
    let curr= document.getElementById('display').value;
    let newnum = curr+"/";
   document.getElementById('display').value=newnum
   }
}
function handleSeven(){
   if(document.getElementById('seven').innerText==="7"){
    let curr= document.getElementById('display').value;
    let newnum = curr+"7";
    document.getElementById('display').value=newnum
    
   }
}
function handleEight(){
    if(document.getElementById('eight').innerText==="8"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "8";
    document.getElementById('display').value=newnum
   }
}
function handleNine(){
    if(document.getElementById('nine').innerText==="9"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "9";
    document.getElementById('display').value=newnum
   }
}
function handleStar(){
    if(document.getElementById('star').innerText==="*"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "*";
    document.getElementById('display').value=newnum
   }
}
function handleFour(){
    if(document.getElementById('four').innerText==="4"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "4";
    document.getElementById('display').value=newnum
   }
}
function handleFive(){
    if(document.getElementById('five').innerText==="5"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "5";
    document.getElementById('display').value=newnum
   }
}
function handleSix(){
    if(document.getElementById('six').innerText==="6"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "6";
    document.getElementById('display').value=newnum
   }
}
function handleHyphen(){
   if(document.getElementById('hyphen').innerText==="-"){
    let curr=document.getElementById('display').value;
    let newnum =curr + "-";
    document.getElementById('display').value=newnum
   }
}
function handleOne(){
    if(document.getElementById('one').innerText==="1"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "1";
    document.getElementById('display').value=newnum
   }
}
function handleTwo(){
   
    if(document.getElementById('two').innerText==="2"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "2";
    document.getElementById('display').value=newnum

   }
}
function handleThree(){
    if(document.getElementById('three').innerText==="3"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "3";
    document.getElementById('display').value=newnum
   }
}
function handleAdd(){
    if(document.getElementById('add').innerText==="+"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "+";
    document.getElementById('display').value=newnum
   }
}
function handleDoublezero(){
    if(document.getElementById('doublezero').innerText==="00"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "00";
    document.getElementById('display').value=newnum
   }
}
function handleZero(){
    if(document.getElementById('zero').innerText==="0"){
        let curr=document.getElementById('display').value;
        let newnum =curr + "0";
    document.getElementById('display').value=newnum
   }
}
function handleEqual(){
    if(document.getElementById('equal').innerText==="="){
      let curr=document.getElementById('display').value;
      console.log({curr})
        let newnum =eval(curr)
    document.getElementById('display').value=newnum
   }
}




