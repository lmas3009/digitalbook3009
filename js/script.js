

  document.getElementById("main").style.display = "none";
function did(){

  document.getElementById("deta").style.display = "block";
  document.getElementById("plan").style.display = "none";
  document.getElementById("colleges").style.display = "block";
  document.getElementById("details").style.display = "none";
var root = firebase.database().ref("Courses").child("admin");
root.on('value',snap=>{
  snap.forEach(snap=>{
    var id = snap.child("username").val();
    var x = document.getElementById("collegs");
  var option = document.createElement("option");
  option.text = id
  x.add(option);
   })   
});
}
var selectedFile;
//fil.on("change",function(event){
  function cha(){
  selectedFile = event.target.files[0];
  console.log(selectedFile.name);
}

function sub(){
  var filename = selectedFile.name;
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
  var root = firebase.database().ref(sel1.options[sel1.selectedIndex].text).child(sel2.options[sel2.selectedIndex].text).child(sel3.options[sel3.selectedIndex].text).child(sel4.options[sel4.selectedIndex].text).child(name);
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
  
});
});
  console.log(selectedFile.name);
  root.set({
      Year:sel2.options[sel2.selectedIndex].text,
      Semester:sel3.options[sel3.selectedIndex].text,
      Course:sel4.options[sel4.selectedIndex].text,
      FileName: selectedFile.name
  })
});
}
function getdetails(){
  var sel = document.getElementById("collegs");
  function getSelectedOption(sel) {
      var opt;
      for ( var i = 0, len = sel.options.length; i < len; i++ ) {
          opt = sel.options[i];
          if ( opt.selected === true ) {
              break;
          }
      }
      return opt;
  }
  document.getElementById("deta").style.display = "none";
  document.getElementById("colleges").style.display = "none";
  document.getElementById("details").style.display = "block";
  document.getElementById("plan").style.display = "none";
  var d = document.getElementById("nameofclg");
  d.innerHTML=sel.options[sel.selectedIndex].text;
}
