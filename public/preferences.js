function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    document.getElementById("defaultOpen").click();
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function(){
    var config = {
    apiKey: "AIzaSyBJ8yy-4noHBX3mvPlgaaAks-6sGzEkgqU",
    authDomain: "mochidoki-test.firebaseapp.com",
    databaseURL: "https://mochidoki-test.firebaseio.com",
    storageBucket: "mochidoki-test.appspot.com",
    messagingSenderId: "801979384228"
  };
  firebase.initializeApp(config);
  // Get a reference to the database service
  var database = firebase.database();
  
}