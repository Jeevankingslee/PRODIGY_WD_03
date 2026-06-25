const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

async function loadDashboard() {

    const response = await fetch(
        "http://localhost:5000/api/auth/dashboard",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    console.log(data);

    document.getElementById("message").innerText =
        data.message;
}

loadDashboard();

document
    .getElementById("logoutBtn")
    .addEventListener("click", () => {

        localStorage.removeItem("token");

        window.location.href = "login.html";
    });