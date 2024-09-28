let button=document.querySelector("button");
let ul=document.querySelector(".list");
let input=document.querySelector("#inputBox");

button.addEventListener("click",()=>{
    if(input.value==""){
        alert("insert a task");
    }
    else{
    let li=document.createElement("li");
      li.innerHTML=input.value;
      ul.appendChild(li);
      span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
      //let spn=document.querySelector("span");
      span.addEventListener("click",()=>{
        //ul.removeChild(li);
        li.remove();
      })
    } 
      input.value="";
    
    
      
});