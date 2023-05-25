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

// Get the current date
var currentDate = new Date();

// Find the first day of the current week (Monday)
var firstDay = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1));

// Find the last day of the current week (Friday)
var lastDay = new Date(currentDate.setDate(currentDate.getDate() + 4));

// Format the dates
var firstDayFormatted = formatDate(firstDay);
var lastDayFormatted = formatDate(lastDay);

// Set the value of the textarea
document.getElementById('week-range').value = firstDayFormatted + ' - ' + lastDayFormatted;

// Function to format the date as "Month day"
function formatDate(date) {
  var options = { month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Update the URL and hide the actual subpage
function updateURL(subpage) {
  var stateObj = { page: subpage };
  history.pushState(stateObj, '', 'index.html');
}

// Listen for navigation events
window.addEventListener('popstate', function(event) {
  // Handle browser back/forward buttons
  // You can perform actions based on the state object if needed
  // For example, you can determine which subpage was navigated to and take appropriate action
});

// Usage example
updateURL('subpage1');

