const btn = document.getElementsByClassName("btn")[0];
const modal = document.getElementsByClassName("modal")[0];
const iframe = document.getElementsByTagName("iframe")[0]

btn.onclick = function() {
    modal.style.display = "block";
  }
  
  document.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      iframe.src = iframe.src
    }
  }
