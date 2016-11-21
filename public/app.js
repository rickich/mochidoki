(function(){
	
	const config = {
		apiKey: "AIzaSyBJ8yy-4noHBX3mvPlgaaAks-6sGzEkgqU",
	    authDomain: "mochidoki-test.firebaseapp.com",
	    databaseURL: "https://mochidoki-test.firebaseio.com",
	    storageBucket: "mochidoki-test.appspot.com",
	    messagingSenderId: "801979384228"
	};
  	firebase.initializeApp(config);
  //get elements
  const txtEmail= document.getElementById('txtEmail');
  const txtPassword= document.getElementById('txtPassword');
  const btnLogin= document.getElementById('btnLogin');

  	btnLogin.addEventListener ('click', e=>{
  		const email=txtEmail.value;
  		const pass=txtPassword.value;
  		const auth=firebase.auth();
  		//sign in

  		const promise=auth.signInWithEmailAndPassword(email,pass)
  		.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/wrong-password'||errorCode=='auth/invalid-email') {
    alert('Wrong email or password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});

  		promise.catch(e=>console.log(e,message));
  	});
  
  	firebase.auth().onAuthStateChanged(firebaseUser =>{
  		if(firebaseUser){
  			console.log(firebaseUser);
  			window.location.replace('dashboard.html')
  		}
  		else{
  			console.log('not logged in');
  		}
  	});

}());