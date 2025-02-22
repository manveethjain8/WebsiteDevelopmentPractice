console.log(localStorage);
let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
console.log(accounts);

function loginFunction(){
    document.querySelector('.enteredEmail').classList.remove('invalidEmail');
    document.querySelector('.enteredPassword').classList.remove('invalidPassword');


    let enteredEmail = document.querySelector('.enteredEmail').value;
    let enteredPassword = document.querySelector('.enteredPassword').value;

    let accountFound = accounts.find(account => enteredEmail === account.email);

    if (accountFound) {
        if (accountFound.password === enteredPassword) {
            window.location.href = './cafeHomePage.html';
        } else {
            document.querySelector('.enteredPassword').classList.add('invalidPassword');
        }
    } else {
        document.querySelector('.enteredEmail').classList.add('invalidEmail');
    }
}

document.querySelector('.loginButton').addEventListener('click', () => {
    loginFunction();
});



document.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        loginFunction();
    }
});

document.querySelector('.signUpButton').addEventListener('click',()=>{
    window.location.href='./signupPage.html';
});

document.querySelector('.enteredEmail').addEventListener('keydown', () => {
    document.querySelector('.enteredEmail').classList.remove('invalidEmail');
});

document.querySelector('.enteredPassword').addEventListener('keydown', () => {
    document.querySelector('.enteredPassword').classList.remove('invalidPassword');
});
