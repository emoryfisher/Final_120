var contentEle = document.body.querySelector(".content");

var messageBox = document.body.querySelector(".message");
var student = document.body.querySelector(".student");
var gradebox = document.body.querySelector(".gradebox");

contentEle.innerHTML="Enter the Correct username and password"
function login(){
  
  var username = document.body.querySelector("username");
  var password = document.body.querySelector("password");
  if(username == "cool" && password == "password"){
   gradeview();
  }else{
    messageBox.innerHTML="Incorrect Username or Password";
  }
  
event.preventDefault();
  
}

         
  function gradeview(){
    contentEle.innerHTML="Grade View";
  var button = document.createElement("button");
  button.innerHTML= "Add Grade";
  document.body.appendChild(button);
  
   var addagrade = document.createElement("h1");
  addagrade.innerHTML="Add a grade" 
    
   contentEle.appendChild(addagrade); 
  } 

function addgrade(){
  //if (student.value.length>=0 && student.value.length<=100){
    
  }
  
//}

  document.body.querySelector(".submit").addEventListener("click", function(){
  login();
});

document.body.querySelector(".submit").addEventListener("click", function(){
  addgrade();
});


document.body.querySelector(".submit").addEventListener("click", function(){
 gradeview(); 
});