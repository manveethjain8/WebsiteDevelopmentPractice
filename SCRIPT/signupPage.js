function signUpFunction() {
    let enteredEmail = document.querySelector('.enteredEmail').value;
    let enteredPassword = document.querySelector('.enteredPassword').value;

    if (enteredEmail === '' || enteredPassword === '') {
        document.querySelector('.enteredEmail').classList.add('invalidEmail');
        document.querySelector('.enteredPassword').classList.add('invalidEmail');
        return; // Stop execution if fields are empty
    }

    // Send data to backend instead of local storage
    fetch('http://localhost:5001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: enteredEmail, password: enteredPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
            document.querySelector('.enteredEmail').classList.add('invalidEmail');
        } else {
            alert("Account created successfully! Redirecting to login page.");
            window.location.href = "./index.html"; // Redirect to login page
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Something went wrong!");
    });
}

// Remove validation errors when typing
document.querySelector('.enteredEmail').addEventListener('keydown', () => {
    document.querySelector('.enteredEmail').classList.remove('invalidEmail');
});
document.querySelector('.enteredPassword').addEventListener('keydown', () => {
    document.querySelector('.enteredPassword').classList.remove('invalidEmail');
});

// Enter key triggers signup
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        signUpFunction();
    }
});

// Click sign-up button
document.querySelector('.signUpButton').addEventListener('click', () => {
    signUpFunction();
});
