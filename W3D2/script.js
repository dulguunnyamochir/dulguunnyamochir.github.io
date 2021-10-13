$(document).ready(function () {
  let id;
  $("#start-btn").click((e) => {
    const width = $("#width").val();
    const gamount = $("#gamount").val();
    const grate = $("#grate").val();
    const ncircles = $("#ncircles").val();
    $("#circle-container").empty();
    clearInterval(id);
    id = createCircles(width, gamount, grate, ncircles);
  });
});

const createCircles = (width, gamount, grate, ncircles) => {
  for (let i = 0; i < ncircles; i++) {
    const elm = createElement(width);
    console.log(elm);
    $("#circle-container").append(elm);
  }
  console.log($("#circle-container"));

  return setElmInterval(gamount, grate);
};

const createElement = (width) => {
  // console.log(width);
  const rcolor = getRandomColor();
  //   console.log(rcolor, Math.floor(Math.random() * 80));
  let elm = `
    <div class="circle" style="
    background-color:${rcolor}; 
    width:${width}px; 
    height:${width}px; 
    left:${Math.floor(Math.random() * 80)}vw; 
    top:${Math.floor(Math.random() * 80)}vh;"></div>`;
  return elm;
};

const setElmInterval = (gamount, grate) => {
  return setInterval(() => {
    $(".circle").each(function () {
      //   $(this).css("width", parseInt(gamount) + parseInt($(this).css("width")));
      console.log("here", grate, $(this).css("width"));
      $(this).css("width", parseInt($(this).css("width")) + parseInt(gamount));
      $(this).css(
        "height",
        parseInt($(this).css("height")) + parseInt(gamount)
      );
      $(this).click(function () {
        $(this).remove();
      });
    });
  }, grate);
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
