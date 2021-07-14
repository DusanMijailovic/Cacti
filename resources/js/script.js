/*----------------JAVASCRIPT CODE---------------*/


window.onload = function () {
  document.getElementById('btnReg').addEventListener('click', Validate);
  document.getElementById('userName').addEventListener('blur',verifyUserName);
  document.getElementById('emailReg').addEventListener('blur',verifyEmailReg);
  document.getElementById('passwordReg').addEventListener('blur',verifyPassword);
  document.getElementById('passwordConf').addEventListener('blur',verifyPasswordConfirm);
  document.getElementById('dropbtn').addEventListener('click', myFunction);
}


/*----------------NAVIGATION MENU---------------*/


function myFunction() {
 document.getElementById('myDropdown').classList.toggle('show');

}



/*----------------REGISTRATION FORM VALIDATION---------------*/
var userName, email, password, passwordConfirm;


function Validate() {
  userName = document.getElementById('userName').value;
  email = document.getElementById('emailReg').value;
  password = document.getElementById('passwordReg').value;
  passwordConfirm = document.getElementById('passwordConf').value;




//REGULAR EXPRESION

var regUserName = /^[A-ZČĆŽŠĐ][a-zčćžšđ\.\_\-\d\W]{2,15}$/;
var regEmail = /^[\w]+[\.\_\-\w\d]*\@[\w]+([\.][\w]+)+$/;
var regPassword = /^[A-ZČĆŽŠĐa-zčćžšđ\.\_\-\d\W]{2,15}$/;
 var regPasswordConf = /^[a-zčćžšđ\.\_\-\d\W\t]{2,15}$/;




   //provera vrednosti iz registracije
   if(!regUserName.test(userName)) {
     document.getElementById('userNameError').style.color = "#ff0000";
     document.getElementById('userNameError').innerHTML = "Username is incorrect!";
   } else {
     document.getElementById('userNameError').style.color = "";
     document.getElementById('userNameError').innerHTML = "";
   }

   if(!regEmail.test(email)) {
     document.getElementById('emailErrorReg').style.color = "#ff0000";
     document.getElementById('emailErrorReg').innerHTML = "Email is incorrect!";
   } else {
     document.getElementById('emailErrorReg').style.color = "";
     document.getElementById('emailErrorReg').innerHTML = ""; 
   }

   if(!regPassword.test(password)) {
    document.getElementById('passwordError').style.color = "#ff0000";
    document.getElementById('passwordError').innerHTML = "Password is incorrect!";
  } else {
    document.getElementById('passwordError').style.color = "";
    document.getElementById('passwordError').innerHTML = "";
  }

  if(!regPasswordConf.test(passwordConfirm)) {
    document.getElementById('passwordErrorConf').style.color = "#ff0000";
    document.getElementById('passwordErrorConf').innerHTML = "Type in correct password!";
  } else {
   document.getElementById('passwordErrorConf').style.color = "";
   document.getElementById('passwordErrorConf').innerHTML = "";
 }
}

/////////////////////////////////////////////////////////////////////////////////



function verifyUserName() {
  userName = document.getElementById('userName');
  if (userName.value == "") {
    userName.style.border = "1px solid #ff0000";
    document.getElementById('userNameError').style.color = "#ff0000";
    document.getElementById('userNameError').innerHTML = "You must enter your username!";
    userName.focus();
  } else {
    userName.style.border = "1px solid #ccc";
    document.getElementById('userNameError').style.color = "";
    document.getElementById('userNameError').innerHTML = "";
  }
}


function verifyEmailReg() {
  email = document.getElementById('emailReg');
  if (email.value == "") {
    email.style.border = "1px solid #ff0000";
    document.getElementById('emailErrorReg').style.color = "#ff0000";
    document.getElementById('emailErrorReg').innerHTML = "You must enter your email";
    email.focus();
  } else {
    email.style.border = "1px solid #ccc";
    document.getElementById('emailErrorReg').style.color = "";
    document.getElementById('emailErrorReg').innerHTML = "";

  }

}


function verifyPassword() {
  password = document.getElementById('passwordReg');
  if (password.value == "") {
    password.style.border = "1px solid #ff0000";
    document.getElementById('passwordError').style.color = "#ff0000";
    document.getElementById('passwordError').innerHTML = "You must enter your password!";
  } else {
    password.style.border = "1px solid #ccc";
    document.getElementById('passwordError').style.color = "";
    document.getElementById('passwordError').innerHTML = "";
  }
}

function verifyPasswordConfirm() {
  password = document.getElementById('passwordReg');
  passwordConfirm = document.getElementById('passwordConf');
  if (password.value != passwordConfirm.value) {
    password.style.border = "1px solid #ff0000";
    passwordConfirm.style.border = "1px solid #ff0000";
    document.getElementById('passwordErrorConf').style.color = "#ff0000";
    document.getElementById('passwordErrorConf').innerHTML = "Passwords do not match!";
    passwordConfirm.focus();
  } else {
    password.style.border = "1px solid #ccc";
    passwordConfirm.style.border = "1px solid #ccc";
    document.getElementById('passwordErrorConf').style.color = "";
    document.getElementById('passwordErrorConf').innerHTML = "";
  }
}





/*----------------JQUERY CODE---------------*/

$(document).ready(function() {


  /*----------------SCROLL TO BOTTOM BUTTON---------------*/


  $('.scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.section-reservation').offset().top}, 3000);
    $('.new').hide();
    $('.new').fadeIn(5000);
  });

  

  $('.scroll-to-start').click( function () {
    $('html, body').animate({scrollTop: $('.section-features').offset().top}, 2000); 
    $('#scroll').hide();
    $('#scroll').fadeIn(5000);
  });





  /*----------------SCROLL TO TOP BUTTON---------------*/


  $(document).scroll(function() {
    if ($(this).scrollTop() >= 500) {        
      $('#return-to-top').fadeIn();    
    } else {
      $('#return-to-top').fadeOut();  
    }
  });
  $('#return-to-top').click(function(e) {
    e.preventDefault();    
    $('body,html').animate({
      scrollTop : 0                     
    }, 2000);
  });
});



/*----------------SLIDER---------------*/

function slideShow() {
  var current = $('.photos .show');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 3000);
}

  slideShow();























