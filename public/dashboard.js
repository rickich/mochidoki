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
  const btnLogout= document.getElementById('btnLogout');

  	btnLogout.addEventListener ('click', e=>{
  	firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});
  	});
  
  	firebase.auth().onAuthStateChanged(firebaseUser =>{
  		if(firebaseUser){
  			console.log(firebaseUser);
  		}
  		else{
  			console.log('not logged in')
        window.location.replace('index.html');
  		}
  	});

}());