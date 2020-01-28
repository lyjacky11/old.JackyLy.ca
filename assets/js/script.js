function view_pdf(file) {
if (screen.width <= 768) {
   gdocs = "https://docs.google.com/viewer?url=" + location.href;
   document.getElementById('resume-pdf').href = gdocs + file + "&embedded=true";
 } else {
   document.getElementById('resume-pdf').href = file;
  }
}
function openNav() {
  document.getElementById("sideMenu").style.height = "40%";
}
function closeNav() {
  document.getElementById("sideMenu").style.height = "0";
}
