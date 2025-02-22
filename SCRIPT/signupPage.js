console.log(localStorage);
let accounts = JSON.parse(localStorage.getItem('accounts')) || [];


function signUpFunction(){
    
        let enteredEmail = document.querySelector('.enteredEmail').value;
        let enteredPassword = document.querySelector('.enteredPassword').value;

        if(enteredEmail === '' || enteredPassword === ''){
            document.querySelector('.enteredEmail').classList.add('invalidEmail');
            document.querySelector('.enteredPassword').classList.add('invalidEmail');
            signUpFunction();
        }
    
        let accountFound = accounts.find(account => enteredEmail === account.email);
    
        if (accountFound) {
            document.querySelector('.enteredEmail').classList.add('invalidEmail');
        }else{
            let newAccount={email:enteredEmail, password:enteredPassword};
            accounts.push(newAccount);
            localStorage.setItem('accounts',JSON.stringify(accounts));
            alert("Account is created successfully.You will be redirected to the login page");
            window.location.href="./index.html";
        }
    console.log(localStorage);
    console.log(accounts);
}

document.querySelector('.enteredEmail').addEventListener('keydown', () => {
    document.querySelector('.enteredEmail').classList.remove('invalidEmail');
});

document.querySelector('.enteredPassword').addEventListener('keydown', () => {
    document.querySelector('.enteredPassword').classList.remove('invalidEmail');
});

document.addEventListener('keydown',(event)=>{
    if(event.key==='/'){
        localStorage.removeItem('accounts');
        accounts=[];
        alert("All the accounts are cleared")
    }
});

document.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        signUpFunction();
    }
});

document.querySelector('.signUpButton').addEventListener('click',()=>{
    signUpFunction();
} );
