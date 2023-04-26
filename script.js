// Disable browser caching
window.addEventListener('load', function() {
  // Set a unique cache version to force the browser to fetch new content
  var version = '1.0.0';
  // Disable caching for all XMLHttpRequests
  $.ajaxSetup({ cache: false });
  // Disable caching for all images and scripts
  $('img, script').each(function() {
    $(this).attr('src', $(this).attr('src') + '?v=' + version);
  });
});

