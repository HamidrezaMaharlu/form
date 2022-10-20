function matchPassword() {
    const pw1 = document.getElementById("password");
    const pw2 = document.getElementById("re-password");
    const match = document.getElementById("match")
    const btn = document.getElementById("registerBtn")
    if (pw1.value !== pw2.value) {
        match.innerText = "❌"
        btn.disabled = true
    } else {
        match.innerText = "✔"
        btn.disabled = false
    }
}