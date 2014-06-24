$(document).ready(function () {
    $('div.logo').fadeIn(2200);
});

$(function() {
      $('#slides').slidesjs({
        width: 1600,
        height: 400,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });