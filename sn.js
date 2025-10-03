var jssor_slider1;

  function jssor_slider1_starter(containerId) {
    var options = {
      $AutoPlay: 1,            // Tự động chạy
      $SlideDuration: 500,     // Thời gian chuyển slide
      $DragOrientation: 3      // Cho phép kéo ngang/dọc
    };
    jssor_slider1 = new $JssorSlider$(containerId, options);
  }

  // Khởi tạo slider
  jssor_slider1_starter("slider1_container");

  // Responsive fix
  function ScaleSlider() {
    var container = document.getElementById("slider1_container");
    if (window.innerWidth <= 768) {
      container.style.height = "320px";
      jssor_slider1.$ScaleWidth(container.clientWidth);
    } else {
      container.style.height = "320px";
      jssor_slider1.$ScaleWidth(820);
    }
  }

  window.addEventListener("load", ScaleSlider);
  window.addEventListener("resize", ScaleSlider);
