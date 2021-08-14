import $ from 'jquery'; 
export const helpers = (() => {
  const bindGalleryEvents = () => {
    $(".gallery-filter li").on("click", function () {
      $(".gallery-filter li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $(".gallery-filter-items").isotope({
        filter: selector,
      });
    });
    $(".gallery-filter-items").isotope();
    $(".gallery-filter-items a.popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
      mainClass: "mfp-fade",
    });
  };
  return {
    bindGalleryEvents,
  };
})();
