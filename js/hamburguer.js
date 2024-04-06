/**
 * Pentagono das Exatas!
 * 
 * Este é o javascript do menu hamburguer. Precisa do JQuery.
 */

// Para fazer o menu hamburguer funcionar
$(".menu").on("click", function () {
  if ($(".l-nav").hasClass("is-open")) {
      $(".menu").removeClass("is-active");
      $(".l-nav").removeClass("is-open");
  } else {
      $(".menu").addClass("is-active");
      $(".l-nav").addClass("is-open");
  }
});