var sec = 0;
let timer;
var nombre;
function shuffle() {
  $("#popup").hide("");
  $("#startBtn").hide();
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        if (countRight == 9) {
          let completedin = sec;
          localStorage.setItem("level-1", completedin);
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
