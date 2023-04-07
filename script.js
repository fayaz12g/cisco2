document.addEventListener("DOMContentLoaded", function() {
  var cursor = document.createElement("img");
  cursor.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1024px-Cisco_logo.svg.png";
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
