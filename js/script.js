const btn = document.getElementsByClassName("btn")[0];
const modal = document.getElementsByClassName("modal")[0];
const iframe = document.getElementsByTagName("iframe")[0]


const urlVideo = 'https://www.youtube.com/embed/pT7a87NND4I?rel=0&amp;autoplay=1'

 function toggleModal() {
       modal.style.display = "block";
       iframe.src = urlVideo;
    }

 function documentOnClick(event) {
        if (event.target === modal) {
             modal.style.display = "none";
              iframe.src = ''
        }
    }


btn.addEventListener("click", toggleModal);
document.addEventListener("click", documentOnClick);