
document.addEventListener('DOMContentLoaded', function() {
  const userName = sessionStorage.getItem("username");

  if (userName !== null) {
    document.getElementById("AdminName").innerHTML = userName;
  }else{
    document.getElementById("AdminName").innerHTML = "Admin";
  }
  

});



function Logout(){
        window.location.replace("Login.html");
      }
