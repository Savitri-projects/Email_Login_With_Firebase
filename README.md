
# Email Login with Firebase

The Firebase email login web application offers users the choice to sign up or log in. Users can reset their password via a "Forget Password" option. After successful sign-up or login, users land on a page with a message and a logout button. Unsuccessful attempts lead to a retry page with a button to return to the sign-up/login page. The application features an attractive and responsive UI for various screen sizes.


## How to use it

Just clone the repository with
```git clone https://github.com/Savitri-projects/Email_Login_with_Firebase.git``` or simply download as zip and extract.

Open ```index.html``` file and you are good to go

Alternately, you can open this link - https://savitri-projects.github.io/Email_Login_with_Firebase/

If you want to use it actually, make sure you follow the steps for the firebase login, may be from [here](https://youtu.be/gcmGNOj37E8?si=Z9y6-w-J2G0u4mgi)

You will be needing a set of values looking similar to this:
```
const firebaseConfig = {
  apiKey: "AIzaSyCMMIE4s9Ltlr1eJkWSEdUzhUGsIKZmN08",
  authDomain: "theNameyouGive-721pq.firebaseapp.com",
  projectId: "theNameyouGive-721pq",
  storageBucket: "theNameyouGive-721dd.appspot.com",
  messagingSenderId: "280793831856",
  appId: "1:280793831856:web:6126309ab06fc89a0b1e75"
};
```
Replace this in ```firebase.js``` with your values and you are good to get your firebase updated with new users.

## What to look in for it

1. Signup with valid username, email ID and password
![App Screenshot](https://i.postimg.cc/k5RrYv1V/image.png)

2. Upon successful signup or login you land in a page with log out button
![App Screenshot](https://i.postimg.cc/bYCTdfNh/image.png)

3. On clicking 'Log out' button in the bottom right, you go to the sign in page
![App Screenshot](https://i.postimg.cc/FskjRfBy/image.png)

4. If you enter invalid credentials, you land in a login failure page with a home button leading to the login/signup page![App Screenshot](https://i.postimg.cc/Gm596rRX/image.png)

5. You can click on Forget password after entering the Email in the Sign in page. You get an alert saying that, there's an email sent to reset the password. You can check the email for the reset link (sometimes it is there in the spam folder) and reset it from there. Once you reset it, you are good to go with the new password😇😇

Note: You will neither get an error nor the reset password mail, if you aren't signed up before - Try experimenting in fixing this after you clone.

Thanks for coming here!!