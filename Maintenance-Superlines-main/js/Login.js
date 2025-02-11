document.addEventListener("DOMContentLoaded", function () {
  sessionStorage.setItem("Status", "Not Login");
});

const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener("click", () => {
  loginBtn.style.color = "white";
  registerBtn.style.color = "black";

  loginBtn.style.backgroundColor = "rgba(23, 43, 224, 0.801)";
  registerBtn.style.backgroundColor = "rgb(243, 243, 243)";

  loginForm.style.left = "50%";
  registerForm.style.left = "-50%";

  loginForm.style.opacity = 1;
  registerForm.style.opacity = 0;
});

registerBtn.addEventListener("click", () => {
  loginBtn.style.color = "black";
  registerBtn.style.color = "white";

  loginBtn.style.backgroundColor = "rgb(243, 243, 243)";
  registerBtn.style.backgroundColor = "rgba(23, 43, 224, 0.801)";

  loginForm.style.left = "150%";
  registerForm.style.left = "50%";

  loginForm.style.opacity = 0;
  registerForm.style.opacity = 1;
});

// document.getElementById("theme-switch").addEventListener("change", function () {
//   document.body.classList.toggle("dark", this.checked);
// });

function onSubmit() {
  // window.location.replace("Admin.html");

  // ==================================================================

  const username = document.getElementById("Username").value;
  const password = document.getElementById("Password").value;
  const role = document.getElementById("Role").value;

  // console.log(username, password, role);

  fetch("personData.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
      const roles = data.users.find((user) => user.role === role);

      const user = data.users.find(
        (user) => user.username === username && user.password === password
      );

      switch (role.toString()) {
        case "Manager":
          if (user) {
            if (user.username === username && user.password === password) {
              if (role === user.role) {
                document.getElementById("message").innerText =
                  "Login successfully as " +
                  user.username.toString() +
                  ", " +
                  roles.role;
                document.getElementById("message").style.color = "green";
                document.getElementById("message").style.fontSize = "15px";
                setTimeout(() => {
                  sessionStorage.setItem("Status", "Login");
                  sessionStorage.setItem("userID", user.id);
                  sessionStorage.setItem("username", user.username);
                  sessionStorage.setItem("role", user.role);
                  sessionStorage.setItem(
                    "lastLogin",
                    new Date().toLocaleString()
                  );
                  window.location.href = "./Admin.html";
                }, [5000]);
              } else {
                document.getElementById("message").innerText =
                  "This user exist but not registered as '" + role + "' role.";
                document.getElementById("message").style.color = "red";
                document.getElementById("message").style.fontSize = "10px";

                setTimeout(() => {
                  document.getElementById("message").innerText = "";
                }, [5000]);
              }
            } else {
              alert("Invalid Username/Password");
            }
          } else {
            alert("Invalid Username or Password");
          }
          break;

        case "Maintenance Staff":
          if (user) {
            if (user.username === username && user.password === password) {
              if (role === user.role) {
                document.getElementById("message").innerText =
                  "Login successfully as " +
                  user.username.toString() +
                  ", " +
                  roles.role;
                document.getElementById("message").style.color = "green";
                document.getElementById("message").style.fontSize = "15px";
                setTimeout(() => {
                  sessionStorage.setItem("Status", "Login");
                  sessionStorage.setItem("userID", user.id);
                  sessionStorage.setItem("username", user.username);
                  sessionStorage.setItem("role", user.role);
                  sessionStorage.setItem(
                    "lastLogin",
                    new Date().toLocaleString()
                  );
                  window.location.replace("Admin.html");
                }, [5000]);
              } else {
                document.getElementById("message").innerText =
                  "This user exist but not registered as '" + role + "' role.";
                document.getElementById("message").style.color = "red";
                document.getElementById("message").style.fontSize = "10px";

                setTimeout(() => {
                  document.getElementById("message").innerText = "";
                }, [5000]);
              }
            } else {
              alert("Invalid Username/Password");
            }
          } else {
            alert("Invalid Username or Password");
          }
          break;

        case "Bus Driver":
          if (user) {
            if (user.username === username && user.password === password) {
              if (role === user.role) {
                document.getElementById("message").innerText =
                  "Login successfully as " +
                  user.username.toString() +
                  ", " +
                  roles.role;
                document.getElementById("message").style.color = "green";
                document.getElementById("message").style.fontSize = "15px";
                setTimeout(() => {
                  sessionStorage.setItem("Status", "Login");
                  sessionStorage.setItem("userID", user.id);
                  sessionStorage.setItem("username", user.username);
                  sessionStorage.setItem("role", user.role);
                  sessionStorage.setItem(
                    "lastLogin",
                    new Date().toLocaleString()
                  );
                  window.location.replace("Busdriver.html");
                }, [5000]);
              } else {
                // alert("This user exist but not registered as " + role + " role." );
                document.getElementById("message").innerText =
                  "This user exist but not registered as '" + role + "' role.";
                document.getElementById("message").style.color = "red";
                document.getElementById("message").style.fontSize = "10px";

                setTimeout(() => {
                  document.getElementById("message").innerText = "";
                }, [5000]);
              }
            } else {
              alert("Invalid Username/Password");
            }
          } else {
            alert("Invalid Username or Password");
          }
          break;

        case "Position":
          alert("Must fill all the fields");
          break;
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
