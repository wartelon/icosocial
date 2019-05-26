(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.linkSidenav').on('click', function(){
      $('.sidenav').sidenav('close');
    })
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space
