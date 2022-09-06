
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    $('#icon-menu').on('click', function(){
        $('nav').toggleClass('mostrar')
          $('#icon-menu').css({
          'background-color' : "#fff",
          'padding' : '.09em'
        });
      });

      $('.sub-menu ul').hide();
      $(".sub-menu a").click(function () {
          $(this).parent(".sub-menu").children("ul").slideToggle("100");
          $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
      });
}
