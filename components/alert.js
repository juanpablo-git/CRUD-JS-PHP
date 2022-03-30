export default function alert({message,open,bgcolor}) {
const para = document.createElement("p");
para.style.width = "auto";
para.style.position = "absolute";
para.style.top = "0px";
para.classList = `card ${bgcolor}`;
para.style.zIndex = "10000";
para.style.padding = "10px"
const time = setInterval(function(){
    para.remove()
    clearInterval(time)
},2000);
para.innerHTML = `${message}`;
document.body.appendChild(para);
}
