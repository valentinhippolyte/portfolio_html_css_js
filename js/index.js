// menu 

$('.header_navbar_toggle').click(function(e){
    e.preventDefault();
    $('.header_navbar').toggleClass('is-open');
})


//animation lien
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  //bouton scrollup
  jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});

/*apparition navbar*/ 

jQuery(function(){
  $(function () {
      $(window).scroll(function () { //Fonction appelée quand on descend la page
          if ($(this).scrollTop() > 400 ) {  // Quand on est à 200pixels du haut de page,
              $('#navbarscroll').css('right','0px'); // Replace à 10pixels de la droite l'image
          } else { 
              $('#navbarscroll').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
          }
      });
  });
});


 





