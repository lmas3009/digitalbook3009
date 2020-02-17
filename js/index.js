

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);  

    // ...
  });
}

function logout(){
  firebase.auth().signOut();
  

}

function pin(){
  
  firebase.auth().onAuthStateChanged(user => {
    var root = firebase.database().ref().child('Users/'+user.uid);
  root.on("value",function(snapshot){
      snapshot.forEach(function(childSnapshot){
          var data = (snapshot.val() && snapshot.val().username);
    var ro = firebase.database().ref(data).child(data);
    ro.on("value",function(snap){
        snap.forEach(function(childsnap){
            var dat = (snap.val() && snap.val().pass);
    var str="";
  var one = document.getElementById("one").value;
  var two = document.getElementById("two").value;
  var three = document.getElementById("three").value;
  var four = document.getElementById("four").value;
  var st = str.concat(one,two,three,four);
  if(st==dat){
    window.location.href="teachers.html";
    
    console.log(dat);
  }
  else if(st==3009){
    window.location.href="create-password.html";  
  }
        })
    })
      })  
  })
  });

  
}

function veri(){
  
  firebase.auth().onAuthStateChanged(user => {
    console.log(user.uid)
    var st="";
    var st1="";
    var one1 = document.getElementById("one1").value;
    var two1 = document.getElementById("two1").value;
    var three1 = document.getElementById("three1").value;
    var four1 = document.getElementById("four1").value;
    var one2 = document.getElementById("one2").value;
    var two2 = document.getElementById("two2").value;
    var three2 = document.getElementById("three2").value;
    var four2 = document.getElementById("four2").value;
    var s = st.concat(one1,two1,three1,four1);
    var s1 = st1.concat(one2,two2,three2,four2);

var root = firebase.database().ref().child('Users/'+user.uid);
/*root.on("child_added",snap=>{
  var name = snap.child("username").val();
  console.log(name);
 firebase.database().ref('Users/' + user.uid).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username);
});
})*/

root.on("value",function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var data = (snapshot.val() && snapshot.val().username);
        var rol = (snapshot.val() && snapshot.val().rollnumber);
       
        if(s==s1){
          var ref = firebase.database().ref(data).child(data);
          ref.set({
              pass:s,
              roll:rol
          });
        }  
    })
    
    console.log(s);
    window.location.href="teachers.html";
})

});
}

function disa(){
  
  document.getElementById("first").style.display = "block";
  document.getElementById("second").style.display = "none";
}

function list(){
  /*firebase.auth().onAuthStateChanged(user => {
    console.log(user.uid)
    var table = document.getElementById("tabel");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(0);
  var cell3 = row.insertCell(0);
var root = firebase.database().ref('https://digitalbook-6c930.firebaseio.com');
root.on("value",function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var user = (snapshot.val() && snapshot.val().username);
        var rol = (snapshot.val() && snapshot.val().rollnumber);
        var id = (snapshot.val() && snapshot.val().id);
       
  cell1.innerHTML = user;
  cell2.innerHTML = rol;
  cell3.innerHTML = id;
       
    })
})

});*/
/*var root = firebase.database().ref("Course/MP");

root.on('value',snap=>{
  snap.forEach(snap=>{
    var id = snap.child("fullurl").val();
    var id1 = snap.child("name").val();
    var id2 = snap.child("topic").val();
    var id3 = snap.child("url").val();

  table = document.getElementById("table1");
    for(var i=0;i<1;i++)
    {
      var newRow = table.insertRow(table.length);
      for(var j=0;j<1;j++)
      {
        var cell = newRow.insertCell(j);
        cell.innerHTML = id;
        var cell1 = newRow.insertCell(j);
        cell1.innerHTML = id1;
        var cell2 = newRow.insertCell(j);
        cell2.innerHTML = id2;
        var cell2 = newRow.insertCell(j);
        cell2.innerHTML = id3;
      }
    }
   })
})
  */
}

function reload()
{
  location.reload();
}


/*

(() => {
  
  var e = document.getElementById("course");
  var strUser = e.options[e.selectedIndex].text;
  
  
  var root = firebase.database().ref("Course").child(strUser);

  var imgArray = new Array();
  console.log(strUser);
  var x = document.createElement("IMG");
  x.setAttribute("src", "images/image.png");
  root.on('value',snap=>{
    snap.forEach(snap=>{
      var id = snap.child("fullurl").val();
      var id1 = snap.child("name").val();
      var id2 = snap.child("topic").val();
      var id3 = snap.child("url").val();
  
    table = document.getElementById("table1");
      for(var i=0;i<1;i++)
      {
        var newRow = table.insertRow(table.length);
        for(var j=0;j<1;j++)
        {
          var cell = newRow.insertCell(j);
          //cell3.innerHTML = 'sometext'+'<button id=\"a\">word</button> othertext';
          cell.innerHTML="<button ><img src=\"https://amritfoundationofindia.in/wp-content/uploads/2018/08/download-logo.png\" width=\"50px\" height=\"50px\" align=\"middle\"></button>";
          var cell1 = newRow.insertCell(j);
          cell1.innerHTML = id;
          var cell2 = newRow.insertCell(j);
          cell2.innerHTML = id1;
          var cell3 = newRow.insertCell(j);
          cell3.innerHTML = id2;
          var cell4 = newRow.insertCell(j);
          cell4.innerHTML = id3;
        }
      }
     })
     
})


})

*/

