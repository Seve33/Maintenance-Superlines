// function Username() {
//     const username = document.getElementById('Username').value;
//     if (Username) {
//         alert(`Password reset link sent to ${Username}`);
//     } else {
//         alert('Please enter your Username.');
//     }
// }

// function resetPassword() {
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     if (!password || !confirmPassword) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//         return;
//     }

//     alert('Your password has been reset successfully!');
// }




const loginBtn = document.querySelector("#login")
const registerBtn = document.querySelector("#register")
const loginForm = document.querySelector(".login-form")
const registerForm = document.querySelector(".register-form")


loginBtn.addEventListener('click', () =>{
    loginBtn.style.backgroundColor = "rgba(23, 43, 224, 0.801)"
    registerBtn.style.backgroundColor = "rgb(243, 243, 243)";
    
    loginForm.style.left =  "50%"   
    registerForm.style.left = "-50%"

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    
})

registerBtn.addEventListener('click', () =>{
    loginBtn.style.backgroundColor = "rgb(243, 243, 243)"
    registerBtn.style.backgroundColor = "rgba(23, 43, 224, 0.801)";

    loginForm.style.left =  "150%"   
    registerForm.style.left = "50%"
    
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

})


document.getElementById('theme-switch').addEventListener('change', function () {
    document.body.classList.toggle('dark', this.checked);
});

function Admin(){
    window.location.replace("Admin.html");
  }




  



