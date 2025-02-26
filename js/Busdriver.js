document.addEventListener("DOMContentLoaded", function () {
  sessionStorage.setItem("Status", "Not Login");
  const webStatus = sessionStorage.getItem("Status");

  if (webStatus !== "Login") {
    Window.location.replace("Login.html");
  } else {
    const userName = sessionStorage.getItem("username");

    if (userName !== null) {
      document.getElementById("BusdriverName").innerHTML = userName;
    } else {
      document.getElementById("BusdriverName").innerHTML = "Bus Driver";
    }
  }
});

const busInfoBtn = document.getElementById("bus-info-btn");
const reportBusBtn = document.getElementById("report-bus-btn");
const busInfoSection = document.getElementById("bus-info-section");
const reportBusSection = document.getElementById("report-bus-section");

busInfoBtn.addEventListener("click", () => {
  busInfoSection.classList.remove("hidden");
  reportBusSection.classList.add("hidden");
  busInfoBtn.classList.add("active");
  reportBusBtn.classList.remove("active");
});

reportBusBtn.addEventListener("click", () => {
  reportBusSection.classList.remove("hidden");
  busInfoSection.classList.add("hidden");
  reportBusBtn.classList.add("active");
  busInfoBtn.classList.remove("active");
});
