var detailEffect=document.querySelector(".main-effect_effect-show")
var lengtEffect=document.querySelector(".main-effect_effect-list")
detailEffect.addEventListener("click",effectshow)
function effectshow() {
    detailEffect.style.display="none"
    lengtEffect.classList.remove("main-effect_effect-list-1")
}