
  // Import the functions you need from the SDKs you need
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDrDEtRxb-fqAz3PRBc9UHTUTpBBKvVIBA",
    authDomain: "website-f1d31.firebaseapp.com",
    projectId: "website-f1d31",
    storageBucket: "website-f1d31.appspot.com",
    messagingSenderId: "903753369491",
    appId: "1:903753369491:web:705e7e6717045a5f2b0a66",
    measurementId: "G-C4MLV87758"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// const auth = firebase.auth();
// function signIn(){
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.signInWithEmailAndPassword(email.ariaValueMax. password.value);
//     promise.catch(e=>alert(e.message));
//     alert("Signed In" + email);

// }
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

//signup function
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  //
  promise.catch(e=>alert(e.message));
  alert("SignUp Successfully");
}

//signIN function
function  signIn(){
  var email = document.getElementById("email");
  var password  = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e=>alert(e.message));
  
}


//signOut

function signOut(){
  auth.signOut();
  alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);

  }else{
    alert("No Active user Found")
  }
})