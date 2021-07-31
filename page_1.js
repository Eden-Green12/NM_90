// Firebase config : remember the website url is important
// So create the database first and then add this info
var firebaseConfig = {
  apiKey: "AIzaSyCHXGEM6BxdY3Oa3C3Or57FKr2O2JM-PTk",
  authDomain: "form-84b04.firebaseapp.com",
  databaseURL: "https://form-84b04-default-rtdb.firebaseio.com",
  projectId: "form-84b04",
  storageBucket: "form-84b04.appspot.com",
  messagingSenderId: "599889649906",
  appId: "1:599889649906:web:59cc4e03666b950341306b",
  measurementId: "G-CVRP5CRPMT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// function writeData() {
//   firebase.database().ref("User").set({
//     //set object here
//     email: document.getElementById("email").value,
//     pass: document.getElementById("password").value,
//   })
//   console.log("sent");
// }

let formMessage = firebase.database().ref('Registration');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;
  let checkbox = document.querySelector('#checkbox').value;

  //send message values
  sendMessage(name, email, password, bio, job, interest,checkbox);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)
function sendMessage(name, email, password, bio, job, interest, checkbox) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    Name: name,
    email: email,
    password: password,
    Bio : bio,
    Job : job,
    Interest: interest,
    html : checkbox,
  });
}
