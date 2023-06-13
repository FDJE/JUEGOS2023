var sec = 0;
let timer;
var nombre;
function shuffle() {
  $("#popup").hide("");
  $("#startBtn").hide();
  let array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49,
  ];
  array.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  $("#puzzle").html("");
  for (var i = 0; i < array.length; i++) {
    $("#puzzle").append("<div id='tile" + array[i] + "' class='tile'></div>");
  }

  sec = 0;
  timer = setInterval(function () {
    sec = sec + 1;
    $("#timer").html(sec);
  }, 1000);
}

$(".sortable").sortable(
  { connectWith: ".sortable" },
  {
    update: function (event, ui) {
      countRight = 0;
      $("#puzzle > div").each((index, elem) => {
        if ("tile" + (index + 1) == elem.id) {
          countRight = countRight + 1;
        }
        if (countRight == 49) {
          let completedin = sec;
          localStorage.setItem("level-3", completedin);
          sec = 0;
          clearInterval(timer);
          $("#timer").html("");
          $("#startBtn").show();
          $("#popup").show();
          $("#message").html(
            "<h2>👏 Felicitaciones !</h2> <strong>" +
              nombre +
              " " +
              "</strong> lograste armar el rompecabezas en " +
              completedin +
              " segundos"
          );
        }
      });
    },
  }
);
$("#sortable").disableSelection();

var botonReiniciar = document.getElementById("reload");
if (botonReiniciar) {
  botonReiniciar.addEventListener("click", function () {
    location.reload();
  });
  nombre = localStorage.getItem("nombre");

}
