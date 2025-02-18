// auth.js

// Check if a user is authenticated; if not, redirect to the login page.
function checkAuth() {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (
    !currentUser &&
    !window.location.pathname.toLowerCase().includes("login.html")
  ) {
    window.location.href = "Login.html";
    return null;
  }
  return currentUser;
}

// Logs out the current user and redirects to the login page.
function logout() {
  sessionStorage.removeItem("currentUser");
  window.location.href = "Login.html";
}

// gawin mo lang tong comment lahat na function(select mo yung code na iccoment mo tas crtl+/)
// pag ginawa tong comment pwede mo na access page nang di naglolog-in
function checkUserRole() {
  if (window.location.pathname.toLowerCase().includes("login.html")) {
    return;
  }

  const user = checkAuth();
  if (!user) return;

  const currentPage = window.location.pathname.split("/").pop().toLowerCase();
  const userPosition = user.position.toLowerCase();

  const pageAccess = {
    "Admin.html": "admin",
    "Manager.html": "manager",
    "Busdriver.html": "busdriver",
    "Maintenance.html": "maintenance",
  };

  if (pageAccess[currentPage] && pageAccess[currentPage] !== userPosition) {
    alert("You don't have permission to access this page");
    logout();
  }
}

// Run the role check when the page loads.
document.addEventListener("DOMContentLoaded", checkUserRole);
