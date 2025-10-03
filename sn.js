  var jssor_slider1;
  function jssor_slider1_starter(containerId) {
    var options = {
      $AutoPlay: 1,
      $SlideDuration: 500,
      $DragOrientation: 3
    };
    jssor_slider1 = new $JssorSlider$(containerId, options);
  }

  jssor_slider1_starter("slider1_container");

  function ScaleSlider() {
    var container = document.getElementById("slider1_container");
    if (window.innerWidth <= 768) {
      container.style.height = "320px"; // mobile: cao 320px
      jssor_slider1.$ScaleWidth(container.clientWidth); 
    } else {
      container.style.height = "320px"; // PC vẫn cao 320px
      jssor_slider1.$ScaleWidth(820); 
    }
  }

  window.addEventListener("load", ScaleSlider);
  window.addEventListener("resize", ScaleSlider);