var id;
function getstart(){
  
document.getElementById("get").style.display = "none";
document.getElementById("search").style.display = "block";
var root1 = firebase.database().ref("Courses").child("admin");
  root1.on('value',snap=>{
    snap.forEach(snap=>{
       id = snap.child("username").val();
      var x = document.getElementById("collegs");
    var option = document.createElement("option");
    option.text = id
    x.add(option);
     })   
  });
}
function search(){
document.getElementById("main1").style.display = "block";
document.getElementById("search").style.display = "none";
  var sel = document.getElementById("collegs");
  function getSelectedOption(sel) {
      var opt1;
      for ( var i = 0, len = sel.options.length; i < len; i++ ) {
          opt1 = sel.options[i];
          if ( opt1.selected === true ) {
              break;
          }
      }
      return opt1;
  }
   var d = document.getElementById("nameofclg");
  d.innerHTML=sel.options[sel.selectedIndex].text;
  firebase.auth().onAuthStateChanged(user => {
  var root = firebase.database().ref(user.uid).child(sel.options[sel.selectedIndex].text);
  root.set({
    collegename:sel.options[sel.selectedIndex].text
  })
});
  //return sel.options[sel.selectedIndex].text;
}


function did(){

  document.getElementById("deta").style.display = "none";
  document.getElementById("plan").style.display = "none";
  document.getElementById("colleges").style.display = "none";
  document.getElementById("details").style.display = "block";
  var title = document.getElementById("nameofclg");
  firebase.auth().onAuthStateChanged(user => {
    var root = firebase.database().ref(user.uid);
    root.on('value',snap=>{
      snap.forEach(snap=>{
         id = snap.child("collegename").val();
        console.log(id);
        title.innerHTML=id;
       })   
    });
  }); 
}
var selectedFile;
//fil.on("change",function(event){
  function cha(){
  selectedFile = event.target.files[0];
  console.log(selectedFile.name);
}

function sub(){
  var id;
  firebase.auth().onAuthStateChanged(user => {
    var root = firebase.database().ref(user.uid);
    root.on('value',snap=>{
      snap.forEach(snap=>{
         id = snap.child("collegename").val();
       })   
    });
  });
  var filename = id;
  var storage = firebase.storage().ref('/DigitalBook/'+filename)
 var uploadTask = storage.put(selectedFile);
 var sel1 = document.getElementById("collegs");
  function getSelectedOption(sel1) {
      var opt1;
      for ( var i = 0, len = sel1.options.length; i < len; i++ ) {
          opt1 = sel1.options[i];
          if ( opt1.selected === true ) {
              break;
          }
      }
      return opt1;
  }
  var sel2 = document.getElementById("year");
  function getSelectedOption(sel2) {
      var opt2;
      for ( var i = 0, len = sel2.options.length; i < len; i++ ) {
          opt2 = sel2.options[i];
          if ( opt2.selected === true ) {
              break;
          }
      }
      return opt2;
  }
  var sel3 = document.getElementById("sem");
  function getSelectedOption(sel3) {
      var opt3;
      for ( var i = 0, len = sel3.options.length; i < len; i++ ) {
          if ( opt3.selected === true ) {
              break;
          }
      }
      return opt3;
  }
  var sel4 = document.getElementById("cour");
  function getSelectedOption(sel4) {
      var opt4;
      for ( var i = 0, len = sel4.options.length; i < len; i++ ) {
          opt4 = sel4.options[i];
          if ( opt4.selected === true ) {
              break;
          }
      }
      return opt4;
  }
  var name = document.getElementById("name").value;
  console.log(name);
  
  firebase.auth().onAuthStateChanged(user => {
  var root = firebase.database().ref(id).child(sel2.options[sel2.selectedIndex].text).child(sel4.options[sel4.selectedIndex].text).child(name);
 var reff = firebase.database().ref("Course");
 uploadTask.on('state_changed', function(snapshot){
// Observe state change events such as progress, pause, and resume
// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');
switch (snapshot.state) {
  case firebase.storage.TaskState.PAUSED: // or 'paused'  
    console.log('Upload is paused');
    break;
  case firebase.storage.TaskState.RUNNING: // or 'running'
    console.log('Upload is running');
    break;
}
}, function(error) {
// Handle unsuccessful uploads
}, function() {
// Handle successful uploads on complete
// For instance, get the download URL: https://firebasestorage.googleapis.com/...
uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  console.log('File available at', downloadURL);
  console.log(selectedFile.name);
  root.set({
      Year:sel2.options[sel2.selectedIndex].text,
      Semester:sel3.options[sel3.selectedIndex].text,
      Course:sel4.options[sel4.selectedIndex].text,
      FileName: selectedFile.name,
      url:downloadURL
  })
});
});
});
  
}

