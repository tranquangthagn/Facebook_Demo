var accoutAPI="http://localhost:3000/account"
  
var createAcout=document.querySelector(".register")    
createAcout.onclick=()=>{
 document.querySelector(".modal").style.display="block"
  
} 

var closeSignIn=document.querySelector(".auth-form_header-right")
closeSignIn.onclick=()=>{
  document.querySelector(".modal").style.display="none"    

}
function activeWeb(){
       GetJsonOrigin()
      handelLinks()
    }
    activeWeb()
    // // lay data tu json
    function GetJsonOrigin(callBack){
      fetch(accoutAPI)
    .then(function(JsonLinks){
      return JsonLinks.json()
    })
    .then(callBack)
    }
  
    // kiem tra email
  
    var TagetEmail= document.querySelector('.auth-form_password')
    var getFormSign=document.querySelector(".auth-form_wrap--form")
   
    getFormSign.onclick= function(e){
      if (e.target==TagetEmail) {  
        var tranthang= document.querySelector('input[placeholder="Enter email address"]').value
        fetch(accoutAPI)
        .then(function(JsonLinks){
          return JsonLinks.json()
        })
        .then(listAcout=>{

            const getAsEmail= listAcout.some(element => {
                return element.email===tranthang

            });
            if (getAsEmail) {
           alert("email đa được dùng")
           document.querySelector('input[placeholder="Enter email address"]').value=" "
           }
           else{   
           return 1;
               }
        })
      }
    }
     // kiem tra accout
    //  var passAccountCheck=document.querySelector('input[name="password"]')
    //  passAccountCheck.onclick=()=>{
      

    //  }
    
     var btnLogin=document.querySelector(".form-submit")
     btnLogin.onclick=()=>{ 
       
      var emailAccount=document.querySelector('input[name="email"]').value
      var passAccount=document.querySelector('input[name="password"]').value
       if (emailAccount===""&& passAccount==="") {
         console.log("mess");
       }else  {

        fetch(accoutAPI)
        .then(valueJson=>{
          return valueJson.json()
        })
        .then(json=>{
          const getAsEmail= json.find(element => {
            return element.email===emailAccount

        })
       
        const getAsEmail1= json.some(element => {
          return element.passwork===passAccount

      })
       
        if (getAsEmail1===true && getAsEmail!==undefined) {
          
          window.location.replace("home.html")

        }else{
          alert("tài khoản không tồn tại")
    
        }
        })
       }

     }

    // // Khoi tao danh sach
    function creatElement(data,calbacklink){
    const respone={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    }
    fetch(accoutAPI,respone)
    .then(function(newValue){
      return newValue.json()
    })
    .then(calbacklink)
    }
    var html="" 
    function handelLinks(){
      var handelbtn=document.querySelector(".submit-btn")
      handelbtn.onclick=function(){

        var FirstName= document.querySelector('input[placeholder="First name"]').value;
        var SubName= document.querySelector('input[placeholder="Surname"]').value
        var email= document.querySelector('input[placeholder="Enter email address"]').value
        var passwork= document.querySelector('.auth-form_password').value
        var day= document.querySelector('select[name="birthday-day"] option').value
        var month= document.querySelector('select[name="birthday-month"] option').value
        var year= document.querySelector('select[name="birthday-year"] option').value
        var gender= document.querySelector('input[type="radio"]').value
        var genderCheck= document.querySelector('input[type="radio"]').checked

        // ------------fdds
     
        if (FirstName ==html || SubName ==html || email==html || passwork==html ||genderCheck==false) {
          console.log("messs");
          }
          else{    
              var formData={
                     FirstName:FirstName ,
                     SubName: SubName,
                     email: email,
                     passwork: passwork,
                     day: day,
                     month: month,
                     year: year,
                     gender: gender,
                }   
             creatElement(formData,function(){
                 GetJsonOrigin()
               }) 
               window.location.replace("home.html")  
               document.querySelector(".modal").style.display="none"    
                   
               }
                }
                }
          


             
             
           
            
            
   
        
                     