var getinput=document.querySelector(".tranfrom-search")
var getIconSearch=document.querySelector(".Nav-Search_icon")
var getsearchinput= document.querySelector(".Nav-Searc_input")
var getListSearch=document.getElementById("List-search")


// --------------------search--------------
function inputSearchw(){
  getinput.classList.add("tranfrom-search_move")
  getsearchinput.classList.add("setWitd-search")
//  getIconSearch.classList.add("Nav-Search_icon-move")
getIconSearch.style.display="none"
getIconSearch.style.transition="all .2s"
document.querySelector(".Nav-Searc_input").style.paddingLeft =" 16px"
document.querySelector(".Nav-Search_icon-left").style.display="inline-block"
document.querySelector(".Nav-Search_icon-left").style.paddingRight="14px"
getListSearch.classList.add('ative')
document.getElementById("Main-logo").style.opacity="0"
}
function outInputSearchw (){
  getListSearch.classList.remove('ative')
  getinput.classList.remove("tranfrom-search_move")
  getsearchinput.classList.remove("setWitd-search")
//  getIconSearch.classList.add("Nav-Search_icon-move")
getIconSearch.style.display="inline-block"
getIconSearch.style.transition="all .2s"
document.querySelector(".Nav-Searc_input").style.paddingLeft =" 5px"
document.querySelector(".Nav-Search_icon-left").style.display="none"
document.querySelector(".Nav-Search_icon-left").style.paddingRight="0px"
document.getElementById("Main-logo").style.opacity="1"
}
// --------------------search--------------


// ------------------------Down---------------------
var getDown=document.querySelector(".Main-manage_accout-down i")

var getdetailDown=document.querySelector(".Main-manage_detail-down")
getDown.onclick=function(){
  getdetailDown.classList.toggle("showDown")
  getDown.classList.toggle("colorDonwn")
}

// var layxuong=document.querySelector(".header")

var getdetaiBell=document.querySelector(".Main-manage_detail-bell")
var getbell=document.querySelector(".Main-manage_accout-bell i")
var getIconmenu=document.querySelector(".Main-manage_detail-menu")
var getmenu=document.querySelector(".Main-manage_accout-menu i")
getmenu.onclick=function(){
  getIconmenu.classList.toggle("show-menu")
  getmenu.classList.toggle("colorDonwn")

}

getbell.onclick=function(){
  getdetaiBell.classList.toggle("showBell")
  getbell.classList.toggle("colorDonwn")
}
window.onclick=(e1)=>{
  if (e1.target !=getbell) {
    getdetaiBell.classList.remove("showBell")
    getbell.classList.remove("colorDonwn")
  } 
  if (e1.target !=getmenu) {
    getIconmenu.classList.remove("show-menu")
    getmenu.classList.remove("colorDonwn")
  }
  
  if (e1.target !=getDown) {
    getdetailDown.classList.remove("showDown")
    getDown.classList.remove("colorDonwn")
  } 
   if (e1.target !=getchatbox) {
    getIconChat.classList.remove("show-chat")
    getchatbox.classList.remove("colorDonwn")
  }
   if (e1.target ==menuSearc) {
    getIconmenu.classList.add("show-menu")
    getmenu.classList.add("colorDonwn")
   }
   if (e1.target ==getChatInput) {
    getIconChat.classList.add("show-chat")
    getchatbox.classList.add("colorDonwn")
   }
   if (e1.target !=getsearchinput) {
    outInputSearchw ()
   }


}

var menuSearc=document.querySelector(".menu-Searc_input")

// ------------------chatsearch-------------
var movetra2=document.querySelector(".tranfrom-chat2")
var movetra=document.querySelector(".tranfrom-chat")
var hidechat=document.querySelector(".chat-Search_icon")
var showchat=document.querySelector(".tranfrom-chat .chat-Search_icon-left")

function inputchat(){
  movetra2.classList.add("tranfrom-chat_move")
  movetra.classList.add("input-chat_move")
  hidechat.classList.add("hideicon");
  document.querySelector(".chat-Search_icon-left").style.opacity="1"
}
// ---------------------displaychat---------

var getChatInput=document.querySelector(".chat-Searc_input")

// ----------------------searchmenu---------------------

function searchMenu() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.querySelector(".menu-Searc_input");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".group-ul-menu");
  li = ul.querySelectorAll(".Main-manage_menu-item");
 

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelectorAll(".Main-manage_menu-item-name")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
   
    }
  }
}

var getIconChat=document.querySelector(".Main-manage_detail-chat")
var getchatbox=document.querySelector(".Main-manage_accout-mess i")

getchatbox.onclick=function(){
  
  getIconChat.classList.toggle("show-chat")
  getchatbox.classList.toggle("colorDonwn")
}
