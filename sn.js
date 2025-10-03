jssor_slider1_starter('slider1_container');

  // ép lại chiều cao khi resize mobile
  function fixSliderHeight() {
    if (window.innerWidth <= 768) {
      var slider = document.getElementById("slider1_container");
      var slides = slider.querySelector('[u="slides"]');
      slider.style.height = "320px";
      slides.style.height = "320px";
      var imgs = slides.querySelectorAll('img[u="image"]');
      imgs.forEach(img => {
        img.style.height = "320px";
        img.style.objectFit = "cover";
      });
    }
  }
  window.addEventListener("load", fixSliderHeight);
  window.addEventListener("resize", fixSliderHeight);
