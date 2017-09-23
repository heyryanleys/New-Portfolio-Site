  // Javascript functin to trigger animation when user reaches greycircle div //
  $(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.tile3front'
      })
      .setClassToggle('.tentacle1', 'scrolled') // add class to project 01
      .addTo(controller);
  });
