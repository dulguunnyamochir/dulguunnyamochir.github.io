window.onload = function () {
    "use strict";
  
    let boxField = "";
    let selectedAnimation = ANIMATIONS["Blank"];
    let animationIdx;
    let timer;
    let running = false;
    let refreshRate = 250;
  
    const textArea = document.getElementById("text-area");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const animation = document.getElementById("animation");
    const sizes = document.getElementById("fontsize");
    const turbo = document.getElementById("turbo");
  
    startBtn.onclick = function () {
      boxField = textArea.value;
      stopBtn.disabled = false;
      startBtn.disabled = true;
      if (selectedAnimation) {
        textArea.value = selectedAnimation[(animationIdx = 0)];
        running = true;
        timer = setTimeout(updateAnimation, refreshRate);
      } else textArea.value = "";
    };
  
    stopBtn.onclick = function () {
      clearTimeout();
      running = false;
      stopBtn.disabled = true;
      startBtn.disabled = false;
      textArea.value = boxField;
    };
  
    animation.onchange = function () {
      selectedAnimation = ANIMATIONS[animation.value].split("=====\n");
    };
  
    sizes.onchange = function () {
      const sizeValues = {
        Tiny: "8pt",
        Small: "10pt",
        Medium: "12pt",
        Large: "14pt",
        "Extra Large": "16pt",
        XXL: "18pt",
      };
      console.log("changing size: ", sizes.value);
      if (textArea.style.fontSize !== sizeValues[sizes.value])
        textArea.style.fontSize = sizeValues[sizes.value];
    };
  
    turbo.onchange = function () {
      refreshRate = turbo.checked ? 50 : 250;
    };
  
    function updateAnimation() {
      if (running) {
        textArea.value = selectedAnimation[animationIdx++];
        animationIdx %= selectedAnimation.length;
        setTimeout(updateAnimation, refreshRate);
      }
    }
  };
  