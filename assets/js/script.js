document.getElementById('getOTPBtn').addEventListener('click', function () {
    // You can implement the logic to send OTP here (not shown in this example).
    alert('OTP sent to your phone/email!');
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // You can implement the logic to validate OTP and perform login here (not shown in this example).
    alert('Login successful!');
});