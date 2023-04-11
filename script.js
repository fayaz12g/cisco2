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


document.addEventListener("DOMContentLoaded", function() {
  var cursor = document.createElement("img");
  cursor.src = "https://www.transparentpng.com/thumb/mouse-cursor/lHbsTB-download-mouse-cursor-png.png";
  cursor.style.width = "50px";
  cursor.style.height = "50px";
  cursor.style.position = "fixed";
  cursor.style.pointerEvents = "none";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function(e) {
    cursor.style.left = (e.clientX - 25) + "px";
    cursor.style.top = (e.clientY - 25) + "px";
  });
});
