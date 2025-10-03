  // Khởi tạo Jssor
  jssor_slider1_starter('slider1_container');

  // Fix chiều cao slider trên mobile
  function fixSliderHeight() {
    var slider = document.getElementById("slider1_container");
    var slides = slider.querySelector('[u="slides"]');
    var imgs = slides.querySelectorAll('img[u="image"]');

    if (window.innerWidth <= 768) {
      slider.style.height = "320px";
      slides.style.height = "320px";
      imgs.forEach(img => {
        img.style.height = "320px";
        img.style.width = "100%";
        img.style.objectFit = "cover";
      });
    } else {
      slider.style.height = "320px";
      slides.style.height = "320px";
      imgs.forEach(img => {
        img.style.height = "320px";
        img.style.width = "100%";
        img.style.objectFit = "cover";
      });
    }
  }

  window.addEventListener("load", fixSliderHeight);
  window.addEventListener("resize", fixSliderHeight);
