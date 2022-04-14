export default function alert({message,open,bgcolor}) {
const para = document.createElement("p");

para.style.width = "auto";
para.style.position = "absolute";
para.style.top = "0px";
para.classList = `card ${bgcolor}`;
para.style.zIndex = "10000";
para.style.padding = "10px"
para.style.marginLeft = `-100px`
const time = setInterval(function(){
    para.remove()
    clearInterval(time)
      
},3000);
var i = -100
const animation = setInterval(function(){
    i=i+1
    
    if(i<0){
    para.style.marginLeft = `${i}px`
    }else{
        clearInterval(animation)
    }
},1)

para.innerHTML = `${message}`;
document.body.appendChild(para);
}
