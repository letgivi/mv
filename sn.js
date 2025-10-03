function ScaleSlider() {
  var slider = jssor_slider1; // slider đã khởi tạo
  var container = document.getElementById("slider1_container");

  if (window.innerWidth <= 768) {
    container.style.height = "320px";
    slider.$ScaleWidth(container.clientWidth);
  } else {
    container.style.height = "320px"; // vẫn giữ 320px trên PC
    slider.$ScaleWidth(820); 
  }
}

// khi load và resize
window.addEventListener("load", ScaleSlider);
window.addEventListener("resize", ScaleSlider);
