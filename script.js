document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Dapatkan input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Contoh validasi sederhana (hardcoded credentials)
    if (username === "felita" && password === "felita148") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login successful!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});