$(document).ready(function() {
    $('#dark-mode-toggle').click(function() {
      $('body').toggleClass('dark-mode');
      $('.card').toggleClass('dark-mode');
      $('.btn').toggleClass('btn-dark btn-dark-mode');
      $('.navbar').toggleClass('navbar-dark bg-dark');
    });
  });
