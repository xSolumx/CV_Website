$(document).ready(function() {
  // Check if the user has previously set a preference
  var isDarkMode = localStorage.getItem('darkMode') === 'true';

  // If dark mode is on, toggle the classes
  if (isDarkMode) {
    $('body').addClass('dark-mode');
    $('.card').addClass('dark-mode');
    $('.btn').addClass('btn-dark-mode').removeClass('btn-dark');
    $('.navbar').addClass('navbar-dark bg-dark');
  }

  // Toggle classes and save the preference to local storage
  $('#dark-mode-toggle').click(function() {
    $('body').toggleClass('dark-mode');
    $('.card').toggleClass('dark-mode');
    $('.btn').toggleClass('btn-dark-mode btn-dark');
    $('.navbar').toggleClass('navbar-dark bg-dark');
    localStorage.setItem('darkMode', $('body').hasClass('dark-mode'));
  });
});
