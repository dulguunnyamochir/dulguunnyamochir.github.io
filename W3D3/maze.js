$(document).ready(function () {
  var started = false;

  

  $("#start").click(() => {
    started = true;
    $("#status").text("Good Luck !!!");
    $(".boundary").removeClass("youlose");
  });

  $("#trap").mouseenter( () => {
      if(started){
          $('.trap').show();
      }
  })

  $("#maze").mousemove((e) => {
    if (started) {
      $("#cursor").show();
      $("#cursor").css("left", e.clientX + "px");
      $("#cursor").css("top", e.clientY + "px");
    }
  });

  $("#maze").mouseleave(() => {
    if (started) {
      $(".boundary").addClass("youlose");
      $("#status").text("You lost!");
    }
    end();
  });

  $(".boundary").mouseenter(() => {
    if (started) {
      $(".boundary").addClass("youlose");
      $("#status").text("You lost!");
    }
    end();
  });

  $("#end").mouseenter(() => {
    if (started) {
      $("#status").text("You win cangrajulashions! I have harder version I bet you can't win that!!");
      $("#status").append( $('<a>', {
          href: 'maze-hard.html',
          text: "HARD"
      }))
    }
    end();
  });

  const end = () => {
    started = false;
    $("#cursor").hide();
  };
});
