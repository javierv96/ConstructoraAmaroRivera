
//smooth scroll
$("a").click(function (event) {

  if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top
      }, 1000); // primero probar con 0 y aumente de 1000 en 1000 para ver diferencia
  }
});