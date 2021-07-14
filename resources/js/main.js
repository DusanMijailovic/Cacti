window.onload = function() {
  document.getElementById('dropbtn').addEventListener('click', myFunction);
}
/*-----------DROPDOWN MENU---------------------*/
 function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');

}

/*----------------------------------------------jQUERY----------------------------------------------*/

/*--------------------------GALLERY-----------------------------*/

(function($) {
  $(document).ready(function() {
 });
})(jQuery);


/*--------------------------BUTTON FROM BOTTOM TO TOP-----------------------------*/
 $(document).ready(function() {
   $(document).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
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