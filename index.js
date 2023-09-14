const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});
document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})
document.getElementById("registerForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=>{
        console.log("Helloo! in login function")
        window.location.href = "failure.html"
        // document.getElementById("error").innerHTML = error.message
    })
}

function register(){
    console.log("Helloo! in register function")
    const email = document.getElementById("email1").value
    const password = document.getElementById("password1").value
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        console.log("Helloo! in register function end")
        window.location.href = "failure.html"
        // document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    console.log(email)
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}