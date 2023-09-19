const firebaseConfig = {
    apiKey: "AIzaSyBFg1C_Bz1ny2BQNijwqw0nRwzaUJBdse4",
    authDomain: "app-de-conversa-6bdb4.firebaseapp.com",
    projectId: "app-de-conversa-6bdb4",
    storageBucket: "app-de-conversa-6bdb4.appspot.com",
    messagingSenderId: "620644065651",
    appId: "1:620644065651:web:710037bc7d4c04a64d2506"
  };
  firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "Kwitter_room.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName",name);
  window.location = "kwitterPage.html";
}

function logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}

