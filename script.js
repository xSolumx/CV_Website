$(document).ready(function() {
  // Retrieve dark mode preference from local storage
  var darkMode = localStorage.getItem('darkMode');

  // Apply dark mode classes to elements if preference exists
  if (darkMode === 'true') {
    $('body').addClass('dark-mode');
    $('.card').addClass('dark-mode');
    $('.btn').addClass('btn-dark-mode btn-dark');
    $('.navbar').addClass('navbar-dark bg-dark');
    $('#dark-mode-toggle').text('Light Mode');
  }

  // Toggle classes and save the preference to local storage
  $('#dark-mode-toggle').click(function() {
    var $btn = $(this);
    var isDarkMode = $('body').hasClass('dark-mode');
    $('body').toggleClass('dark-mode');
    $('.card').toggleClass('dark-mode');
    $('.btn').toggleClass('btn-dark-mode btn-dark');
    $('.navbar').toggleClass('navbar-dark bg-dark');
    $btn.text(isDarkMode ? 'Dark Mode' : 'Light Mode');
    localStorage.setItem('darkMode', $('body').hasClass('dark-mode'));
  });
});
