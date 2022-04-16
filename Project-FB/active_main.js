var detailEffect=document.querySelector(".main-effect_effect-show")
var lengtEffect=document.querySelector(".main-effect_effect-list")
detailEffect.addEventListener("click",effectshow)
function effectshow() {
    detailEffect.style.display="none"
    lengtEffect.classList.remove("main-effect_effect-list-1")
}
// -----------------meet-----------
var moveMeetNext=document.querySelector(".main-effect_PostStatus-meetZomm-next")
var moveMeetBack=document.querySelector(".main-effect_PostStatus-meetZomm-back")
var moveMeetUser=document.querySelector(".main-effect_PostStatus-meetZomm-slice")
var plus=0;
var getliuser=document.querySelectorAll(".PostStatus-createMeet-user")
var numberGetliUser=getliuser.length
var witdhmoveMeetUser=numberGetliUser*46 +211
function tranthang(a) {
    
}

moveMeetNext.onclick=()=>{
plus+=590
if (plus>(witdhmoveMeetUser-590)) {
    moveMeetNext.style.display="none"   
}
moveMeetBack.style.display="block"   
 moveMeetUser.style.transform=`translateX(${-plus}px)`   

}


moveMeetBack.onclick=()=>{
   plus-=590;
   if (plus<590) {
    moveMeetBack.style.display="none"      
}
 moveMeetNext.style.display="block"   
 moveMeetUser.style.transform=`translateX(${-plus}px)`
 console.log(plus);   
 }
  
//  ------------

function signout(){
    window.location.replace("./Page_Login.html")
   } 
