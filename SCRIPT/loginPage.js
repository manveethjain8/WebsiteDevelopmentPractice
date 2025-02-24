function loginFunction() {
    let enteredEmail = document.querySelector('.enteredEmail').value;
    let enteredPassword = document.querySelector('.enteredPassword').value;

    // Remove validation errors
    document.querySelector('.enteredEmail').classList.remove('invalidEmail');
    document.querySelector('.enteredPassword').classList.remove('invalidPassword');

    // Send login request to backend
    fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: enteredEmail, password: enteredPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
            if (data.error === 'Invalid email') {
                document.querySelector('.enteredEmail').classList.add('invalidEmail');
            } else if (data.error === 'Incorrect password') {
                document.querySelector('.enteredPassword').classList.add('invalidPassword');
            }
        } else {
            alert('Login successful! Redirecting...');
            window.location.href = './cafeHomePage.html'; // Redirect to home page
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong!');
    });
}

// Click login button
document.querySelector('.loginButton').addEventListener('click', () => {
    loginFunction();
});

// Enter key triggers login
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        loginFunction();
    }
});

// Redirect to signup page
document.querySelector('.signUpButton').addEventListener('click', () => {
    window.location.href = './signupPage.html';
});

// Remove validation styles when typing
document.querySelector('.enteredEmail').addEventListener('keydown', () => {
    document.querySelector('.enteredEmail').classList.remove('invalidEmail');
});
document.querySelector('.enteredPassword').addEventListener('keydown', () => {
    document.querySelector('.enteredPassword').classList.remove('invalidPassword');
});
